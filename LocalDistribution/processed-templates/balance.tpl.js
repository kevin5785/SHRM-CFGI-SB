define('balance.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/\" class=\"balance-button-back\"><i class=\"balance-button-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Account", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"balance-indicator-title-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company","hash":{},"data":data}) : helper)))
    + "</span> ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" href=\"/make-a-payment\" class=\"balance-continue-button\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Continue to Payment", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" class=\"balance-continue-button\" disabled> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No Payment Due", {"name":"translate","hash":{},"data":data})))
    + " </button> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section class=\"balance\"><div class=\"balance-content\"><h2 class=\"balance-billing-header\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Account Balance", {"name":"translate","hash":{},"data":data})))
    + " </h2><div class=\"balance-billing-account-balance\"><div class=\"balance-indicator\"><div class=\"balance-indicator-body\"><div class=\"balance-indicator-title\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCompany") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"balance-indicator-bar\"><div class=\"balance-indicator-bar-progress\" style=\"width: "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"percentage") || (depth0 != null ? compilerNameLookup(depth0,"percentage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"percentage","hash":{},"data":data}) : helper)))
    + "%;\"></div></div><div class=\"balance-indicator-details\"><div class=\"balance-indicator-details-outstanding-balance\"><span class=\"balance-indicator-details-outstanding-reference\"></span><span class=\"balance-indicator-details-outstanding-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Outstanding Balance", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"balance-indicator-details-outstanding-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"balanceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"balanceFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"balanceFormatted","hash":{},"data":data}) : helper)))
    + "</span></div><div class=\"balance-indicator-details-available-credit\"><span class=\"balance-indicator-details-available-credit-reference\"></span><span class=\"balance-indicator-details-available-credit-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Available", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"balance-indicator-details-available-credit-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"balanceAvailableFormatted") || (depth0 != null ? compilerNameLookup(depth0,"balanceAvailableFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"balanceAvailableFormatted","hash":{},"data":data}) : helper)))
    + " </span></div></div></div><div class=\"balance-indicator-summary\"><p class=\"balance-indicator-summary-credit-limit\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credit Limit: <span class=\"balance-indicator-summary-credit-limit-value\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"creditLimitFormatted") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div></div><div class=\"balance-credit-and-account\"><div class=\"balance-summary-credits\"><div class=\"balance-summary-credits-card\"><div class=\"balance-summary-credits-body\"><p class=\"balance-summary-credits-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credits", {"name":"translate","hash":{},"data":data})))
    + " </p><div class=\"balance-summary-credits-deposits\"><span class=\"balance-summary-credits-deposits-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposits: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"balance-summary-credits-deposits-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"depositsRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositsRemainingFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"depositsRemainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></div><div class=\"balance-summary-credits-credit-memos\"><span class=\"balance-summary-credits-credit-memos-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Other Credits: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"balance-summary-credits-credit-memos-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"creditMemosRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditMemosRemainingFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"creditMemosRemainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></div></div></div></div><div class=\"balance-summary-account-details\"><div class=\"balance-summary-account-details-card\"><div class=\"balance-summary-account-details-body\"><p class=\"balance-summary-account-details-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Account Details", {"name":"translate","hash":{},"data":data})))
    + " </p><div class=\"balance-summary-account-terms\"><span class=\"balance-summary-account-terms-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Term: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"balance-summary-account-terms-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paymentTermsName") || (depth0 != null ? compilerNameLookup(depth0,"paymentTermsName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paymentTermsName","hash":{},"data":data}) : helper)))
    + "</span></div><div class=\"balance-summary-account-currency\"><span class=\"balance-summary-account-currency-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Currency: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"balance-summary-account-currency-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"shopperCurrencyCode") || (depth0 != null ? compilerNameLookup(depth0,"shopperCurrencyCode") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"shopperCurrencyCode","hash":{},"data":data}) : helper)))
    + "</span></div></div></div></div></div></div></div><div class=\"balance-actions\"><div class=\"balance-actions-proceed\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"livePaymentHaveInvoices") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"balance-actions-print\"><a href=\"/printstatement\" data-permissions=\"transactions.tranStatement.2\" class=\"balance-print-button\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Print a Statement", {"name":"translate","hash":{},"data":data})))
    + " </a></div></div></section> ";
},"useData":true}); template.Name = 'balance'; return template;});