define('order_history_other_payments.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <table class=\"order-history-other-payments-table\"><thead><th> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Other Payments", {"name":"translate","hash":{},"data":data})))
    + " </th><th> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date", {"name":"translate","hash":{},"data":data})))
    + " </th><th> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + " </th></thead> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCreditMemos") : depth0), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDepositApplications") : depth0), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </table> ";
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"creditMemos") : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <tr data-recordtype=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"recordtype") || (depth0 != null ? compilerNameLookup(depth0,"recordtype") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"recordtype","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"><td data-type='link' class=\"order-history-other-payments-table-body\"><span class=\"order-history-other-payments-table-body-label\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depths[1] != null ? compilerNameLookup(depths[1],"showLinks") : depths[1]), {"name":"if","hash":{},"fn":this.program(4, data, depths),"inverse":this.program(6, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></td><td data-type=\"payment-date\" class=\"order-history-other-payments-table-body-date\"><span  class=\"order-history-other-payments-table-body-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-other-payments-table-body-date-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"trandate") || (depth0 != null ? compilerNameLookup(depth0,"trandate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"trandate","hash":{},"data":data}) : helper)))
    + "</span></td><td data-type=\"payment-total\" class=\"order-history-other-payments-table-body-amount\"><span class=\"order-history-other-payments-table-body-amount-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-other-payments-table-body-amount-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"transactionhistory/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"recordtype") || (depth0 != null ? compilerNameLookup(depth0,"recordtype") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"recordtype","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credit Memo #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credit Memo #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"8":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"depositApplications") : depth0), {"name":"each","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <tr data-recordtype=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"recordtype") || (depth0 != null ? compilerNameLookup(depth0,"recordtype") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"recordtype","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"><td data-type='link' class=\"order-history-other-payments-table-body\"><span class=\"order-history-other-payments-table-body-label\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depths[1] != null ? compilerNameLookup(depths[1],"showLinks") : depths[1]), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.program(12, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></td><td data-type=\"payment-date\" class=\"order-history-other-payments-table-body-date\"><span  class=\"order-history-other-payments-table-body-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-other-payments-table-body-date-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"trandate") || (depth0 != null ? compilerNameLookup(depth0,"trandate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"trandate","hash":{},"data":data}) : helper)))
    + "</span></td><td data-type=\"payment-total\" class=\"order-history-other-payments-table-body-amount\"><span class=\"order-history-other-payments-table-body-amount-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-other-payments-table-body-amount-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr> ";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"transactionhistory/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"recordtype") || (depth0 != null ? compilerNameLookup(depth0,"recordtype") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"recordtype","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposit Application #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Deposit Application #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPayments") : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true,"useDepths":true}); template.Name = 'order_history_other_payments'; return template;});