/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/*
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/
//@module Sensors
define('Sensors.DataExtractor'
,	[
		'Profile.Model'

	,	'Session'

	,	'jQuery'
	,	'underscore'
	]
,	function (
		ProfileModel

	,	Session

	,	jQuery
	,	_
	)
{
	'use strict';
	// @class Sensors.DataExtractor @extend Object
	return {
		// @property {Object} site
		site:
		{
			// @property {Boolean} once
			once: false
			// @method extract @param application @return {jQuery.Deferred}
		,	extract: function (application)
			{
				var site_data = {
					sitePage: ''
				,	siteUrl: ''
				}
				,	layout = application.getLayout()
				,	site_data_promise = jQuery.Deferred()
				,	view_id = layout.currentView && layout.currentView.attributes && (layout.currentView.attributes.id || layout.currentView.attributes.class);

				if(view_id)
				{
					site_data.sitePage = view_id;
				}

				site_data.siteUrl = window.location.href;

				return site_data_promise.resolve(site_data);
			}
		}
		// @property {Object} cart
	,	cart:
		{
			// @property {Boolean} once
			once: false
			// @method extract @param application @return {jQuery.Deferred}
		,	extract: function (application)
			{
				var cart_data = {
						cartLines: ''
					}
				,	cart_data_promise = jQuery.Deferred();

				application.getCart()
					.done(function (cart)
					{
						cart_data.cartLines = cart.get('lines').length + '';
						cart_data_promise.resolve(cart_data);
					})
					.fail(function ()
					{
						cart_data_promise.resolve(cart_data);
					});

				return cart_data_promise;
			}
		}
		// @property {Object} bundle
	,	bundle:
		{
			// @property {Boolean} once
			once: true
			// @method extract @param application @return {jQuery.Deferred}
		,	extract: function ()
			{
				var bundle_data_promise = jQuery.Deferred()
				,	bundle_metadata = {}
				,	release_metadata = SC.ENVIRONMENT.RELEASE_METADATA || {};

				bundle_metadata.bundleId = release_metadata.bundle_id || '';
				bundle_metadata.bundleName = release_metadata.name || '';
				bundle_metadata.bundleVersion = release_metadata.version || '';
				bundle_metadata.buildNo = release_metadata.buildno || '';
				bundle_metadata.dateLabel = release_metadata.datelabel || '';
				bundle_metadata.baseLabel = release_metadata.baselabel || '';

				return bundle_data_promise.resolve(bundle_metadata);
			}
		}
		// @property {Object} customer
	,	customer:
		{
			// @property {Boolean} once
			once: false
			// @method extract @param application @return {jQuery.Deferred}
		,	extract: function ()
			{
				var profile_model = ProfileModel.getInstance()
				,	isGuest = profile_model.get('isGuest') === 'T'
                ,	isLoggedIn = !isGuest && profile_model.get('isLoggedIn') === 'T'
                ,	isRecognized = !isGuest && profile_model.get('isRecognized') === 'T'
				,	isReturning = !isGuest && isLoggedIn
				,	isNew = !isGuest && !isRecognized && !isLoggedIn
				,	customer_data = {};

				customer_data.customerSessionStatus = isNew ? 'New' : isReturning ? 'Returning' : isGuest ? 'Guest' : isRecognized ? 'Recognized' : '';
				return jQuery.Deferred().resolve(customer_data);
			}
		}
		// @property {Object} shopper
	,	shopper:
		{
			// @property {Boolean} once
			once: false
			// @method extract @param application @return {jQuery.Deferred}
		,	extract: function ()
			{
				var shopper_data = { shopperInternalId: '', currencyCode: ''}
				,	profile_instance = ProfileModel.getInstance();

				var shopper_id = profile_instance.get('internalid');
				if(shopper_id && shopper_id !== '0')
				{
					shopper_data.shopperInternalId = shopper_id;
				}

				shopper_data.currencyCode = Session.get('currency.code') || '';

				return jQuery.Deferred().resolve(shopper_data);
			}
		}
		// @property {Object} device
	,	device:
		{
			// @property {Boolean} once
			once: true
			// @method extract @param application @return {jQuery.Deferred}
		,	extract: function ()
			{
				return jQuery.Deferred().resolve({ device: _.getDeviceType()});
			}
		}
		// @property {Object} error_status
	,	error_status:
		{
			// @property {Boolean} once
			once: false
			// @method extract @param application @return {jQuery.Deferred}
		,	extract: function (application)
			{
				var current_view = application.getLayout().currentView
				,	errorData = current_view.isErrorView && _.result(current_view.attributes, 'id') || '';

				return jQuery.Deferred().resolve({ errorStatus: errorData});
			}
		}
	};
});
