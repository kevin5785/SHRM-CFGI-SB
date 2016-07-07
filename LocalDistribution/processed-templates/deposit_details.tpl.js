define('deposit_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "in";
  },"3":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <table class=\"deposit-details-invoice-table\"><thead class=\"deposit-details-invoice-table-heading\"><th class=\"deposit-details-invoice-table-heading-number\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Number", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"deposit-details-invoice-table-heading-date\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoice Date", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"deposit-details-invoice-table-heading-date-applied\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date Applied", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"deposit-details-invoice-table-heading-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td colspan=\"4\" class=\"deposit-details-applied-amount\"><span class=\"deposit-details-applied-amount-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied Amount:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"deposit-details-applied-amount-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paidFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paidFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paidFormatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr><tr><td colspan=\"4\" class=\"deposit-details-remaining-amount\"><span class=\"deposit-details-remaining-amount-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remaining Amount:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"deposit-details-remaining-amount-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"remainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"remainingFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"remainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr></tfoot></table> ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"deposit-details-row\"><div class=\"deposit-details-deposit-message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "This Deposit has not been applied to any invoices yet.", {"name":"translate","hash":{},"data":data})))
    + " </div></div> ";
},"7":function(depth0,helpers,partials,data) {
  return " <div class=\"deposit-details-method\"><div data-view=\"PaymentMethod\"></div></div> ";
  },"9":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"deposit-details-info-card-grid\"><div class=\"deposit-details-info-card\"><span class=\"deposit-details-memo-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Memo:", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"deposit-details-memo-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"memo","hash":{},"data":data}) : helper)))
    + "</span></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <section class=\"deposit-details\"><header><h2 class=\"deposit-details-header-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposit <span class=\"deposit-details-number\">#$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"deposit-details-deposit-payment\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2><a href=\"/transactionhistory\" class=\"deposit-details-back-btn\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Transaction History", {"name":"translate","hash":{},"data":data})))
    + " </a></header><div class=\"deposit-details-header-information\"><div class=\"deposit-details-row\"><div class=\"deposit-details-header-col-left\"><p class=\"deposit-details-date-info\"><span class=\"deposit-details-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"deposit-details-date-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tranDate","hash":{},"data":data}) : helper)))
    + "</span></p></div><div class=\"deposit-details-header-col-right\"><p class=\"deposit-details-status-info\"><span class=\"deposit-details-status-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"deposit-details-status-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"status") || (depth0 != null ? compilerNameLookup(depth0,"status") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</span></p></div></div><div class=\"deposit-details-row\"><div class=\"deposit-details-button-container\"><a href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"downloadPDFURL","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" target=\"_blank\" class=\"deposit-details-button-download-as-pdf\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + "</a></div></div></div><div class=\"deposit-details-accordion-divider\"><div class=\"deposit-details-accordion-head\"><a class=\"deposit-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-applied-to-invoices\" aria-expanded=\"true\" aria-controls=\"deposit-applied-to-invoices\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied to Invoices", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"deposit-details-accordion-toggle-icon\"></i></a></div><div class=\"deposit-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"deposit-applied-to-invoices\" role=\"tabpanel\" data-target=\"#deposit-applied-to-invoices\"><div class=\"deposit-details-accordion-container-table\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></div><div class=\"deposit-details-accordion-divider\"><div class=\"deposit-details-accordion-head\"><a class=\"deposit-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-billing\" aria-expanded=\"true\" aria-controls=\"deposit-billing\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Billing & Payment Method", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"deposit-details-accordion-toggle-icon\"></i></a></div><div class=\"deposit-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"deposit-billing\" role=\"tabpanel\" data-target=\"#deposit-billing\"><div class=\"deposit-details-accordion-container\"><div class=\"deposit-details-row\"><div class=\"deposit-details-info-card-grid\"><div class=\"deposit-details-info-card\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div></div></section> ";
},"useData":true}); template.Name = 'deposit_details'; return template;});