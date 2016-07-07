define('order_wizard_paymentmethod_invoice_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"order-wizard-paymentmethod-invoice-module-conditions\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "I agree to pay with my current Invoice <a data-toggle=\"show-terms\" href=\"#\">Terms & Conditions</a>", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"order-wizard-paymentmethod-invoice-module\"><div class=\"order-wizard-paymentmethod-invoice-module-row\"><div class=\"order-wizard-paymentmethod-invoice-module-terms\"><p class=\"order-wizard-paymentmethod-invoice-module-terms-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Terms", {"name":"translate","hash":{},"data":data})))
    + " </p><p class=\"order-wizard-paymentmethod-invoice-module-terms-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"termsName") || (depth0 != null ? compilerNameLookup(depth0,"termsName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"termsName","hash":{},"data":data}) : helper)))
    + " </p></div><div class=\"order-wizard-paymentmethod-invoice-module-balance\"><p class=\"order-wizard-paymentmethod-invoice-module-balance-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Available Balance", {"name":"translate","hash":{},"data":data})))
    + " </p><p class=\"order-wizard-paymentmethod-invoice-module-balance-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"balanceAvailable") || (depth0 != null ? compilerNameLookup(depth0,"balanceAvailable") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"balanceAvailable","hash":{},"data":data}) : helper)))
    + " </p></div></div><div class=\"order-wizard-paymentmethod-invoice-module-row\"><label for=\"purchase-order-number\" class=\"order-wizard-paymentmethod-invoice-module-purchase-order-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchase Order Number", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"order-wizard-paymentmethod-invoice-module-purchase-order-optional\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(Optional)", {"name":"translate","hash":{},"data":data})))
    + " </span></label><input\n			type=\"text\"\n			name=\"purchase-order-number\"\n			id=\"purchase-order-number\"\n			class=\"order-wizard-paymentmethod-invoice-module-purchase-order-value\"\n			value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"purchaseNumber") || (depth0 != null ? compilerNameLookup(depth0,"purchaseNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"purchaseNumber","hash":{},"data":data}) : helper)))
    + "\"\n		></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showTerms") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'order_wizard_paymentmethod_invoice_module'; return template;});