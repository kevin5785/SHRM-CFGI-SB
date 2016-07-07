define('return_authorization_detail.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <p class=\"return-authorization-detail-header-info-from\"><span class=\"return-authorization-detail-header-info-from-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Created from:", {"name":"translate","hash":{},"data":data})))
    + " </span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCreatedFromLink") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <a href=\"/purchases/view/"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), depth0))
    + "/"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchase #$(0)", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"tranid") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchase #$(0)", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Returned Products ($(0))", (depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Returned Product", {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  return "in";
  },"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"return-authorization-detail-comments-row\"><div class=\"return-authorization-detail-comments\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Comments:", {"name":"translate","hash":{},"data":data})))
    + "</p><blockquote>"
    + escapeExpression(((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), {"name":"breaklines","hash":{},"data":data})))
    + "</blockquote></div></div> ";
},"14":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"return-authorization-detail-creditmemo-accordion-row\"><div class=\"return-authorization-detail-creditmemo-accordion-divider\"><div class=\"return-authorization-detail-creditmemo-accordion-head\"><a class=\"return-authorization-detail-creditmemo-accordion-head-toggle "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"initiallyCollapsedArrow") || (depth0 != null ? compilerNameLookup(depth0,"initiallyCollapsedArrow") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initiallyCollapsedArrow","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"collapse\" data-target=\"#creditmemo-applied-invoices\" aria-expanded=\"true\" aria-controls=\"creditmemo-applied-invoices\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied to Transactions", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"return-authorization-detail-creditmemo-accordion-toggle-icon\"></i></a></div><div class=\"return-authorization-detail-creditmemo-accordion-body collapse "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"initiallyCollapsed") || (depth0 != null ? compilerNameLookup(depth0,"initiallyCollapsed") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initiallyCollapsed","hash":{},"data":data}) : helper)))
    + "\" id=\"creditmemo-applied-invoices\" role=\"tabpanel\" data-target=\"#creditmemo-applied-invoices\"><div data-content=\"items-body\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInvoicesDetails") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div> ";
},"15":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <table class=\"return-authorization-detail-creditmemo-table-product\"><thead class=\"return-authorization-detail-creditmemo-table-invoices-header\"><th class=\"return-authorization-detail-creditmemo-table-invoices-header-title-record\"></th><th class=\"return-authorization-detail-creditmemo-table-invoices-header-date-record\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-detail-creditmemo-table-invoices-header-amount-record\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td class=\"return-authorization-detail-creditmemo-accordion-body-container-payment-total\" colspan=\"3\"><p><span class=\"return-authorization-detail-creditmemo-accordion-body-container-payment-total-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied Subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"return-authorization-detail-creditmemo-accordion-body-container-payment-subtotal-value\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountpaid_formatted") : stack1), depth0))
    + "</span></p><p><span class=\"return-authorization-detail-creditmemo-accordion-body-container-payment-total-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remaining subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"return-authorization-detail-creditmemo-accordion-body-container-payment-total-value-remaining\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountremaining_formatted") : stack1), depth0))
    + "</span></p></td></tr></tfoot></table> ";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"return-authorization-detail-creditmemo-accordion-body-container-message\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "This return has not been applied yet.", {"name":"translate","hash":{},"data":data})))
    + "</p></div> ";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Items", {"name":"translate","hash":{},"data":data})))
    + " ";
},"21":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"23":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <p class=\"return-authorization-detail-summary-grid-float\"><span class=\"return-authorization-detail-summary-amount-discount\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Discount Total", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"25":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <p class=\"return-authorization-detail-summary-grid-float\"><span class=\"return-authorization-detail-summary-amount-handling\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Handling Cost", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"27":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <p class=\"return-authorization-detail-summary-grid-float\"><span class=\"return-authorization-detail-summary-amount-shipping\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Cost", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"29":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"return-authorization-detail-summary-cancel-request\"><button class=\"return-authorization-detail-summary-cancel-request-button\" data-action=\"cancel\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cancel Request", {"name":"translate","hash":{},"data":data})))
    + "</button></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, functionType="function", buffer = " <a href=\"/returns\" class=\"return-authorization-detail-back\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Returns", {"name":"translate","hash":{},"data":data})))
    + "</a><article class=\"return-authorization-detail\"><header><h2 class=\"return-authorization-detail-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Return <span class=\"return-authorization-detail-number\">#$(0)</span>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"return-authorization-detail-header-total\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " </span></h2></header><div data-type=\"alert-placeholder\"></div><div class=\"return-authorization-detail-header-info\"><div class=\"return-authorization-detail-header-row\"><div class=\"return-authorization-detail-header-info-left\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCreatedFrom") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"return-authorization-detail-header-info-return-date\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date:", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"return-authorization-detail-header-info-return-date-value\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span></p><p class=\"return-authorization-detail-header-info-amount\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount: <span class=\"return-authorization-detail-header-info-amount-value\">$(0)</span>", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </p></div><div class=\"return-authorization-detail-header-info-right\"><p class=\"return-authorization-detail-status\"><span class=\"return-authorization-detail-header-info-status-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"return-authorization-detail-header-info-status-value\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + " </span></p></div></div></div><div class=\"return-authorization-detail-row\" name=\"return-content-layout\"><div class=\"return-authorization-detail-content-col\"><div class=\"return-authorization-detail-accordion-divider\"><div class=\"return-authorization-detail-accordion-head\"><a href=\"#\" class=\"return-authorization-detail-head-toggle "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"initiallyCollapsedArrow") || (depth0 != null ? compilerNameLookup(depth0,"initiallyCollapsedArrow") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initiallyCollapsedArrow","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"collapse\" data-target=\"#return-products\" aria-expanded=\"true\" aria-controls=\"return-products\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"linesLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"return-authorization-detail-head-toggle-icon\"></i></a></div><div class=\"return-authorization-detail-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"return-products\" role=\"tabpanel\" data-target=\"#return-products\"><table class=\"return-authorization-detail-products-table lg2sm-first\"><thead class=\"return-authorization-detail-headers\"><tr><th class=\"return-authorization-detail-headers-image\"></th><th class=\"return-authorization-detail-headers-product\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-detail-headers-quantity\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Qty", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-detail-headers-reason\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Reason", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-detail-headers-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></tr></thead><tbody data-view=\"Items.Collection\"></tbody></table></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showComments") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAppliesSection") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"return-authorization-detail-summary-col\"><div class=\"return-authorization-detail-summary-container\"><h3 class=\"return-authorization-detail-summary-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "ITEMS SUMMARY", {"name":"translate","hash":{},"data":data})))
    + " </h3><p class=\"return-authorization-detail-summary-grid-float\"><span class=\"return-authorization-detail-summary-subtotal\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subtotal", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"return-authorization-detail-summary-subtotal-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"linesitemsNumberGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.program(21, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDiscountTotal") : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"return-authorization-detail-summary-grid-float\"><span class=\"return-authorization-detail-summary-amount-tax\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tax Total", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHandlingTotal") : depth0), {"name":"if","hash":{},"fn":this.program(25, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showShippingTotal") : depth0), {"name":"if","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"return-authorization-detail-summary-total\"><p class=\"return-authorization-detail-summary-grid-float\"><span class=\"return-authorization-detail-summary-amount-total\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "TOTAL", {"name":"translate","hash":{},"data":data})))
    + " </p></div></div><div class=\"return-authorization-detail-summary-pdf\"><a class=\"return-authorization-detail-summary-pdf-download-button\" data-stdnav target=\"_blank\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"downloadPDFURL","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + " </a></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCancelable") : depth0), {"name":"if","hash":{},"fn":this.program(29, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div> ";
},"useData":true}); template.Name = 'return_authorization_detail'; return template;});