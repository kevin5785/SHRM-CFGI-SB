define('product_list_list_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalId","hash":{},"data":data}) : helper)));
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "tmpl_"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"templateId") || (depth0 != null ? compilerNameLookup(depth0,"templateId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"templateId","hash":{},"data":data}) : helper)));
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"listName") : depth0), {"name":"translate","hash":{},"data":data})));
  },"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = compilerNameLookup(helpers,"listName") || (depth0 != null ? compilerNameLookup(depth0,"listName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"listName","hash":{},"data":data}) : helper)));
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <span class=\"product-list-list-details-item-count\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsLength") || (depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemsLength","hash":{},"data":data}) : helper)))
    + "</span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasOneItem") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasLastItem") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "product", {"name":"translate","hash":{},"data":data})))
    + " ";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "products", {"name":"translate","hash":{},"data":data})))
    + " ";
},"14":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " ("
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "last added", {"name":"translate","hash":{},"data":data})))
    + " <a class=\"product-list-list-details-last-item\" "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lastProductItemUrl") || (depth0 != null ? compilerNameLookup(depth0,"lastProductItemUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastProductItemUrl","hash":{},"data":data}) : helper)))
    + ">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lastItemDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"lastItemDisplayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastItemDisplayName","hash":{},"data":data}) : helper)))
    + "</a>) ";
},"16":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No items yet", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
},"18":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"product-list-list-details-stock\"><span class=\"product-list-list-details-not-purchasable-message\"><i class=\"product-list-list-details-not-purchasable-message-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Some products from this list are not available for purchase", {"name":"translate","hash":{},"data":data})))
    + " </span></p> ";
},"20":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"product-list-list-details-minquantity\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "The quantity of some of the items needs to be updated to match the minimum required to purchase. Go to <a href=\"/wishlist/$(0)\">$(1)</a>", (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0), (depth0 != null ? compilerNameLookup(depth0,"listName") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"22":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <p class=\"product-list-list-details-description\"><span class=\"product-list-list-details-description-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Notes: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"product-list-list-details-description-value\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTypePredefined") : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.program(25, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></p> ";
},"23":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"listDescription") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"25":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"listDescription") || (depth0 != null ? compilerNameLookup(depth0,"listDescription") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"listDescription","hash":{},"data":data}) : helper)))
    + " ";
},"27":function(depth0,helpers,partials,data) {
  return "disabled";
  },"29":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"product-list-list-details-button-group\"><button class=\"product-list-list-details-button-edit\" data-action=\"edit-list\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit List", {"name":"translate","hash":{},"data":data})))
    + "</button><button class=\"product-list-list-details-button-expander\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i></i></button><ul class=\"product-list-list-details-dropdown\" role=\"menu\"><li><a href=\"#\" data-action=\"delete-list\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Delete List", {"name":"translate","hash":{},"data":data})))
    + "</a></li></ul></div> ";
},"31":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"product-list-list-details-share\" data-action=\"share-list\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email/Share List", {"name":"translate","hash":{},"data":data})))
    + "</button> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <tr class=\"product-list-list-details-wrapper\" data-action=\"navigate\" data-product-list-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalId","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalId","hash":{},"data":data}) : helper)))
    + "\"><td class=\"product-list-list-details-main\"><p class=\"product-list-list-details-text\"><a class=\"product-list-list-details-anchor\" href=\"/wishlist/";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTypePredefined") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </a></p><p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasOutOfStockItems") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasMinimumQuantityItems") : depth0), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </td><td class=\"product-list-list-details-info\"><p class=\"product-list-list-details-last-update\"><span class=\"product-list-list-details-last-update-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Last updated: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"product-list-list-details-last-update-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lastModifiedDate") || (depth0 != null ? compilerNameLookup(depth0,"lastModifiedDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastModifiedDate","hash":{},"data":data}) : helper)))
    + "</span></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasListDescription") : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </td><td class=\"product-list-list-details-actions\"><button data-action=\"add-to-cart\" class=\"product-list-list-details-add-to-cart\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAvailableForCart") : depth0), {"name":"unless","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add List to Cart", {"name":"translate","hash":{},"data":data})))
    + "</button> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTypePredefined") : depth0), {"name":"unless","hash":{},"fn":this.program(29, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isListPrivate") : depth0), {"name":"unless","hash":{},"fn":this.program(31, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </td></tr> ";
},"useData":true}); template.Name = 'product_list_list_details'; return template;});