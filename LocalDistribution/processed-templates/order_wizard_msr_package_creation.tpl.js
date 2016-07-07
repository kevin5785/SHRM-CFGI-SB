define('order_wizard_msr_package_creation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"order-wizard-msr-package-creation-header\"><h5 class=\"order-wizard-msr-package-creation-header-subtitle\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Select shipping address", {"name":"translate","hash":{},"data":data})))
    + " </h5></div><div class=\"order-wizard-msr-package-creation-header-row\" ><div class=\"order-wizard-msr-package-creation-shipping-left\"><select data-action=\"set-shipments-address-selector\" class=\"order-wizard-msr-package-creation-multishipto-address-selector\" > ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"addresses") : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </select></div><div class=\"order-wizard-msr-package-creation-shipping-right\" ><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"editAddressesUrl") || (depth0 != null ? compilerNameLookup(depth0,"editAddressesUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editAddressesUrl","hash":{},"data":data}) : helper)))
    + "\"  class=\"order-wizard-msr-package-creation-shipping-add-edit-link\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add / Edit Addresses", {"name":"translate","hash":{},"data":data})))
    + " </a></div></div><div><h5 class=\"order-wizard-msr-package-creation-header-subtitle\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Select products for this address", {"name":"translate","hash":{},"data":data})))
    + " </h5></div><div data-type=\"items-selection-control\" class=\"order-wizard-msr-package-creation-items-remaining-list\"><div class=\"order-wizard-msr-package-creation-row\"><div class=\"order-wizard-msr-package-creation-multishipto-table-container\"><table class=\"order-wizard-msr-package-creation-multishipto-table\"><th colspan=\"3\" data-action=\"select-unselect-all\" class=\"order-wizard-msr-package-creation-multishipto-table-header-select\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasMultipleUnsetLines") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </th><th class=\"order-wizard-msr-package-creation-multishipto-table-header-qty\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Qty", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"order-wizard-msr-package-creation-multishipto-table-header-unit-price\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unit Price", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"order-wizard-msr-package-creation-multishipto-table-header-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></table></div><div data-type=\"items-remaining-list\"><table class=\"order-wizard-msr-package-creation-products-table md2sm\" data-view=\"ShippableItems.Collection\"></table></div></div></div><div data-type=\"module-footer\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAnySelectedItem") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <button data-action=\"create-shipments\" class=\"order-wizard-msr-package-creation-button-create\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCreateShipmentEnabled") : depth0), {"name":"unless","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"createShipmentLabel") || (depth0 != null ? compilerNameLookup(depth0,"createShipmentLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"createShipmentLabel","hash":{},"data":data}) : helper)))
    + " </button></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <option value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " > "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressText") || (depth0 != null ? compilerNameLookup(depth0,"addressText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressText","hash":{},"data":data}) : helper)))
    + " </option> ";
},"3":function(depth0,helpers,partials,data) {
  return "selected";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <input type=\"checkbox\" data-type=\"selectunselect-all-checkbox\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"areAllItemSelected") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " /><label style=\"display:inline;\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"areAllItemSelected") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </label> ";
},"6":function(depth0,helpers,partials,data) {
  return "checked";
  },"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unselect all", {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Select all (<span data-type=\"item-remaining-count\">$(0)<span>)", (depth0 != null ? compilerNameLookup(depth0,"allItemsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"order-wizard-msr-package-creation-ship-address\"><p class=\"order-wizard-msr-package-creation-item-count\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isSelectedItemsLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p><div data-type=\"multishipto-address-selected\" class=\"order-wizard-msr-package-creation-multishipto-address-selected\" ><div data-view=\"Address.Details\" class=\"order-wizard-msr-package-creation-single-address\"></div></div></div> ";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "The <span data-type=\"item-selected-count\">$(0)</span> products you selected will be shipped to:", (depth0 != null ? compilerNameLookup(depth0,"selectedItemsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span data-type=\"item-selected-count\" class=\"hidden\">$(0)</span>The product you selected will be shipped to:", (depth0 != null ? compilerNameLookup(depth0,"selectedItemsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"order-wizard-msr-package-creation-item-count\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span data-type=\"item-selected-count\">$(0)</span> products selected", (depth0 != null ? compilerNameLookup(depth0,"selectedItemsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"19":function(depth0,helpers,partials,data) {
  return "disabled=\"disabled\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAnyUnsetLine") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'order_wizard_msr_package_creation'; return template;});