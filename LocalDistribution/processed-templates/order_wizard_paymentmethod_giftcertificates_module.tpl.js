define('order_wizard_paymentmethod_giftcertificates_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <header class=\"order-wizard-paymentmethod-giftcertificates-module-step-header\"><h2 class=\"order-wizard-paymentmethod-giftcertificates-module-section-header\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + " </h2></header> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add other Gift Certificate", {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Apply a Gift Certificate", {"name":"translate","hash":{},"data":data})))
    + " ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <table class=\"order-wizard-paymentmethod-giftcertificates-module-table\"><thead class=\"order-wizard-paymentmethod-giftcertificates-module-table-header\"><tr><th class=\"order-wizard-paymentmethod-giftcertificates-module-row-number\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Gift Certificate number", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"order-wizard-paymentmethod-giftcertificates-module-row-amount\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount applied", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"order-wizard-paymentmethod-giftcertificates-module-row-remaining\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remaining balance", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"order-wizard-paymentmethod-giftcertificates-module-row-actions\"></th></tr></thead><tbody class=\"order-wizard-paymentmethod-giftcertificates-module-table-body\" data-view=\"GiftCertificatesRecords\"></tbody></table> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-paymentmethod-giftcertificates-module\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"order-wizard-paymentmethod-giftcertificates-module-expander-head\"><a class=\"order-wizard-paymentmethod-giftcertificates-module-expander-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#gift-certificate-form\" aria-expanded=\"false\" aria-controls=\"gift-certificate-form\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasGiftCertificates") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"order-wizard-paymentmethod-giftcertificates-module-expander-icon\"></i></a></div><form id=\"gift-certificate-form\" class=\"order-wizard-paymentmethod-giftcertificates-module-form collapse\" data-action=\"gift-certificate-form\"><div class=\"order-wizard-paymentmethod-giftcertificates-module-form-expander-container\"><fieldset><div class=\"order-wizard-paymentmethod-giftcertificates-module-form-input-container\"><input type=\"text\" class=\"order-wizard-paymentmethod-giftcertificates-module-form-input\" name=\"code\"></div><div class=\"order-wizard-paymentmethod-giftcertificates-module-form-submit-container\"><button type=\"submit\" class=\"order-wizard-paymentmethod-giftcertificates-module-form-submit\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Apply", {"name":"translate","hash":{},"data":data})))
    + " </button></div><div data-type=\"alert-placeholder-gif-certificate\"></div></fieldset></div></form> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasGiftCertificates") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'order_wizard_paymentmethod_giftcertificates_module'; return template;});