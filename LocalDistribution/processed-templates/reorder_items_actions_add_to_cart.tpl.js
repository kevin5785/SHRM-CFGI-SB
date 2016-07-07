define('reorder_items_actions_add_to_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " disabled ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"reorder-items-actions-add-to-cart-button-container\"><button \n		data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" \n		data-line-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\" \n		data-parent-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"parentItemId") || (depth0 != null ? compilerNameLookup(depth0,"parentItemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentItemId","hash":{},"data":data}) : helper)))
    + "\" \n		data-item-options=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemOptions") || (depth0 != null ? compilerNameLookup(depth0,"itemOptions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemOptions","hash":{},"data":data}) : helper)))
    + "\" \n		data-action=\"add-to-cart\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"disableButtonAddToCart") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " class=\"reorder-items-actions-add-to-cart\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add to Cart", {"name":"translate","hash":{},"data":data})))
    + " </button></div> ";
},"useData":true}); template.Name = 'reorder_items_actions_add_to_cart'; return template;});