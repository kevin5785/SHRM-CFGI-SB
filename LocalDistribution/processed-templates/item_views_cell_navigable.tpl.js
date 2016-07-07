define('item_views_cell_navigable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a class=\"item-views-cell-navigable-product-title-anchor\" ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURLAttributes") || (depth0 != null ? compilerNameLookup(depth0,"itemURLAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemURLAttributes","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + "</a> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"item-views-cell-navigable-product-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + " </span> ";
},"5":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Item.Options\"></div> ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDetail2Title") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <span class=\"item-views-cell-navigable-item-reason-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail2") || (depth0 != null ? compilerNameLookup(depth0,"detail2") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail2","hash":{},"data":data}) : helper)))
    + "</span></p> ";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"item-views-cell-navigable-item-unit-price-label\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail2Title") || (depth0 != null ? compilerNameLookup(depth0,"detail2Title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail2Title","hash":{},"data":data}) : helper)))
    + " </span> ";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"item-views-cell-navigable-item-amount-label\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail3Title") || (depth0 != null ? compilerNameLookup(depth0,"detail3Title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail3Title","hash":{},"data":data}) : helper)))
    + " </span> ";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"item-views-cell-navigable-item-old-price\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comparePriceFormatted","hash":{},"data":data}) : helper)))
    + "</small> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <tr class=\"item-views-cell-navigable "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cellClassName") || (depth0 != null ? compilerNameLookup(depth0,"cellClassName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cellClassName","hash":{},"data":data}) : helper)))
    + " item-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-item-type=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemType") || (depth0 != null ? compilerNameLookup(depth0,"itemType") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemType","hash":{},"data":data}) : helper)))
    + "\"><td class=\"item-views-cell-navigable-item-image\" name=\"item-image\"><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"itemImageURL") : depth0), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemImageAltText") || (depth0 != null ? compilerNameLookup(depth0,"itemImageAltText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemImageAltText","hash":{},"data":data}) : helper)))
    + "\"></td><td class=\"item-views-cell-navigable-details\" name=\"item-details\"><p class=\"item-views-cell-navigable-product-name\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p><p><div data-view=\"Item.Price\"></div></p><p><span class=\"item-views-cell-navigable-sku-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SKU:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"item-views-cell-navigable-sku-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemSKU") || (depth0 != null ? compilerNameLookup(depth0,"itemSKU") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemSKU","hash":{},"data":data}) : helper)))
    + "</span></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOptions") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p><span class=\"item-views-cell-navigable-stock\" data-view=\"ItemViews.Stock.View\"></p></td><td class=\"item-views-cell-navigable-item-unit-price\" name=\"item-totalprice\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBlockDetail2") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </td><td class=\"item-views-cell-navigable-item-quantity\" name=\"item-quantity\"><p><span class=\"item-views-cell-navigable-item-quantity-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"item-views-cell-navigable-item-quantity-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"quantity","hash":{},"data":data}) : helper)))
    + "</span></p></td><td class=\"item-views-cell-navigable-amount\" name=\"item-amount\"><p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDetail3Title") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <span class=\"item-views-cell-navigable-item-amount-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail3") || (depth0 != null ? compilerNameLookup(depth0,"detail3") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail3","hash":{},"data":data}) : helper)))
    + "</span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p></td></tr> ";
},"useData":true}); template.Name = 'item_views_cell_navigable'; return template;});