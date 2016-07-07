define('item_views_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriceRange") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <span class=\"item-views-price-range\" itemprop=\"offers\" itemscope itemtype=\"http://schema.org/AggregateOffer\"><meta itemprop=\"priceCurrency\" content=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currencyCode","hash":{},"data":data}) : helper)))
    + "\"/><span class=\"item-views-price-lead\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span itemprop=\"lowPrice\" data-rate=\"$(0)\" >$(1)</span> to <span itemprop=\"highPrice\" data-rate=\"$(2)\">$(3)</span>", (depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0), (depth0 != null ? compilerNameLookup(depth0,"minPriceFormatted") : depth0), (depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0), (depth0 != null ? compilerNameLookup(depth0,"maxPriceFormatted") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <link itemprop=\"availability\" href=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"/></span> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"item-views-price-old\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comparePriceFormatted","hash":{},"data":data}) : helper)))
    + " </small> ";
},"5":function(depth0,helpers,partials,data) {
  return "http://schema.org/InStock";
  },"7":function(depth0,helpers,partials,data) {
  return "http://schema.org/OutOfStock";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <span class=\"item-views-price-exact\" itemprop=\"offers\" itemscope itemtype=\"http://schema.org/Offer\"><meta itemprop=\"priceCurrency\" content=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currencyCode","hash":{},"data":data}) : helper)))
    + "\"/><span class=\"item-views-price-lead\" itemprop=\"price\" data-rate=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"priceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <link itemprop=\"availability\" href=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"/></span> ";
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHighlightedMessage") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"item-views-price-login-to-see-prices-highlighted\"><p class=\"item-views-price-message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please <a href=\"$(0)\">log in</a> to see price or purchase this item", (depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
},"14":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"item-views-price-login-to-see-prices\"><p class=\"item-views-price-message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<a href=\"$(0)\">Log in</a> to see price", (depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"item-views-price\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'item_views_price'; return template;});