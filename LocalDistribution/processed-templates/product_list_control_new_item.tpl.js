define('product_list_control_new_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create and Move Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create and Add Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a class=\"product-list-control-new-item-button-create\" data-action=\"show-add-new-list-form\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create a New List", {"name":"translate","hash":{},"data":data})))
    + " </a><form action=\"#\" data-action=\"create-and-move\" data-type=\"product-list-control-add-new-list-form\" class=\"product-list-control-new-item-add-new-list-form\"><div class=\"product-list-control-new-item-add-new-list-input-container\" data-validation=\"control-group\"><input class=\"product-list-control-new-item-add-new-list-input\" name=\"name\" type=\"text\" data-type=\"new-product-list-name\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your new list name", {"name":"translate","hash":{},"data":data})))
    + "\" ></div><div class=\"product-list-control-new-item-add-new-list-buttons\"><button type=\"submit\" class=\"product-list-control-new-item-button-create\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </button></div></form> ";
},"useData":true}); template.Name = 'product_list_control_new_item'; return template;});