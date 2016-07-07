define('receipt_details_item_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"receipt-details-item-summary-label\">Quantity</span>: <span class=\"receipt-details-item-summary-quantity\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <p><span>";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAmountLabel") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasDiscount") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"amount_label") : stack1), depth0));
  },"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"receipt-details-item-summary-label\">Amount</span>", {"name":"translate","hash":{},"data":data})))
    + ": ";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <span class=\"receipt-details-item-summary-non-discounted-amount\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span><span class=\"receipt-details-item-summary-amount\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span> ";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amountFormatted","hash":{},"data":data}) : helper)));
  },"11":function(depth0,helpers,partials,data) {
  return "&nbsp;";
  },"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)));
  },"15":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <span class=\"receipt-details-item-summary-amount\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"receipt-details-item-summary\"> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isDiscountType") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAmount") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'receipt_details_item_summary'; return template;});