define('quote_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <span class=\"quote-details-header-info-expiration-date-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"duedate") || (depth0 != null ? compilerNameLookup(depth0,"duedate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"duedate","hash":{},"data":data}) : helper)))
    + "</span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isOverdue") : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  return " <i class=\"quote-details-header-info-expiration-date-icon-overdue\"></i> ";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isCloseOverdue") : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return " <i class=\"quote-details-header-info-expiration-date-icon-closeoverdue\"></i> ";
  },"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"quote-details-header-info-expiration-date-value\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Not specified", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
},"9":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p class=\"quote-details-header-info-status\"><span class=\"quote-details-header-label-status\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"quote-details-header-value-status\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"entityStatusName") || (depth0 != null ? compilerNameLookup(depth0,"entityStatusName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"entityStatusName","hash":{},"data":data}) : helper)))
    + "</span></p> ";
},"11":function(depth0,helpers,partials,data) {
  return "collapsed";
  },"13":function(depth0,helpers,partials,data) {
  return "in";
  },"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"quote-details-accordion-divider\"><div class=\"quote-details-accordion-head\"><a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-comments\" aria-expanded=\"false\" aria-controls=\"#quote-comments\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "My comments", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"quote-details-accordion-toggle-icon\"></i></a></div><div class=\"quote-details-accordion-body collapse\" id=\"quote-comments\" role=\"tabpanel\" data-target=\"quote-comments\"><div class=\"quote-details-accordion-container\"><div class=\"quote-details-comments-row\"> "
    + escapeExpression(((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0), {"name":"breaklines","hash":{},"data":data})))
    + " </div></div></div></div> ";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"quote-details-accordion-divider\"><div class=\"quote-details-accordion-head\"><a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-billing-info\" aria-expanded=\"false\" aria-controls=\"#quote-billing-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Information", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"quote-details-accordion-toggle-icon\"></i></a></div><div class=\"quote-details-accordion-body collapse\" id=\"quote-billing-info\" role=\"tabpanel\" data-target=\"quote-billing-info\"><div class=\"quote-details-accordion-container\"><div class=\"quote-details-billing-row\"><div class=\"quote-details-billing-info-card\"><h5 class=\"quote-details-billing-info-card-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Bill to:", {"name":"translate","hash":{},"data":data})))
    + " </h5><div data-view=\"Billing.Address\"></div></div></div></div></div></div> ";
},"19":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"quote-details-accordion-divider\"><div class=\"quote-details-accordion-head\"><a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-messages\" aria-expanded=\"false\" aria-controls=\"#quote-messages\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Message from Sales Representative", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"quote-details-accordion-toggle-icon\"></i></a></div><div class=\"quote-details-accordion-body collapse\" id=\"quote-messages\" role=\"tabpanel\" data-target=\"quote-messages\"><div class=\"quote-details-accordion-container\"><div class=\"quote-details-message-row\"> "
    + escapeExpression(((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"message") : depth0), {"name":"breaklines","hash":{},"data":data})))
    + " </div></div></div></div> ";
},"21":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"quote-details-disclaimer-message\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "For immediate assistance contact <strong>$(0)</strong> at <strong>$(1)</strong>. For additional information, send an email to <strong>$(2)</strong>.", (depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0), (depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0), (depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</small> ";
},"23":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <small class=\"quote-details-disclaimer-message\">";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"disclaimer","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</small> ";
},"25":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = " <p class=\"quote-details-summary-grid-float\"><span class=\"quote-details-summary-amount-discount\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Discount", {"name":"translate","hash":{},"data":data})))
    + " </p><div class=\"quote-details-summary-grid\"><div class=\"quote-details-summary-amount-discount-text-success\"><span class=\"quote-details-summary-amount-discount-code\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, true, {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></div></div> ";
},"26":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " ("
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"discount") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + ") ";
},"28":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <p class=\"quote-details-summary-grid-float\"><span class=\"quote-details-summary-promo-code\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discountrate_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Promo Code Applied", {"name":"translate","hash":{},"data":data})))
    + " </p><div class=\"quote-details-summary-grid\"><div class=\"quote-details-summary-promocode-text-success\"><span class=\"quote-details-summary-promocode-code\">#"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"promocode") : stack1)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "</span></div></div> ";
},"30":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <p class=\"quote-details-summary-grid-float\"><span class=\"quote-details-summary-handling-cost-formatted\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Handling", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"32":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1), {"name":"unless","hash":{},"fn":this.program(33, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasPermission") : depth0), {"name":"if","hash":{},"fn":this.program(43, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"33":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div data-type=\"quote-details-and-order-msg-placeholder\"><div class=\"quote-details-msg\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasPermissionAndHasErrors") : depth0), {"name":"if","hash":{},"fn":this.program(34, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0), {"name":"if","hash":{},"fn":this.program(37, data),"inverse":this.program(39, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showGiftCertificateMessage") : depth0), {"name":"if","hash":{},"fn":this.program(41, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"34":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "The following information is needed:", {"name":"translate","hash":{},"data":data})))
    + "</p><ul> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"purchaseValidationErrors") : depth0), {"name":"each","hash":{},"fn":this.program(35, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul> ";
},"35":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <li>- "
    + escapeExpression(lambda(depth0, depth0))
    + "</li> ";
},"37":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "To place the order please contact <strong>$(0)</strong> at <strong>$(1)</strong> or send an email to <strong>$(2)</strong>", (depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0), (depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0), (depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"39":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <p>";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimerSummary") || (depth0 != null ? compilerNameLookup(depth0,"disclaimerSummary") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"disclaimerSummary","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p> ";
},"41":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"quote-details-msg-certificate\"><p><i class=\"quote-details-msg-certificate-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Gift Certificate not allowed", {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
},"43":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewQuoteURL") || (depth0 != null ? compilerNameLookup(depth0,"reviewQuoteURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewQuoteURL","hash":{},"data":data}) : helper)))
    + "\" class=\"quote-details-button-review-and-order\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1), {"name":"unless","hash":{},"fn":this.program(44, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Review and Place Order", {"name":"translate","hash":{},"data":data})))
    + "</a> ";
},"44":function(depth0,helpers,partials,data) {
  return "disabled";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", lambda=this.lambda, buffer = " <a href=\"/quotes\" class=\"quote-details-header-back-btn\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to quotes", {"name":"translate","hash":{},"data":data})))
    + "</a><section class=\"quote-details\"><div class=\"quote-details-view\"><header><h2 class=\"quote-details-header-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quote ", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"quote-details-quote-id\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"tranid") || (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tranid","hash":{},"data":data}) : helper)))
    + "</span><span class=\"quote-details-header-amount-total\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " </span></h2></header><div class=\"quote-details-header-information\"><div class=\"quote-details-row\"><div class=\"quote-details-header-col-left\"><p class=\"quote-details-header-info-request-date\"><span class=\"quote-details-header-label-request-date\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Request date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"quote-details-header-value-date\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span></p><p class=\"quote-details-header-info-expiration-date\"><span class=\"quote-details-header-info-expiration-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Expiration date: ", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasDuedate") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p></div><div class=\"quote-details-header-col-right\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showQuoteStatus") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></div><div class=\"quote-details-row\"><div class=\"quote-details-content-col\"><div class=\"quote-details-accordion-divider\"><div class=\"quote-details-accordion-head\"><a class=\"quote-details-accordion-head-toggle ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"unless","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-toggle=\"collapse\" data-target=\"#quote-products\" aria-expanded=\"true\" aria-controls=\"#quote-products\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Items ($(0))", (depth0 != null ? compilerNameLookup(depth0,"lineItemsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <i class=\"quote-details-accordion-toggle-icon\"></i></a></div><div class=\"quote-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"quote-products\" role=\"tabpanel\" data-target=\"#quote-products\"><table class=\"quote-details-products-table lg2sm-first\"><tbody data-view=\"Items.Collection\"></tbody></table></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMessage") : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"quote-details-disclaimer-bottom-content\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.program(23, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div><div class=\"quote-details-summary-col\"><div class=\"quote-details-summary-container\"><h3 class=\"quote-details-summary-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SUMMARY", {"name":"translate","hash":{},"data":data})))
    + " </h3><div class=\"quote-details-summary-subtotal\"><p class=\"quote-details-summary-grid-float\"><span class=\"quote-details-summary-amount-subtotal\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subtotal", {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDiscount") : depth0), {"name":"if","hash":{},"fn":this.program(25, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPromocode") : depth0), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"quote-details-summary-grid-float\"><span class=\"quote-details-summary-amount-shipping\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHandlingCost") : depth0), {"name":"if","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"quote-details-summary-grid-float\"><span class=\"quote-details-summary-amount-tax\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tax Total", {"name":"translate","hash":{},"data":data})))
    + " </p><div class=\"quote-details-summary-total\"><p class=\"quote-details-summary-grid-float\"><span class=\"quote-details-summary-amount-total\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Total", {"name":"translate","hash":{},"data":data})))
    + " </p></div></div><div class=\"quote-details-row-fluid\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0), {"name":"if","hash":{},"fn":this.program(32, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pdfUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"quote-details-button-download-pdf\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + "</a></div><div class=\"quote-details-disclaimer-bottom\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.program(23, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div></section> ";
},"useData":true}); template.Name = 'quote_details'; return template;});