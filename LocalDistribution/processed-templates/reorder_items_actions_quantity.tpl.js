define('reorder_items_actions_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <label class=\"reorder-items-actions-quantity-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity:", {"name":"translate","hash":{},"data":data})))
    + "</label><div class=\"reorder-items-actions-quantity-input\"><button class=\"reorder-items-actions-quantity-remove\" data-action=\"minus\">-</button><input type=\"number\" name=\"item_quantity\" data-line-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemQuantity","hash":{},"data":data}) : helper)))
    + "\" class=\"reorder-items-actions-quantity-value\" min=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minimumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minimumQuantity","hash":{},"data":data}) : helper)))
    + "\"><button class=\"reorder-items-actions-quantity-add\" data-action=\"plus\">+</button></div> ";
},"3":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Item.Stock\"></div> ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"reorder-items-actions-quantity-last-purchased\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Last purchased on $(0)", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"reorder-items-actions-quantity\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showQuantityInput") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLastPurchased") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'reorder_items_actions_quantity'; return template;});