define('payment_wizard_credit_transaction_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "data-manage=\"payment-wizard-credits-accordion\"";
  },"3":function(depth0,helpers,partials,data) {
  return "data-manage=\"payment-wizard-deposits-accordion\"";
  },"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credits (<span class=\"payment-wizard-credit-transaction-module-credits-count\">$(0)</span>)", (depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposits (<span class=\"payment-wizard-credit-transaction-module-deposits-count\">$(0)</span>)", (depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"9":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <span class=\"payment-wizard-credit-transaction-module-subtotal-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credits Subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"payment-wizard-credit-transaction-module-subtotal-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"11":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <span class=\"payment-wizard-credit-transaction-module-subtotal-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposits Subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"payment-wizard-credit-transaction-module-subtotal-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"payment-wizard-credit-transaction-module\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "><div class=\"payment-wizard-credit-transaction-module-expander-head\"><a class=\"payment-wizard-credit-transaction-module-expander-head-toggle\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"false\" aria-controls=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"payment-wizard-credit-transaction-module-expander-head-toggle-icon\"></i></a></div><div class=\"payment-wizard-credit-transaction-module-expander-body collapse in\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\"><table class=\"payment-wizard-credit-transaction-module-records\"><thead class=\"payment-wizard-credit-transaction-module-records-head\"><tr class=\"payment-wizard-credit-transaction-module-records-head-row\"><th></th><th></th><th>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Original amount", {"name":"translate","hash":{},"data":data})))
    + "</th><th>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remaining amount", {"name":"translate","hash":{},"data":data})))
    + "</th><th>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"payment-wizard-credit-transaction-module-records-action-col\"></th></tr></thead><tbody class=\"payment-wizard-credit-transaction-module-records-body\" data-view=\"Transaction.Collection\"></tbody><tfoot class=\"payment-wizard-credit-transaction-module-records-foot\"><tr><td colspan=\"6\" class=\"payment-wizard-credit-transaction-module-subtotal\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </td></tr></tfoot></table></div></div>";
},"useData":true}); template.Name = 'payment_wizard_credit_transaction_module'; return template;});