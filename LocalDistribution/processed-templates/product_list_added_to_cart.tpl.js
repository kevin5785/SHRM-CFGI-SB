define('product_list_added_to_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <p class=\"product-list-added-to-cart-message\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasMoreThanOneModel") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p> ";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"product-list-added-to-cart-list-from\">From: </span><span class=\"product-list-added-to-cart-list-name\">$(0)</span> product list ($(1) items)", (depth0 != null ? compilerNameLookup(depth0,"listName") : depth0), (depth0 != null ? compilerNameLookup(depth0,"modelsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"product-list-added-to-cart-list-from\">From </span><span class=\"product-list-added-to-cart-list-name\">$(0)</span> product list ($(1) item)", (depth0 != null ? compilerNameLookup(depth0,"listName") : depth0), (depth0 != null ? compilerNameLookup(depth0,"modelsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"product-list-added-to-cart-modal-body\"><span data-warning-message class=\"product-list-added-to-cart-warning-message\"></span> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isItem") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"product-list-added-to-cart-list\"><table class=\"product-list-added-to-cart-table\"><tbody data-view=\"ProductList.ItemsAddedToCart\"></tbody></table></div></div><div class=\"product-list-added-to-cart-modal-footer\"><a class=\"product-list-added-to-cart-button-viewcart\" data-touchpoint=\"viewcart\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "View Cart &amp; Checkout", {"name":"translate","hash":{},"data":data})))
    + "</a><a class=\"product-list-added-to-cart-button-back\" data-dismiss=\"modal\" >"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to product list", {"name":"translate","hash":{},"data":data})))
    + "</a></div>";
},"useData":true}); template.Name = 'product_list_added_to_cart'; return template;});