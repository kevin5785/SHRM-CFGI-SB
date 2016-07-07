define('order_wizard_showpayments_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Billing.Address\"></div> ";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"order-wizard-showpayments-module-billing-address-edit\" data-action=\"edit-module\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"editBillingUrl") || (depth0 != null ? compilerNameLookup(depth0,"editBillingUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editBillingUrl","hash":{},"data":data}) : helper)))
    + "?force=true\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select a valid billing address", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"order-wizard-showpayments-module-billing-address-edit\" data-action=\"edit-module\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"editBillingUrl") || (depth0 != null ? compilerNameLookup(depth0,"editBillingUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editBillingUrl","hash":{},"data":data}) : helper)))
    + "?force=true\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to edit billing information", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <h3 class=\"order-wizard-showpayments-module-section-header\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Type", {"name":"translate","hash":{},"data":data})))
    + " </h3><div class=\"order-wizard-showpayments-module-payment-methods-summary\"><div data-view=\"PaymentMethods.Collection\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showGiftcertificates") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showGuestEmail") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <br><b>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Gift Certificates", {"name":"translate","hash":{},"data":data})))
    + "</b><br><div data-view=\"GiftCertificates.Collection\"></div> ";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div><h5>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"guestEmail") || (depth0 != null ? compilerNameLookup(depth0,"guestEmail") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"guestEmail","hash":{},"data":data}) : helper)))
    + "</h5></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <section class=\"order-wizard-showpayments-module-details\"><div class=\"order-wizard-showpayments-module-details-body\"><div class=\"order-wizard-showpayments-module-billing-address\"><h3 class=\"order-wizard-showpayments-module-section-header\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Billing Address", {"name":"translate","hash":{},"data":data})))
    + " </h3> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEditBillingButton") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"order-wizard-showpayments-module-payment-method\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPayments") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></section>";
},"useData":true}); template.Name = 'order_wizard_showpayments_module'; return template;});