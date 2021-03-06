/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module QuoteToSalesOrderWizard
define('QuoteToSalesOrderWizard.View'
,	[
		'Wizard.View'
	,	'Wizard.StepNavigation.View'

	,	'quote_to_salesorder_wizard_layout.tpl'
	]
,	function (
		WizardView
	,	WizardStepNavigationView

	,	quote_to_salesorder_wizard_layout_tpl
	)
{
	'use strict';

	//@class QuoteToSalesOrderWizard.View @extend Wizard.View
	return WizardView.extend({

		//@property {Function} template
		template: quote_to_salesorder_wizard_layout_tpl

		//@property {String} bodyClass
	,	bodyClass: 'force-hide-side-nav'

		//@property {ChildViews} childViews
    ,	childViews: {
	    	'Wizard.StepNavigation': function()
	    	{
	    		return new WizardStepNavigationView({wizard: this.wizard});
	    	}
	    }
	});
});