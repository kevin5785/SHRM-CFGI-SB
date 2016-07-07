define('payment_wizard_show_credit_transaction_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credits", {"name":"translate","hash":{},"data":data})))
    + " ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposits", {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  return "in";
  },"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-left\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) #$(1)", (depth0 != null ? compilerNameLookup(depth0,"type") : depth0), (depth0 != null ? compilerNameLookup(depth0,"number") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</p></div><div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-right\"><p><span class=\"payment-wizard-show-credit-transaction-module-accordion-container-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount: ", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"payment-wizard-show-credit-transaction-module-accordion-container-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amountFormatted","hash":{},"data":data}) : helper)))
    + "</span></p></div></div> ";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credits Subtotal:", {"name":"translate","hash":{},"data":data})))
    + " ";
},"11":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposits Subtotal:", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"payment-wizard-show-credit-transaction-module-accordion-divider\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-head\"><a class=\"payment-wizard-show-credit-transaction-module-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#payment-wizard-show-credit-transaction-module-products\" aria-expanded=\"true\" aria-controls=\"payment-wizard-show-credit-transaction-module-products\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"payment-wizard-show-credit-transaction-module-accordion-toggle-icon\"></i></a></div><div class=\"payment-wizard-show-credit-transaction-module-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"payment-wizard-show-credit-transaction-module-products\" role=\"tabpanel\" data-target=\"#payment-wizard-show-credit-transaction-module-products\"><div data-content=\"items-body\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-body-header\"><p class=\"payment-wizard-show-credit-transaction-module-accordion-body-header-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</p></div><div class=\"payment-wizard-show-credit-transaction-module-accordion-container\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"transactions") : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"payment-wizard-show-credit-transaction-module-accordion-body-footer\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\"><span class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-label\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span><b>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</b></div></div></div></div></div>";
},"useData":true}); template.Name = 'payment_wizard_show_credit_transaction_module'; return template;});