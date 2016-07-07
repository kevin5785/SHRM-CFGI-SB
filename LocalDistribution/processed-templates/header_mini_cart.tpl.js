define('header_mini_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "header-mini-cart-menu-cart-link-enabled";
  },"3":function(depth0,helpers,partials,data) {
  return " <span class=\"header-mini-cart-summary-cart-ellipsis\"></span> ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPluraLabel") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) items", (depth0 != null ? compilerNameLookup(depth0,"itemsInCart") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div data-view=\"Header.MiniCartItemCell\" class=\"header-mini-cart-container\"></div><div class=\"header-mini-cart-subtotal\"><div class=\"header-mini-cart-subtotal-items\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPluraLabel") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"header-mini-cart-buttons\"><div class=\"header-mini-cart-buttons-left\"><a href=\"#\" class=\"header-mini-cart-button-view-cart\" data-touchpoint=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartTouchPoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\"#cart\"  data-action=\"view-cart\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "View Cart", {"name":"translate","hash":{},"data":data})))
    + " </a></div><div class=\"header-mini-cart-buttons-right\"><a href=\"#\" class=\"header-mini-cart-button-checkout\" data-touchpoint=\"checkout\" data-hashtag=\"#\"  data-action=\"checkout\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Checkout", {"name":"translate","hash":{},"data":data})))
    + " </a></div></div> ";
},"11":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"header-mini-cart-subtotal-amount\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SUBTOTAL: $(0)", (depth0 != null ? compilerNameLookup(depth0,"subtotalFormatted") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"header-mini-cart-empty\"><a href=\"#\" data-touchpoint=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartTouchPoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\"#cart\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </a></div> ";
},"14":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your cart is loading", {"name":"translate","hash":{},"data":data})))
    + " ";
},"16":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your cart is empty", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <a class=\"header-mini-cart-menu-cart-link ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-type=\"mini-cart\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cart", {"name":"translate","hash":{},"data":data})))
    + "\" data-touchpoint=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartTouchPoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\"#cart\" href=\"#\"><i class=\"header-mini-cart-menu-cart-icon\"></i><span class=\"header-mini-cart-menu-cart-legend\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span></a><div class=\"header-mini-cart\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'header_mini_cart'; return template;});