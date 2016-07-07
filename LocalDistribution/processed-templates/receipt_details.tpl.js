define('receipt_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<a href=\"/purchases/view/$(1)/$(2)\" class=\"receipt-details-back-btn\">&lt; Back to $(0)</a>", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/transactionhistory\" class=\"receipt-details-back-btn\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Transaction History", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"receipt-details-accordion-divider\"><div class=\"receipt-details-accordion-head\"><a class=\"receipt-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#receipt-products-list\" aria-expanded=\"true\" aria-controls=\"#receipt-products-list\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLinesLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"receipt-details-accordion-toggle-icon\"></i></a></div><div class=\"receipt-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" id=\"receipt-products-list\" role=\"tabpanel\" data-target=\"#receipt-products-list\"><div class=\"receipt-details-accordion-container\" data-content=\"order-items-body\"><table class=\"receipt-details-item-details-table\"><tbody data-view=\"Item.Details.Line\"></tbody></table></div></div></div> ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Products (<span class=\"receipt-details-items-count\">$(0)</span>)", (depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product (<span class=\"receipt-details-items-count\">$(0)</span>)", (depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  return "in";
  },"12":function(depth0,helpers,partials,data) {
  return " <div data-view=\"FormatPaymentMethod\"></div> ";
  },"14":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "N/A", {"name":"translate","hash":{},"data":data})))
    + " ";
},"16":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Address.View\"></div> ";
  },"18":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Items", {"name":"translate","hash":{},"data":data})))
    + " ";
},"20":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"22":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"receipt-details-summary-grid-float\"><span class=\"receipt-details-summary-amount-discount\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"discountTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"discountTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"discountTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Discount", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"24":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"receipt-details-summary-grid-float\"><span class=\"receipt-details-summary-amount-shipping\"><span class=\"receipt-details-summary-shippingcost\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"shippingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"shippingCostFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"shippingCostFormatted","hash":{},"data":data}) : helper)))
    + "</span></span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Total", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"26":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"receipt-details-summary-grid-float\"><span class=\"receipt-details-summary-amount-handling\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"handlingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"handlingCostFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"handlingCostFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Handling Total", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"28":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"receipt-details-summary-grid-float\"><span class=\"receipt-details-summary-amount-promocode\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"promocode") || (depth0 != null ? compilerNameLookup(depth0,"promocode") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promocode","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Promo Code", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"haveCreatedFrom") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section><header><h2 class=\"receipt-details-order-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Receipt <span class=\"tranid\">#$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"orderNumber") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"receipt-details-title-header-amount\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + " </span></h2></header><div class=\"receipt-details-header-information\"><div class=\"receipt-details-header-row\"><div class=\"receipt-details-header-col-left\"><p class=\"receipt-details-header-date-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"receipt-details-header-date-label\">Date: </span><span class=\"receipt-details-header-date\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"date") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div><div class=\"receipt-details-header-col-right\"><p class=\"receipt-details-header-status-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"receipt-details-header-status-label\">Status: </span><span class=\"receipt-details-header-status\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"status") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div><div class=\"receipt-details-header-amount\"><p class=\"receipt-details-header-amount-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"receipt-details-header-amount-label\">Amount: </span><span class=\"receipt-details-header-amount-number\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div></div></div><div class=\"receipt-details-row\"><div class=\"receipt-details-content-col\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"receipt-details-accordion-divider\"><div class=\"receipt-details-accordion-head\"><a class=\"receipt-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#receipt-payment-info\" aria-expanded=\"true\" aria-controls=\"#receipt-payment-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Information", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"receipt-details-accordion-toggle-icon\"></i></a></div><div class=\"receipt-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"receipt-payment-info\" role=\"tabpanel\" data-target=\"#receipt-payment-info\"><div class=\"receipt-details-accordion-container\" data-content=\"order-items-body\"><div class=\"receipt-details-info-card\"><h5 class=\"receipt-details-info-card-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Method:", {"name":"translate","hash":{},"data":data})))
    + " </h5><div class=\"receipt-details-info-card-info\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div><div class=\"receipt-details-info-card\"><h5 class=\"receipt-details-info-card-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Bill to:", {"name":"translate","hash":{},"data":data})))
    + " </h5><div class=\"receipt-details-info-card-info-billing\"><address> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </address></div></div></div></div></div></div><div class=\"receipt-details-summary-col\"><div class=\"receipt-details-summary-container\"><h3 class=\"receipt-details-summary-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SUMMARY", {"name":"translate","hash":{},"data":data})))
    + " </h3><div class=\"receipt-details-summary-subtotal\"><p class=\"receipt-details-summary-grid-float\"><span class=\"receipt-details-summary-amount-subtotal\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"subTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"subTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subtotal", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"receipt-details-summary-subtotal-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(20, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span></p></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDiscountTotal") : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showShippingCost") : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHandlingCost") : depth0), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPromocode") : depth0), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <p class=\"receipt-details-summary-grid-float\"><span class=\"receipt-details-summary-amount-tax\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"taxTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"taxTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"taxTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tax Total", {"name":"translate","hash":{},"data":data})))
    + " </p><div class=\"receipt-details-summary-total\"><p class=\"receipt-details-summary-grid-float\"><span class=\"receipt-details-summary-amount-total\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Total", {"name":"translate","hash":{},"data":data})))
    + " </p></div></div><div class=\"receipt-details-row-fluid\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pdfUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"receipt-details-button-download-pdf\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + " </a></div></div></div></section> ";
},"useData":true}); template.Name = 'receipt_details'; return template;});