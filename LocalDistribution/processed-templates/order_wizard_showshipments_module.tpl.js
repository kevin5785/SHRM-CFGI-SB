define('order_wizard_showshipments_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <section class=\"order-wizard-showshipments-module-shipping-details\"><div class=\"order-wizard-showshipments-module-shipping-details-body\"><div class=\"order-wizard-showshipments-module-shipping-details-address\"><h3 class=\"order-wizard-showshipments-module-shipping-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Address", {"name":"translate","hash":{},"data":data})))
    + " </h3> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showShippingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showShippingMetod") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></section> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div data-view=\"Shipping.Address\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEditButton") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a data-action=\"edit-module\" href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editUrl","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "?force=true\" class=\"order-wizard-showshipments-module-shipping-details-address-link\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to edit shipping information", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a data-action=\"edit-module\" href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editUrl","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "?force=true\" class=\"order-wizard-showshipments-module-shipping-details-address-link\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select a valid shipping address", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-showshipments-module-shipping-details-method\"><h3 class=\"order-wizard-showshipments-module-shipping-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Delivery Method", {"name":"translate","hash":{},"data":data})))
    + " </h3> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEditButton") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <select id=\"delivery-options\" data-action=\"change-delivery-options\" data-type=\"edit-module\" class=\"order-wizard-showshipments-module-shipping-options\" name=\"delivery-options\"> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedShipmethod") : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"shippingMethods") : depth0), {"name":"each","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </select> ";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <option>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select a delivery method", {"name":"translate","hash":{},"data":data})))
    + "</option> ";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <option value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " > "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rate_formatted") || (depth0 != null ? compilerNameLookup(depth0,"rate_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rate_formatted","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " </option> ";
},"12":function(depth0,helpers,partials,data) {
  return "selected";
  },"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedShipmethod") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <div class=\"order-wizard-showshipments-module-shipping-details-method-info-card\"><span class=\"order-wizard-showshipments-module-shipmethod-name\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + ": </span><span class=\"order-wizard-showshipments-module-shipmethod-rate\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"rate_formatted") : stack1), depth0))
    + " </span></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showShippingInformation") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"useData":true}); template.Name = 'order_wizard_showshipments_module'; return template;});