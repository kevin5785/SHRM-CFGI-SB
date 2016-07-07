define('return_authorization_form_item_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <label class=\"return-authorization-form-item-summary-quantity-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity to return:", {"name":"translate","hash":{},"data":data})))
    + "</label> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isQuantityGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <input class=\"return-authorization-form-item-summary-quantity-field\" data-action=\"quantity\" type=\"number\" name=\"quantity\" data-toggle=\"false\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"selectedQuantity") || (depth0 != null ? compilerNameLookup(depth0,"selectedQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"selectedQuantity","hash":{},"data":data}) : helper)))
    + "\" min=\"1\" max=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxQuantity","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "of $(0)", (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <p><small class=\"return-authorization-form-item-summary-edit-text\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit quantity to return", {"name":"translate","hash":{},"data":data})))
    + "</small></p> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <label class=\"return-authorization-form-item-summary-quantity-label\"><br> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxQuantity","hash":{},"data":data}) : helper)))
    + " </label> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <label class=\"return-authorization-form-item-summary-quantity-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity to return:", {"name":"translate","hash":{},"data":data})))
    + " <br><b> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isQuantityGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </b></label> ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) of $(0)", (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxQuantity","hash":{},"data":data}) : helper)))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLineActive") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'return_authorization_form_item_summary'; return template;});