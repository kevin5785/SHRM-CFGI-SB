define('invoice_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <header><h2 class=\"invoice-details-invoice-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoice <span class=\"invoice-details-invoice-number\">#$(0)</span>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"invoice-details-invoice-amount\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></h2></header> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <span class=\"invoice-details-amount\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "</span> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <span class=\"invoice-details-amount\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "</span> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <p class=\"invoice-details-header-created-from\"><span class=\"invoice-details-header-created-from-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Created from: ", {"name":"translate","hash":{},"data":data})))
    + "</span><a href=\"/purchases/view/"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), depth0))
    + "/"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-header-created-from-value\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchase #$(0)", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"tranid") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </a></p> ";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <span class=\"invoice-details-header-due-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Due Date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"invoice-details-header-due-date-value\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"dueDate") : stack1), depth0))
    + "</span> ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"invoice-details-header-due-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Due Date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"invoice-details-header-due-date-value\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, " N/A", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <span class=\"invoice-details-header-amount-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount:", {"name":"translate","hash":{},"data":data})))
    + "</span> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + " ";
},"14":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <span class=\"invoice-details-header-amount-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount:", {"name":"translate","hash":{},"data":data})))
    + "</span> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " ";
},"16":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"invoice-details-content-col\"><div class=\"invoice-details-accordion-divider\"><div class=\"invoice-details-accordion-head\"><a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-details-products\" aria-expanded=\"true\" aria-controls=\"invoice-details-products\">";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"linesLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"invoice-details-accordion-toggle-icon\"></i></a></div><div class=\"invoice-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"invoice-details-products\" role=\"tabpanel\" data-target=\"#invoice-details-products\"><div data-content=\"items-body\"><table class=\"invoice-details-products-table lg2sm-first\"><thead class=\"invoice-details-table-products-header\"><th class=\"invoice-details-table-products-header-image\"></th><th class=\"invoice-details-table-products-header-product\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"invoice-details-table-products-header-qty\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Qty", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"invoice-details-table-products-header-unit-price\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unit price", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"invoice-details-table-products-header-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Items.Collection\"></tbody></table></div></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSaleRep") : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"invoice-details-accordion-divider\"><div class=\"invoice-details-accordion-head\"><a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-billing\" aria-expanded=\"true\" aria-controls=\"invoice-billing\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Billing", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"invoice-details-accordion-toggle-icon\"></i></a></div><div class=\"invoice-details-accordion-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"invoice-billing\" role=\"tabpanel\" data-target=\"#invoice-billing\"><div class=\"invoice-details-accordion-container\"><div class=\"invoice-details-row\"><div class=\"invoice-details-info-card-grid\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"invoice-details-info-card-grid\"><div class=\"invoice-details-info-card\"><div class=\"invoice-details-info-card-terms-container\"><p class=\"invoice-details-info-card-terms-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Terms:", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showTerms") : depth0), {"name":"if","hash":{},"fn":this.program(30, data),"inverse":this.program(32, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0), {"name":"if","hash":{},"fn":this.program(34, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div></div></div></div> ";
},"17":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Products ($(0))", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"19":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product ($(0))", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"21":function(depth0,helpers,partials,data) {
  return "in";
  },"23":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, functionType="function", buffer = " <div class=\"invoice-details-accordion-divider\"><div class=\"invoice-details-accordion-head\"><a class=\"invoice-details-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-salesrep\" aria-expanded=\"true\" aria-controls=\"invoice-salesrep\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sales Rep", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"invoice-details-accordion-toggle-icon-secondary\"></i></a></div><div class=\"invoice-details-accordion-body collapse\" id=\"invoice-salesrep\" role=\"tabpanel\" data-target=\"#invoice-salesrep\"><div class=\"invoice-details-accordion-container\"><div class=\"invoice-details-row\"><div class=\"invoice-details-info-card-grid\"><div class=\"invoice-details-info-card\"><p class=\"invoice-details-info-card-name-title\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</p><p>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"siteName","hash":{},"data":data}) : helper)))
    + "</p></div></div><div class=\"invoice-details-info-card-grid\"><div class=\"invoice-details-info-card\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSaleRepPhone") : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSaleRepEmail") : depth0), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div></div></div> ";
},"24":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <p class=\"invoice-details-info-card-tel-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tel:", {"name":"translate","hash":{},"data":data})))
    + "</p><p>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "</p> ";
},"26":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <p class=\"invoice-details-info-card-email-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email:", {"name":"translate","hash":{},"data":data})))
    + "</p><p>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "</p> ";
},"28":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Billing.Address\"></div> ";
  },"30":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"termsName") || (depth0 != null ? compilerNameLookup(depth0,"termsName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"termsName","hash":{},"data":data}) : helper)))
    + "</span> ";
},"32":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "N/A", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
},"34":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <div class=\"invoice-details-info-card-memo-container\"><p class=\"invoice-details-info-card-memo-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Memo:", {"name":"translate","hash":{},"data":data})))
    + "</p><span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), depth0))
    + "</span></div> ";
},"36":function(depth0,helpers,partials,data) {
  return "invoice-details-summary-col-modal";
  },"38":function(depth0,helpers,partials,data) {
  return "invoice-details-summary-col";
  },"40":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Items", {"name":"translate","hash":{},"data":data})))
    + " ";
},"42":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"44":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-gift-certificate\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"giftcertapplied_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Gift Certificate", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"46":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = " <div class=\"invoice-details-summary-total-container\"><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-subtotal\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Total", {"name":"translate","hash":{},"data":data})))
    + " </p></div><div class=\"invoice-details-adjustments-title\"><h5> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "ADJUSTMENTS", {"name":"translate","hash":{},"data":data})))
    + " </h5></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPayments") : depth0), {"name":"if","hash":{},"fn":this.program(47, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCreditMemos") : depth0), {"name":"if","hash":{},"fn":this.program(50, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDepositApplications") : depth0), {"name":"if","hash":{},"fn":this.program(53, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"47":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"payments") : depth0), {"name":"each","hash":{},"fn":this.program(48, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"48":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-payment\"> ("
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + ") </span><a href=\"/transactionhistory/customerpayment/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </a></p> ";
},"50":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"creditMemos") : depth0), {"name":"each","hash":{},"fn":this.program(51, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"51":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-credit-memo\"> ("
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + ") </span><a href=\"/transactionhistory/creditmemo/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credit Memo #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </a></p> ";
},"53":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"depositApplications") : depth0), {"name":"each","hash":{},"fn":this.program(54, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"54":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-deposit\"> ("
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + ") </span><a href=\"/transactionhistory/depositapplication/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposit Applications #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </a></p> ";
},"56":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"invoice-details-button-make-a-payment-container\"><a data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"makeAPaymentPermissions") || (depth0 != null ? compilerNameLookup(depth0,"makeAPaymentPermissions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"makeAPaymentPermissions","hash":{},"data":data}) : helper)))
    + "\" href=\"/make-a-payment\" data-type=\"make-a-payment\" class=\"invoice-details-button-make-a-payment\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Make a Payment", {"name":"translate","hash":{},"data":data})))
    + " </a></div> ";
},"58":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <a href=\"invoices/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-link-goto\" data-action=\"update-layout\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Go to detailed page", {"name":"translate","hash":{},"data":data})))
    + "</a><a href=\"#\" class=\"invoice-details-button-close\" data-dismiss=\"modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Close", {"name":"translate","hash":{},"data":data})))
    + "</a> ";
},"60":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a target=\"_blank\" class=\"invoice-details-button-download-as-pdf\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"donwloadPdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"donwloadPdfUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"donwloadPdfUrl","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <a href=\"/invoices\" class=\"invoice-details-back-btn\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Invoices", {"name":"translate","hash":{},"data":data})))
    + "</a><section class=\"invoice-details\"><div class=\"content invoice-details-view\"> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"invoice-details-header-information\"><div class=\"invoice-details-header-row\"><div class=\"invoice-details-header-col-left\"><p class=\"invoice-details-header-date-info\"><span class=\"invoice-details-header-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoice Date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"invoice-details-header-date-value\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCreatedFrom") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"invoice-details-header-due-date-info\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDueDate") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p></div><div class=\"invoice-details-header-col-right\"><p class=\"invoice-details-header-status-info\"><span class=\"invoice-details-header-status-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"invoice-details-header-status-value\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span></p></div><div class=\"invoice-details-header-amount\"><p class=\"invoice-details-header-amount-info\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p></div></div></div><div class=\"invoice-details-row\" name=\"invoice-content-layout\"> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0), {"name":"unless","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0), {"name":"if","hash":{},"fn":this.program(36, data),"inverse":this.program(38, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" name=\"summary-container\"><div class=\"invoice-details-row-fluid\"><div class=\"invoice-details-summary-container\"><h3 class=\"invoice-details-summary-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SUMMARY", {"name":"translate","hash":{},"data":data})))
    + " </h3><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-items-number\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subtotal", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"invoice-details-summary-subtotal-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"linesitemsNumberGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(40, data),"inverse":this.program(42, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span></p><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-tax-total\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tax Total", {"name":"translate","hash":{},"data":data})))
    + " </p><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-shipping-cost\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping", {"name":"translate","hash":{},"data":data})))
    + " </p><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-handling-value\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Handling", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showGiftcerticate") : depth0), {"name":"if","hash":{},"fn":this.program(44, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAdjustments") : depth0), {"name":"if","hash":{},"fn":this.program(46, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-amount-due\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount Due", {"name":"translate","hash":{},"data":data})))
    + " </p></div></div><div class=\"invoice-details-buttons-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMakeAPaymentButton") : depth0), {"name":"if","hash":{},"fn":this.program(56, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0), {"name":"if","hash":{},"fn":this.program(58, data),"inverse":this.program(60, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div></section> ";
},"useData":true}); template.Name = 'invoice_details'; return template;});