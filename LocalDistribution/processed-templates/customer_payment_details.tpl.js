define('customer_payment_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "in";
  },"3":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <table class=\"customer-payment-details-accordion-body-container-recordviews-table\"><thead class=\"customer-payment-details-accordion-body-container-recordviews-table-header\"><tr><th class=\"customer-payment-details-accordion-body-container-recordviews-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Number", {"name":"translate","hash":{},"data":data})))
    + " </th><th class=\"customer-payment-details-accordion-body-container-recordviews-date\" data-name=\"date\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date", {"name":"translate","hash":{},"data":data})))
    + " </th><th class=\"customer-payment-details-accordion-body-container-recordviews-discount\" data-name=\"discount\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Disc", {"name":"translate","hash":{},"data":data})))
    + " </th><th class=\"customer-payment-details-accordion-body-container-recordviews-currency\" data-name=\"amount\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + " </th></tr></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td colspan=\"4\" class=\"customer-payment-details-accordion-body-container-payment-total\"><p><span class=\"customer-payment-details-payment-total-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Total: ", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"customer-payment-details-payment-total-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + " </span></p></td></tr></tfoot></table> ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"customer-payment-details-noinvoices-message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "This payment is not applied to any invoices.", {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"7":function(depth0,helpers,partials,data) {
  return " <div class=\"customer-payment-details-accordion-body-container-payment-method\"><div class=\"customer-payment-details-accordion-body-container-payment-method-card\"><div data-view=\"PaymentMethod\"></div></div></div> ";
  },"9":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"customer-payment-details-accordion-body-container-payment-memo\"><div class=\"customer-payment-details-accordion-body-container-payment-memo-card\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Memo:", {"name":"translate","hash":{},"data":data})))
    + " <div class=\"customer-payment-details-accordion-body-container-payment-memo-card-info\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"memo","hash":{},"data":data}) : helper)))
    + "</div></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <a href=\"/transactionhistory\" class=\"customer-payment-details-back\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Transaction History", {"name":"translate","hash":{},"data":data})))
    + " </a><section class=\"customer-payment-details\"><header class=\"customer-payment-details-header\"><h2> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment <span class=\"customer-payment-details-header-number\">#$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"customer-payment-details-header-amount\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2></header><div class=\"customer-payment-details-information\"><div class=\"customer-payment-details-information-col-date\"><p class=\"customer-payment-details-information-col-date-text\"><span class=\"customer-payment-details-information-col-status-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"customer-payment-details-information-date\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tranDate","hash":{},"data":data}) : helper)))
    + " </span></p></div><div class=\"customer-payment-details-information-col-status\"><p class=\"customer-payment-details-information-col-status-text\"><span class=\"customer-payment-details-information-col-status-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"customer-payment-details-information-status\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"status") || (depth0 != null ? compilerNameLookup(depth0,"status") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + " </span></p><a href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"downloadPDFURL","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" target=\"_blank\" class=\"customer-payment-details-information-col-button\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + " </a></div></div><div class=\"customer-payment-details-accordion-head\"><a class=\"customer-payment-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#invoice-items\" aria-expanded=\"true\" aria-controls=\"invoice-items\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoices", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"customer-payment-details-accordion-toggle-icon\"></i></a></div><div class=\"customer-payment-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"invoice-items\" role=\"tabpanel\" data-target=\"#invoice-items\"><div class=\"customer-payment-details-accordion-container\" data-content=\"order-items-body\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div><div class=\"customer-payment-details-accordion-head\"><a class=\"customer-payment-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#billing-payment-items\" aria-expanded=\"true\" aria-controls=\"billing-payment-items\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Billing & Payment Method", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"customer-payment-details-accordion-toggle-icon\"></i></a></div><div class=\"customer-payment-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"billing-payment-items\" role=\"tabpanel\" data-target=\"#billing-payment-items\"><div class=\"customer-payment-details-accordion-container\" data-content=\"order-items-body\"><div class=\"customer-payment-details-accordion-body-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></section> ";
},"useData":true}); template.Name = 'customer_payment_details'; return template;});