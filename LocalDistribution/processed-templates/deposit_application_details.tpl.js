define('deposit_application_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "in";
  },"3":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <table class=\"deposit-application-details-table\"><thead class=\"deposit-application-details-table-header\"><th class=\"deposit-application-details-table-header-number\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Number", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"deposit-application-details-table-header-transaction-date\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Transaction Date", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"deposit-application-details-table-header-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td class=\"deposit-application-details-applied-amount\" colspan=\"3\"><span class=\"deposit-application-details-applied-amount-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied Amount:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"deposit-application-details-applied-amount-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr></tfoot></table> ";
},"5":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"deposit-application-details-accordion-divider\"><div class=\"deposit-application-details-accordion-head\"><a class=\"deposit-application-details-accordion-head-toggle-secondary\" data-toggle=\"collapse\" data-target=\"#deposit-application-more-details\" aria-expanded=\"true\" aria-controls=\"deposit-application-more-details\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "More Details", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"deposit-application-details-accordion-toggle-icon-secondary\"></i></a></div><div class=\"deposit-application-details-accordion-body collapse\" id=\"deposit-application-more-details\" role=\"tabpanel\" data-target=\"#deposit-application-more-details\"><div class=\"deposit-application-details-accordion-container\"><div class=\"deposit-application-details-info-card\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Memo:", {"name":"translate","hash":{},"data":data})))
    + "</p><p class=\"deposit-application-details-deposit-memo\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"memo","hash":{},"data":data}) : helper)))
    + "</p></div></div></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <section><a href=\"/transactionhistory\" class=\"deposit-application-details-back-btn\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Transaction History", {"name":"translate","hash":{},"data":data})))
    + " </a><header><h2 class=\"deposit-application-details-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposit Application <span class=\"deposit-application-details-deposit-number\">#$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"deposit-application-details-deposit-amount\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2></header><div class=\"deposit-application-details-header-information\"><div class=\"deposit-application-details-row\"><div class=\"deposit-application-details-header-information-container\"><p class=\"deposit-application-details-transaction-date-info\"><span class=\"deposit-application-details-transaction-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Transaction Date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"deposit-application-details-transaction-date-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tranDate","hash":{},"data":data}) : helper)))
    + "</span></p><p class=\"deposit-application-details-from-info\"><span class=\"deposit-application-details-from-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "From:", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"deposit-application-details-from-link\"><a href=\"/transactionhistory/customerdeposit/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"depositInternalId") || (depth0 != null ? compilerNameLookup(depth0,"depositInternalId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"depositInternalId","hash":{},"data":data}) : helper)))
    + "\" class=\"deposit-application-details-deposit-link\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"depositName") || (depth0 != null ? compilerNameLookup(depth0,"depositName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"depositName","hash":{},"data":data}) : helper)))
    + " </a></span></p><p class=\"deposit-application-details-deposit-date-info\"><span class=\"deposit-application-details-deposit-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposit Date:", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"deposit-application-details-deposit-date-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"depositDate") || (depth0 != null ? compilerNameLookup(depth0,"depositDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"depositDate","hash":{},"data":data}) : helper)))
    + "</span></p></div></div></div><div class=\"deposit-application-details-accordion-divider\"><div class=\"deposit-application-details-accordion-head\"><a class=\"deposit-application-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-application-applied-to-invoices\" aria-expanded=\"true\" aria-controls=\"deposit-application-applied-to-invoices\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied to Invoices", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"deposit-application-details-accordion-toggle-icon\"></i></a></div><div class=\"deposit-application-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"deposit-application-applied-to-invoices\" role=\"tabpanel\" data-target=\"#deposit-application-applied-to-invoices\"><div class=\"deposit-application-details-accordion-container-table\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </section>";
},"useData":true}); template.Name = 'deposit_application_details'; return template;});