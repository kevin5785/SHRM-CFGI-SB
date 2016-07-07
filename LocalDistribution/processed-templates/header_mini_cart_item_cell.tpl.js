define('header_mini_cart_item_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <li class=\"header-mini-cart-item-cell-product-price\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "</li> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<a data-touchpoint=\"login\" data-hashtag=\"login-register\" origin-hash=\"\" href=\"#\">Login</a> to see price", {"name":"translate","hash":{},"data":data})))
    + " </li> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <li class=\"header-mini-cart-item-cell\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-item-type=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemType") || (depth0 != null ? compilerNameLookup(depth0,"itemType") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemType","hash":{},"data":data}) : helper)))
    + "\"><a ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "><div class=\"header-mini-cart-item-cell-image\"><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"url") : stack1), "tinythumb", {"name":"resizeImage","hash":{},"data":data})))
    + "?resizeh=60\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></div></a><div class=\"header-mini-cart-item-cell-details\"><ul><li class=\"header-mini-cart-item-cell-product-title\"><a ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " class=\"header-mini-cart-item-cell-title-navigable\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_name") : stack1), depth0))
    + "</a></li> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div data-view=\"Item.SelectedOptions\"></div><li class=\"header-mini-cart-item-cell-product-qty\"><span class=\"header-mini-cart-item-cell-quantity-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity: ", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"header-mini-cart-item-cell-quantity-value\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + " </span></li></ul></div></li>";
},"useData":true}); template.Name = 'header_mini_cart_item_cell'; return template;});