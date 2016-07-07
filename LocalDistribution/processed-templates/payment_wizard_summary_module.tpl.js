define('payment_wizard_summary_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"payment-wizard-summary-module-deposits-subtotal\"><p class=\"payment-wizard-summary-module-grid-float\"><span class=\"payment-wizard-summary-module-deposits-subtotal-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"depositTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"depositTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposits Subtotal", {"name":"translate","hash":{},"data":data})))
    + " </p></div><div class=\"payment-wizard-summary-module-credits-subtotal\"><p class=\"payment-wizard-summary-module-grid-float\"><span class=\"payment-wizard-summary-module-credits-subtotal-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"creditTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"creditTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credits Subtotal", {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"payment-wizard-summary-module-estimated-total-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"invoiceTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"payment-wizard-summary-module-estimated-total-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"payment-wizard-summary-module-alert-information\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add your credit card security code (CSC/CVV) before submitting the payment", {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPaymentMethodRequireLabel") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"payment-wizard-summary-module-alert-information\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment method is not required", {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"payment-wizard-summary-module\"><div class=\"payment-wizard-summary-module-container\"><header class=\"payment-wizard-summary-module-header\"><h3 class=\"payment-wizard-summary-module-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Summary", {"name":"translate","hash":{},"data":data})))
    + " </h3></header><div class=\"payment-wizard-summary-module-body\"><div class=\"payment-wizard-summary-module-invoices\"><p class=\"payment-wizard-summary-module-grid-float\"><span class=\"payment-wizard-summary-module-invoices-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"invoiceTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoices (<span class=\"payment-wizard-summary-module-invoices-number\">$(0)</span>)", (depth0 != null ? compilerNameLookup(depth0,"selectedInvoicesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showTotalLabel") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"payment-wizard-summary-module-estimated\"><p class=\"payment-wizard-summary-module-grid-float\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEstimatedAsInvoiceTotal") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalLabel") || (depth0 != null ? compilerNameLookup(depth0,"totalLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalLabel","hash":{},"data":data}) : helper)))
    + " </p></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCreditCardInformatioRequrieLabel") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div><div class=\"payment-wizard-summary-module-buttons-container\"><button class=\"payment-wizard-summary-module-button-continue\" data-action=\"submit-step\" "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonDisabled") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonDisabled") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"continueButtonDisabled","hash":{},"data":data}) : helper)))
    + " > "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"continueButtonLabel","hash":{},"data":data}) : helper)))
    + " </button></div></div> ";
},"useData":true}); template.Name = 'payment_wizard_summary_module'; return template;});