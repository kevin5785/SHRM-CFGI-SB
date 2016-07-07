define('order_wizard_showshipments_actionable_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <section class=\"order-wizard-showshipments-actionable-module-shipping-details\"><div class=\"order-wizard-showshipments-actionable-module-shipping-details-body\"><div class=\"order-wizard-showshipments-actionable-module-shipping-details-address\"><h3 class=\"order-wizard-showshipments-actionable-module-shipping-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Address", {"name":"translate","hash":{},"data":data})))
    + " </h3> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showShippingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"order-wizard-showshipments-actionable-module-shipping-details-method\"><h3 class=\"order-wizard-showshipments-actionable-module-shipping-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Method", {"name":"translate","hash":{},"data":data})))
    + " </h3><div class=\"order-wizard-showshipments-actionable-module-shipping-details-method-info-card\"><span class=\"order-wizard-showshipments-actionable-module-shipmethod-name\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + " </span> : <span class=\"order-wizard-showshipments-actionable-module-shipmethod-rate\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"rate_formatted") : stack1), depth0))
    + " </span></div></div></div></section> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div data-view=\"Shipping.Address\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEditButton") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a data-action=\"edit-module\" href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editUrl","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "?force=true\" class=\"order-wizard-showshipments-actionable-module-shipping-details-address-link\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Shipping", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a data-action=\"edit-module\" href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editUrl","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "?force=true\" class=\"order-wizard-showshipments-actionable-module-shipping-details-address-link\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select a valid shipping address", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Products ($(0))", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product ($(0))", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showShippingInformation") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section class=\"order-wizard-showshipments-actionable-module-cart-details\"><div class=\"order-wizard-showshipments-actionable-module-cart-details-accordion-head\"><a class=\"order-wizard-showshipments-actionable-module-cart-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#unfulfilled-items\" aria-expanded=\"true\" aria-controls=\"unfulfilled-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"linesLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <i class=\"order-wizard-showshipments-actionable-module-cart-details-accordion-toggle-icon\"></i></a></div><div class=\"order-wizard-showshipments-actionable-module-cart-details-accordion-body collapse\" id=\"unfulfilled-items\" role=\"tabpanel\" data-target=\"#unfulfilled-items\"><div class=\"order-wizard-showshipments-actionable-module-accordion-container\" data-content=\"order-items-body\"><table class=\"\"><tbody data-view=\"Items.Collection\"></tbody></table></div></div></section>";
},"useData":true}); template.Name = 'order_wizard_showshipments_actionable_module'; return template;});