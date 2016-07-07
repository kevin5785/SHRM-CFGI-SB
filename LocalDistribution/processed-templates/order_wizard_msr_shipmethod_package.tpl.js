define('order_wizard_msr_shipmethod_package.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a data-action=\"edit-module\" href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editUrl","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "?force=true\" class=\"order-wizard-msr-shipmethod-package-address-link\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to edit shipping information", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showActions") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <select data-address-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\" data-type=\"address-selector\" data-action=\"edit-module\" class=\"order-wizard-msr-shipmethod-package-option-select\"> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedShipmethod") : depth0), {"name":"unless","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"shippingMethods") : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </select> ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <option>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select a delivery method", {"name":"translate","hash":{},"data":data})))
    + "</option> ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <option value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-type=\"delivery-method-option\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " > "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rate_formatted") || (depth0 != null ? compilerNameLookup(depth0,"rate_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rate_formatted","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " </option> ";
},"8":function(depth0,helpers,partials,data) {
  return "selected";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedShipmethod") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <div class=\"order-wizard-msr-shipmethod-package-delivery-option\"><p class=\"order-wizard-msr-shipmethod-package-shipmethod-name\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + " <span class=\"order-wizard-msr-shipmethod-package-shipmethod-rate\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"rate_formatted") : stack1), depth0))
    + " </span></p></div> ";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-wizard-msr-shipmethod-package-message\"><i class=\"order-wizard-msr-shipmethod-package-message-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Warning: No Delivery Methods are available for this address", {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"15":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showItems") : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.program(23, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"16":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-msr-shipmethod-package-item-accordion\"><div class=\"order-wizard-msr-shipmethod-package-accordion-head\"><a class=\"order-wizard-msr-shipmethod-package-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#order-wizard-msr-shipmethod-package-accordion-body-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\" aria-controls=\"order-wizard-msr-shipmethod-package-accordion-body-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"totalItemsGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <i class=\"order-wizard-msr-shipmethod-package-accordion-header-icon\"></i></a></div><div class=\"order-wizard-msr-shipmethod-package-accordion-body collapse\" id=\"order-wizard-msr-shipmethod-package-accordion-body-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEditShipmentButton") : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"order-wizard-msr-shipmethod-package-accordion-body-wrapper\"><table class=\"order-wizard-msr-shipmethod-package-accordion-container-table\"><thead class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header\" item-id=\"\" data-id=\"\"><tr><th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-image\" name=\"item-image\"></th><th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-details\" name=\"item-details\"></th><th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-totalprice\" name=\"item-totalprice\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unit Price", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-quantity\" name=\"item-quantity\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Qty", {"name":"translate","hash":{},"data":data})))
    + " </th><th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-amount\" name=\"item-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></tr></thead><tbody data-view=\"Items.Collection\"></tbody></table></div></div></div> ";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-wizard-msr-shipmethod-package-items-count\">$(0)</span> Items", (depth0 != null ? compilerNameLookup(depth0,"totalItems") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"19":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"21":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"order-wizard-msr-shipmethod-package-edit-shipment\" data-type=\"edit-shipment-link\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"editShipmentUrl") || (depth0 != null ? compilerNameLookup(depth0,"editShipmentUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editShipmentUrl","hash":{},"data":data}) : helper)))
    + "?force=true\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit Shipment", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"23":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <p class=\"order-wizard-msr-shipmethod-package-item-count-label\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"totalItemsGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.program(26, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p> ";
},"24":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-wizard-msr-shipmethod-package-item-count\">$(0)</span> Items", (depth0 != null ? compilerNameLookup(depth0,"totalItems") : depth0), {"name":"translate","hash":{},"data":data})))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "in this shippment", {"name":"translate","hash":{},"data":data})))
    + " ";
},"26":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-wizard-msr-shipmethod-package-item-count\">1</span> Item", {"name":"translate","hash":{},"data":data})))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "in this shippment", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-msr-shipmethod-package\" data-type=\"package\" data-address-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-wizard-msr-shipmethod-package-row\"><div class=\"order-wizard-msr-shipmethod-package-address\"><h3 class=\"order-wizard-msr-shipmethod-package-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping Address", {"name":"translate","hash":{},"data":data})))
    + " </h3><div data-view=\"Shipping.Address\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEditAddressButton") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"order-wizard-msr-shipmethod-package-delivery-method\"><h3 class=\"order-wizard-msr-shipmethod-package-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Delivery Method", {"name":"translate","hash":{},"data":data})))
    + " </h3> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDeliveryMethods") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div><div class=\"order-wizard-msr-shipmethod-package-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"useData":true}); template.Name = 'order_wizard_msr_shipmethod_package'; return template;});