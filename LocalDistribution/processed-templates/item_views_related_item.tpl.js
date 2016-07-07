define('item_views_related_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " <div class=\"item-views-related-item-rate\" data-view=\"Global.StarRating\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div itemprop=\"itemListElement\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-track-productlist-list=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"track_productlist_list") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_list") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"track_productlist_list","hash":{},"data":data}) : helper)))
    + "\" data-track-productlist-category=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"track_productlist_category") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_category") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"track_productlist_category","hash":{},"data":data}) : helper)))
    + "\" data-track-productlist-position=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"track_productlist_position") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_position") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"track_productlist_position","hash":{},"data":data}) : helper)))
    + "\" data-sku=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sku","hash":{},"data":data}) : helper)))
    + "\"><a class=\"item-views-related-item-thumbnail\" "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper)))
    + "><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"thumbnailURL") : depth0), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"thumbnailAltImageText") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailAltImageText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"thumbnailAltImageText","hash":{},"data":data}) : helper)))
    + "\" /></a><a "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper)))
    + " class=\"item-views-related-item-title\"><span itemprop=\"name\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + "</span></a><div class=\"item-views-related-item-price\" data-view=\"Item.Price\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'item_views_related_item'; return template;});