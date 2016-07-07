define('order_history_shipping_group.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Ship to:", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"order-history-shipping-group-shipto-name\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"orderAddress") || (depth0 != null ? compilerNameLookup(depth0,"orderAddress") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"orderAddress","hash":{},"data":data}) : helper)))
    + "</span> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Address", {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"order-history-shipping-group-acordion-divider\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFulfillmentAcordion") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-shipping-group-accordion-head\"><a class=\"order-history-shipping-group-accordion-head-toggle "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"initiallyCollapsedArrow") || (depth0 != null ? compilerNameLookup(depth0,"initiallyCollapsedArrow") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initiallyCollapsedArrow","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetId") || (depth0 != null ? compilerNameLookup(depth0,"targetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"unfulfilled-items\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Products shipped", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"order-history-shipping-group-accordion-toggle-icon\"></i></a></div><div class=\"order-history-shipping-group-accordion-body collapse "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"initiallyCollapsed") || (depth0 != null ? compilerNameLookup(depth0,"initiallyCollapsed") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initiallyCollapsed","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetId") || (depth0 != null ? compilerNameLookup(depth0,"targetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetId","hash":{},"data":data}) : helper)))
    + "\" role=\"tabpanel\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetId") || (depth0 != null ? compilerNameLookup(depth0,"targetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-history-shipping-group-accordion-container\" data-content=\"order-items-body\"><div data-view=\"Fullfillments.Collection\"></div></div></div> ";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-shipping-group-body-no-header collapse in\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetId") || (depth0 != null ? compilerNameLookup(depth0,"targetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetId","hash":{},"data":data}) : helper)))
    + "\" role=\"tabpanel\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetId") || (depth0 != null ? compilerNameLookup(depth0,"targetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-history-shipping-group-accordion-container\" data-content=\"order-items-body\"><div data-view=\"Fullfillments.Collection\"></div></div></div> ";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-shipping-group-acordion-divider\"><div class=\"order-history-shipping-group-accordion-head\"><a class=\"order-history-shipping-group-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetPendingId") || (depth0 != null ? compilerNameLookup(depth0,"targetPendingId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetPendingId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"unfulfilled-items\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Products pending shipment", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"order-history-shipping-group-accordion-toggle-icon-secondary\"></i></a></div><div class=\"order-history-shipping-group-accordion-body collapse\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetPendingId") || (depth0 != null ? compilerNameLookup(depth0,"targetPendingId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetPendingId","hash":{},"data":data}) : helper)))
    + "\" role=\"tabpanel\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetPendingId") || (depth0 != null ? compilerNameLookup(depth0,"targetPendingId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetPendingId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-history-shipping-group-accordion-container\" data-content=\"order-items-body\"><table data-view=\"PendingLines\" class=\"order-history-shipping-group-pending-table\"></table></div></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = " <div class=\"order-history-shipping-group-shipping-information\" data-id=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"shipaddress") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\"><h3 class=\"order-history-shipping-group-shipping-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipped Items", {"name":"translate","hash":{},"data":data})))
    + "</h3><div class=\"order-history-shipping-group-shipping-accordion-divider\"><div class=\"order-history-shipping-group-accordion-head\"><a class=\"order-history-shipping-group-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetAddressId") || (depth0 != null ? compilerNameLookup(depth0,"targetAddressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetAddressId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"unfulfilled-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOrderAddress") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"order-history-shipping-group-accordion-toggle-icon-secondary\"></i></a></div><div class=\"order-history-shipping-group-accordion-body collapse\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetAddressId") || (depth0 != null ? compilerNameLookup(depth0,"targetAddressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetAddressId","hash":{},"data":data}) : helper)))
    + "\" role=\"tabpanel\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"targetAddressId") || (depth0 != null ? compilerNameLookup(depth0,"targetAddressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"targetAddressId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-history-shipping-group-accordion-container\"><div class=\"order-history-shipping-group-info-card-container\"><div class=\"order-history-shipping-group-info-card\"><h5 class=\"order-history-shipping-group-info-card-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Address", {"name":"translate","hash":{},"data":data})))
    + " </h5><div class=\"order-history-shipping-group-info-card-info-shipping\"><div data-view=\"Shipping.Address.View\"></div></div></div><div class=\"order-history-shipping-group-info-card\"><h5 class=\"order-history-shipping-group-info-card-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Delivery Method", {"name":"translate","hash":{},"data":data})))
    + " </h5><div class=\"order-history-shipping-group-info-card-info\"><div class=\"order-history-shipping-group-details-info-card-delivery-method\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"deliveryMethodName") || (depth0 != null ? compilerNameLookup(depth0,"deliveryMethodName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"deliveryMethodName","hash":{},"data":data}) : helper)))
    + " </div></div></div></div></div></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFulfillment") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPendingLines") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'order_history_shipping_group'; return template;});