define('product_list_bulk_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "disabled";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"product-list-bulk-actions-button-group\"><button class=\"product-list-bulk-actions-button-addtocart\" data-action=\"add-items-to-cart\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAddToCartEnabled") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add Items to Cart", {"name":"translate","hash":{},"data":data})))
    + "</button><button class=\"product-list-bulk-actions-button-expander\" data-toggle=\"dropdown\" aria-expanded=\"false\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAtLeastOneItemChecked") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "><i></i></button><ul class=\"product-list-bulk-actions-dropdown\" role=\"menu\"><li><a href=\"#\" data-action=\"delete-items\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAtLeastOneItemChecked") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remove Items", {"name":"translate","hash":{},"data":data})))
    + "</a></li></ul></div>";
},"useData":true}); template.Name = 'product_list_bulk_actions'; return template;});