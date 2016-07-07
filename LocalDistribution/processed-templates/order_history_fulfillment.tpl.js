define('order_history_fulfillment.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"order-history-fulfillment-header-col\"><span class=\"order-history-fulfillment-shipped-status-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-fulfillment-shipped-status-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"deliveryStatus") || (depth0 != null ? compilerNameLookup(depth0,"deliveryStatus") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"deliveryStatus","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-history-fulfillment-header-col\"><span class=\"order-history-fulfillment-delivery-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Delivery Method: ", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"order-history-fulfillment-delivery-value\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDeliveryMethod") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></div> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"deliveryMethodName") || (depth0 != null ? compilerNameLookup(depth0,"deliveryMethodName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"deliveryMethodName","hash":{},"data":data}) : helper)))
    + " ";
},"6":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"order-history-fulfillment-header-col\"><span class=\"order-history-fulfillment-shipped-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipped on: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-fulfillment-shipped-date-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-history-fulfillment-container\"><div class=\"order-history-fulfillment-header\" data-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\"><div class=\"order-history-fulfillment-header-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDeliveryStatus") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDeliveryMethod") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDate") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div data-view=\"TrackingNumbers\"></div></div></div><div class=\"order-history-fulfillment-body\"><table class=\"order-history-fulfillment-items-table\"><tbody data-view=\"Items.Collection\"></tbody></table></div></div> ";
},"useData":true}); template.Name = 'order_history_fulfillment'; return template;});