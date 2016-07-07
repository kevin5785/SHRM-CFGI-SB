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
define('Sensors'
,	[
		'Sensors.DataExtractor'
	,	'SC.Configuration'

	,	'jQuery'
	,	'underscore'
	]
,	function (
		SensorsDataExtractor
	,	Configuration

	,	jQuery
	,	_
	)
{
	'use strict';

	//@class Sensors @extend Object
	var sensors_module = {
		// @property {Object} nlrum
		nlrum: null
		// @property {Sensors.DataExtractor}
	,	dataExtractor: SensorsDataExtractor
		// @method loadScript @return {Void}
	,	loadScript: function ()
		{
			var self = this;

			window.NLRUM = window.NLRUM || {};
			window.NLRUM.bSendBeacon = 0;
			window.NLRUM.bResourceTimingDataCollection = 1;

			jQuery.getScript('/nlrum/nlRUM.js')
				.done(function()
				{
					if(!window.NLRUM.addSCData)
					{
						console.log('NLRUM has not defined addSCData');
						return;
					}

					self.nlrum = window.NLRUM;
					self.sendData(true);
				})
				.fail(function()
				{
					console.log('nlRUM.js failed to load');
				});
		}
		// @method getMetadata @param firstLoad @return {jQuery.Deferred}
	,	getMetadata: function (isFirstLoad)
		{
			var data = {}
			,	data_promises = []
			,	metadata_promise = jQuery.Deferred()
			,	self = this;

			_.each(this.dataExtractor, function (extractor)
			{
				// include on first load or if it needs to be sent everytime (not once)
				if(isFirstLoad || !extractor.once)
				{
					data_promises.push(extractor.extract(self.application));
				}
			});

			jQuery.when.apply(jQuery, data_promises).done(function ()
			{
				_.each(arguments, function (argument)
				{
					if(argument)
					{
						_.extend(data, argument);
					}
				});

				metadata_promise.resolve(data);
			});

			return metadata_promise;
		}
		// @method sendData @param isFirstLoad @return {Void}
	,	sendData: function (isFirstLoad)
		{
			if (this.nlrum && this.nlrum.addSCData)
			{
				var self = this;
				this.getMetadata(isFirstLoad).done(function (metadata)
				{
					self.nlrum.addSCData(metadata);
				});
			}
		}
		// @method mountToApp @param application @return {Void}
	,	mountToApp: function (application)
		{
			if(SC.ENVIRONMENT.jsEnvironment === 'browser' && SC.ENVIRONMENT.SENSORS_ENABLED)
			{
				var self = this;
				this.application = application;

				application.getLayout().on('afterAppendView', function ()
				{
					if(!self.nlrum) // first load
					{
						self.loadScript();
					}
					else
					{
						self.sendData(false);
					}
				});
			}
		}
	};

	return sensors_module;
});
