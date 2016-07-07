/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module QuoteToSalesOrder
define('QuoteToSalesOrder.Model'
,	[
		'Transaction.Model'
	,	'OrderHistory.Model'
	,	'SC.Configuration'
	,	'Tracker'
	,	'Backbone'

	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		TransactionModel
	,	OrderHistoryModel
	,	Configuration
	,	Tracker
	,	Backbone

	,	_
	,	jQuery
	)
{
	'use strict';

	//@class QuoteToSalesOrder.Model @extend Transaction.Model
	return TransactionModel.extend(
	{
		initialize: function (attributes)
		{
			// call the initialize of the parent object, equivalent to super()
			TransactionModel.prototype.initialize.apply(this, arguments);

			this.on('change:confirmation', function (model, confirmation)
			{
				model.set('confirmation', new OrderHistoryModel(confirmation), {silent: true});
			});
			this.trigger('change:confirmation', this, attributes && attributes.confirmation || {});
		}
		//@method urlRoot Property implemented as a function to add in all server calls the quote id parameter
		//@return {String}
	,	urlRoot: function ()
		{
			return _.getAbsoluteUrl('services/QuoteToSalesOrder.Service.ss?quoteid=') + this.get('quoteid');
		}

//////////////////////////////////////////////////////
//			COPIED METHODS							//
//	The following method have been copied from 		//
//	the LiveOrder.Model as the idea is make	 		//
//	parity with the standard checkout process 		//
//	in the future when the LiveOrder.Model 			//
//	start inherit from Transaction.Model we will	//
//	be able to unify this two models 				//
//////////////////////////////////////////////////////

		// @method getNonShippableLines
		// @returns {Array<OrderLine.Model>} the order's line that are NON Shippable
	,	getNonShippableLines: function ()
		{
			return this.get('lines').filter(function (line) { return !line.get('item').get('_isfulfillable'); });
		}

		//@method getIfThereAreDeliverableItems Determines if at least one item is shippable
		//@return {Boolean}
	,	getIfThereAreDeliverableItems: function ()
		{
			return this.get('lines').length !== this.getNonShippableLines().length;
		}

		// @method shippingAddressIsRequired Checks if the shipping address is require and if all items in the order are nonshippable
		// @return {Boolean}
	,	shippingAddressIsRequired: function ()
		{
			return this.getIfThereAreDeliverableItems() && Configuration.get('siteSettings.requireshippinginformation', 'F') === 'T';
		}

		//@method save Override default save method to just return a resolved promise when the cart have already been saved.
		//@return {jQuery.Deferred}
	,	save: function ()
		{
			if (this.get('confirmation') && this.get('confirmation').get('internalid'))
			{
				return jQuery.Deferred().resolve();
			}

			return TransactionModel.prototype.save.apply(this, arguments);
		}

		// @method submit Method invoked when the user a new sales order want to be created from a quote
		// @return {jQuery.Deferred}
	,	submit: function ()
		{
			var self = this;

			return this._submit.apply(this, arguments).done(function ()
				{
					// Converting the Transaction.Model into Track.Transaction.Model until we unified it with the LiveOrder.Model
					var confirmation = self.get('confirmation')
					,	summary = self.get('summary')
					,	transaction = {
							confirmationNumber: confirmation.get('confirmationnumber')
						,	subTotal: summary.subtotal
						,	total: summary.total
						,	taxTotal: summary.taxtotal
						,	shippingCost: summary.shippingcost
						,	handlingCost: summary.handlingcost
						,	products: new Backbone.Collection()
						}
					,	transactionModel = new Backbone.Model(transaction);

					self.get('lines').each(function(line)
					{
						var item = line.get('item');

						transactionModel.get('products').add(new Backbone.Model({
							sku: item.get('_sku', true)
						,	name: item.get('displayname')
						,	category: item.get('category')
						,	rate: line.get('rate')
						,	quantity: line.get('quantity')
						,	options: _.map(item.get('options'), function(option) { return option.displayvalue; }).sort().join(', ')
						}));
					});

					Tracker.getInstance().trackTransaction(transactionModel, {
						category: 'quote-order'
					,	action: 'button'
					,	label: ''
					,	value: 1
					});
				}).fail(function (jqXhr)
				{
					jqXhr.preventDefault = true;
				});
		}
	});
});
