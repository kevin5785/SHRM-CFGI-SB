define('quick_view.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"quick-view-confirmation-modal-options\">  <div data-view=\"ItemDetails.Options\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div data-type=\"alert-placeholder\"></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"quick-view-confirmation-modal-quantity\"><form action=\"#\" class=\"quick-view-add-to-cart-form\" data-validation=\"control-group\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showQuantity") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div><div data-view=\"Item.Stock\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReadyForCart") : depth0), {"name":"unless","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"quick-view-confirmation-modal-actions\"><div class=\"quick-view-confirmation-modal-add-to-cart\"><button data-type=\"add-to-cart\" class=\"quick-view-confirmation-modal-view-cart-button\"";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReadyForCart") : depth0), {"name":"unless","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasCartItem") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </button></div><div class=\"quick-view-confirmation-modal-add-to-product-list\"><div data-type=\"product-lists-control\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReadyForWishList") : depth0), {"name":"unless","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "></div></div></div></form></div> ";
},"3":function(depth0,helpers,partials,data) {
  return " <input type=\"hidden\" name=\"quantity\" id=\"quantity\" value=\"1\"> ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <div class=\"quick-view-options-quantity\" data-validation=\"control\"><label for=\"quantity\" class=\"quick-view-options-quantity-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity", {"name":"translate","hash":{},"data":data})))
    + " </label><button class=\"quick-view-button-quantity-remove\" data-action=\"minus\">-</button><input type=\"number\" name=\"quantity\" id=\"quantity\" class=\"quick-view-quantity-value\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\" min=\"1\"><button class=\"quick-view-button-quantity-add\" data-action=\"plus\">+</button> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMinQuantityOne") : depth0), {"name":"unless","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"quick-view-quantity-help\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(Minimum of $(0) required)", (depth0 != null ? compilerNameLookup(depth0,"minQuantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </small> ";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectOptionMessage") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"quick-view-add-to-cart-help\"><i class=\"quick-view-add-to-cart-help-icon\"></i><span class=\"quick-view-add-to-cart-help-text\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select options before adding to cart", {"name":"translate","hash":{},"data":data})))
    + "</span></p> ";
},"11":function(depth0,helpers,partials,data) {
  return "disabled";
  },"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Update", {"name":"translate","hash":{},"data":data})));
  },"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add to Cart", {"name":"translate","hash":{},"data":data})));
  },"17":function(depth0,helpers,partials,data) {
  return " data-disabledbutton=\"true\"";
  },"19":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"quick-view-message-warning\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<b>Warning</b>: This item is not properly configured, please contact your administrator.", {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = " <div class=\"quick-view-confirmation-modal\"><div class=\"quick-view-confirmation-modal-img\"><div data-view=\"ItemDetails.ImageGallery\"></div></div><div class=\"quick-view-confirmation-modal-details\"><h1 class=\"quick-view-confirmation-modal-item-name\" itemprop=\"name\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_pageHeader") : stack1), depth0))
    + "</h1><a class=\"quick-view-confirmation-modal-full-details\" data-touchpoint=\"home\" data-name=\"view-full-details\" data-hashtag=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"item_url") || (depth0 != null ? compilerNameLookup(depth0,"item_url") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"item_url","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"item_url") || (depth0 != null ? compilerNameLookup(depth0,"item_url") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"item_url","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "View full details", {"name":"translate","hash":{},"data":data})))
    + " </a><div class=\"quick-view-confirmation-modal-price\"><div data-view=\"Item.Price\"></div></div><div class=\"quick-view-confirmation-modal-sku\"><span class=\"quick-view-confirmation-modal-sku-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SKU: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"quick-view-confirmation-modal-sku-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sku","hash":{},"data":data}) : helper)))
    + "</span></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"useData":true}); template.Name = 'quick_view'; return template;});