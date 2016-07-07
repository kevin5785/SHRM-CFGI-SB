define('credit_memo_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <table class=\"credit-memo-details-table-product\"><thead class=\"credit-memo-details-table-invoices-header\"><th class=\"credit-memo-details-table-invoices-header-title-record\"></th><th class=\"credit-memo-details-table-invoices-header-date-record\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"credit-memo-details-table-invoices-header-amount-record\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td class=\"credit-memo-details-accordion-body-container-payment-total\" colspan=\"3\"><p><span class=\"credit-memo-details-accordion-body-container-payment-total-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied Subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"credit-memo-details-accordion-body-container-payment-total-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountPaidFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountPaidFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amountPaidFormatted","hash":{},"data":data}) : helper)))
    + "</span></p><p><span class=\"credit-memo-details-accordion-body-container-payment-total-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remaining subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"credit-memo-details-accordion-body-container-payment-total-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountRemainingFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amountRemainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></p></td></tr></tfoot></table> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"credit-memo-details-accordion-body-container-message\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "This Credit Memo has not been applied to any invoices yet.", {"name":"translate","hash":{},"data":data})))
    + "</p></div> ";
},"5":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"credit-memo-details-accordion-divider\"><div class=\"credit-memo-details-accordion-head\"><a class=\"credit-memo-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#credit-memo-details-memo\" aria-expanded=\"true\" aria-controls=\"credit-memo-details-memo\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "More Details", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"credit-memo-details-accordion-toggle-icon\"></i></a></div><div class=\"credit-memo-details-accordion-body collapse in\" id=\"credit-memo-details-memo\" role=\"tabpanel\" data-target=\"#credit-memo-details-memo\"><div class=\"credit-memo-details-accordion-body-container-message\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Memo:", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"credit-memo-details-memo\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"memo","hash":{},"data":data}) : helper)))
    + "</span></p></div></div></div> ";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Items", {"name":"translate","hash":{},"data":data})))
    + " ";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <a href=\"/transactionhistory\" class=\"credit-memo-details-back\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Transaction History", {"name":"translate","hash":{},"data":data})))
    + " </a><section class=\"credit-memo-details\"><header class=\"credit-memo-details-header\"><h2 class=\"credit-memo-details-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credit Memo #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"credit-memo-details-header-payment-amount\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2></header><div class=\"credit-memo-details-information\"><div class=\"credit-memo-details-information-col-date\"><p class=\"credit-memo-details-information-col-date-text\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"credit-memo-details-date-label\">Date: </span><span  class=\"credit-memo-details-information-date\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</p></div><div class=\"credit-memo-details-information-col-status\"><p class=\"credit-memo-details-information-col-status-text\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"credit-memo-details-status-label\">Status: </span><span  class=\"credit-memo-details-information-status\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"status") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</p></div></div><div class=\"credit-memo-details-row\"><div class=\"credit-memo-details-content-col\"><div class=\"credit-memo-details-accordion-divider\"><div class=\"credit-memo-details-accordion-head\"><a class=\"credit-memo-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#credit-memo-details-products\" aria-expanded=\"true\" aria-controls=\"credit-memo-details-products\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"credit-memo-details-accordion-toggle-icon\"></i></a></div><div class=\"credit-memo-details-accordion-body collapse in\" id=\"credit-memo-details-products\" role=\"tabpanel\" data-target=\"#credit-memo-details-products\"><div data-content=\"items-body\"><table class=\"credit-memo-details-table-flex-item-navigable\"><thead class=\"credit-memo-details-table-products-header\"><th class=\"credit-memo-details-table-products-header-image\"></th><th class=\"credit-memo-details-table-products-header-product\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"credit-memo-details-table-products-header-unit-price\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unit price", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"credit-memo-details-table-products-header-qty\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"credit-memo-details-table-products-header-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Items.Collection\"></tbody></table><div class=\"credit-memo-details-accordion-body-container-payment-total\"><p><span class=\"credit-memo-details-accordion-body-container-payment-total-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Items subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"credit-memo-details-accordion-body-container-payment-total-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"subTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"subTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span></p></div></div></div></div><div class=\"credit-memo-details-accordion-divider\"><div class=\"credit-memo-details-accordion-head\"><a class=\"credit-memo-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#credit-memo-details-invoice\" aria-expanded=\"true\" aria-controls=\"credit-memo-details-products\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied to Invoices", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"credit-memo-details-accordion-toggle-icon\"></i></a></div><div class=\"credit-memo-details-accordion-body collapse in\" id=\"credit-memo-details-invoice\" role=\"tabpanel\" data-target=\"#credit-memo-details-invoice\"><div data-content=\"items-body\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInvoicesDetails") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMemoDetails") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"credit-memo-details-summary-col\"><div class=\"credit-memo-details-row-fluid\"><div class=\"credit-memo-details-summary-container\"><h3 class=\"credit-memo-details-summary-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "ITEMS SUMMARY", {"name":"translate","hash":{},"data":data})))
    + "</h3><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-subtotal\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"subTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"subTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subtotal", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"credit-memo-details-summary-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"linesitemsNumberGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span></p><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-discount\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"discountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"discountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"discountFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Discount", {"name":"translate","hash":{},"data":data})))
    + " </p><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-tax\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"taxTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"taxTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"taxTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tax Item", {"name":"translate","hash":{},"data":data})))
    + " </p><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-shipping-cost\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"shippingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"shippingCostFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"shippingCostFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Cost", {"name":"translate","hash":{},"data":data})))
    + " </p><div class=\"credit-memo-details-summary-total-container\"><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-total\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Total", {"name":"translate","hash":{},"data":data})))
    + " </p></div></div><div class=\"credit-memo-details-buttons-container\"><a href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"downloadPDFURL","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" target=\"_blank\" class=\"credit-memo-details-button-download-as-pdf\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + "</a></div></div></div></div></section>";
},"useData":true}); template.Name = 'credit_memo_details'; return template;});