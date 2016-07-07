define('product_list_details_min_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p class=\"product-list-details-min-quantity\"><span class=\"product-list-details-min-quantity-label\" style=\"white-space:normal\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "The minimum quantity to purchase this item is <b>$(0)</b>. Do you want to change it <b>from $(1) to $(0)?</b> ", (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0), (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <a href=\"#\" class=\"product-list-details-min-quantity-button-update\" data-id="
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + " data-action=\"update-item-quantity\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Yes, update it", {"name":"translate","hash":{},"data":data})))
    + "</a></span></p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"fulfillsMinQuantityRequirements") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'product_list_details_min_quantity'; return template;});