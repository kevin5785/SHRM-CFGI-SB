define('order_wizard_msr_package_creation_edit_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p><span class=\"order-wizard-msr-package-creation-edit-quantity-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"order-wizard-msr-package-creation-edit-quantity-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalQuantity") || (depth0 != null ? compilerNameLookup(depth0,"totalQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalQuantity","hash":{},"data":data}) : helper)))
    + " </span></p> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-msr-package-creation-edit-quantity-editable\" data-validation=\"control\"><span class=\"order-wizard-msr-package-creation-edit-quantity-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity:", {"name":"translate","hash":{},"data":data})))
    + " </span><button class=\"order-wizard-msr-package-creation-edit-quantity-input-remove\" data-action=\"sub-quantity\"> - </button> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isDesktop") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <button class=\"order-wizard-msr-package-creation-edit-quantity-input-add\" data-action=\"add-quantity\"> + </button></div> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <input type=\"number\" name=\"quantity\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" id=\"quantity-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"split-quantity\" class=\"order-wizard-msr-package-creation-edit-quantity-item-editable-quantity-normal\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"selectedQuantity") || (depth0 != null ? compilerNameLookup(depth0,"selectedQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"selectedQuantity","hash":{},"data":data}) : helper)))
    + "\" min=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minQuantity","hash":{},"data":data}) : helper)))
    + "\" max=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalQuantity") || (depth0 != null ? compilerNameLookup(depth0,"totalQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalQuantity","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, " of $(0)", (depth0 != null ? compilerNameLookup(depth0,"totalQuantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"6":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <label class=\"order-wizard-msr-package-creation-edit-quantity-input-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, " of $(0)", (depth0 != null ? compilerNameLookup(depth0,"totalQuantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <input type=\"number\" name=\"quantity\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" id=\"quantity-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"split-quantity\" class=\"order-wizard-msr-package-creation-edit-quantity-item-editable-quantity\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"selectedQuantity") || (depth0 != null ? compilerNameLookup(depth0,"selectedQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"selectedQuantity","hash":{},"data":data}) : helper)))
    + "\" min=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minQuantity","hash":{},"data":data}) : helper)))
    + "\" max=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalQuantity") || (depth0 != null ? compilerNameLookup(depth0,"totalQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalQuantity","hash":{},"data":data}) : helper)))
    + "\"></label> ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"order-wizard-msr-package-creation-edit-quantity-quantity-help\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(Minimum of $(0) required)", (depth0 != null ? compilerNameLookup(depth0,"minQuantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </small><p class=\"order-wizard-msr-package-creation-edit-quantity-error-message\" data-validation=\"error-placeholder\"></p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"order-wizard-msr-package-creation-edit-quantity-column\" data-validation=\"control-group\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReadOnly") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMinimumQuantity") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'order_wizard_msr_package_creation_edit_quantity'; return template;});