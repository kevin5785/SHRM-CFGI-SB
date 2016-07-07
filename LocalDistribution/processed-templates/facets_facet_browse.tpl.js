define('facets_facet_browse.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <header class=\"facets-facet-browse-header\"><h1 class=\"facets-facet-browse-title\" data-quantity=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"total") || (depth0 != null ? compilerNameLookup(depth0,"total") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </h1><nav class=\"facets-facet-browse-list-header\"><div class=\"facets-facet-browse-list-header-actions\" data-view=\"Facets.ItemListDisplaySelector\"></div><div class=\"facets-facet-browse-list-header-expander\"><button class=\"facets-facet-browse-list-header-expander-button collapsed\" data-toggle=\"collapse\" data-target=\"#list-header-filters\" aria-expanded=\"true\" aria-controls=\"list-header-filters\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sort & Filter", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"facets-facet-browse-list-header-expander-icon\"></i></button></div><div class=\"facets-facet-browse-list-header-filters collapse\" id=\"list-header-filters\"><div class=\"facets-facet-browse-list-header-filters-wrapper\"><div class=\"facets-facet-browse-list-header-filters-row\"><div class=\"facets-facet-browse-list-header-filter-column\" data-view=\"Facets.ItemListShowSelector\"></div><div class=\"facets-facet-browse-list-header-filter-column\" data-view=\"Facets.ItemListSortSelector\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasItemsAndFacets") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></div></nav></header><div class=\"facets-facet-browse-content\"><div data-cms-area=\"facet_navigation_top\" data-cms-area-filters=\"page_type\"></div><div class=\"facets-facet-browse-facets\" data-action=\"pushable\" data-id=\"product-search-facets\" data-view=\"Facets.FacetedNavigation\" data-exclude-facets=\"category\"></div><div data-cms-area=\"facet_navigation_bottom\" data-cms-area-filters=\"page_type\"></div><div class=\"facets-facet-browse-results\"><meta itemprop=\"name\" content=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\"/><div id=\"banner-section-top\" class=\"content-banner banner-section-top\" data-cms-area=\"item_list_banner_top\" data-cms-area-filters=\"path\"></div><div class=\"facets-facet-browse-narrowedby\" data-view=\"Facets.FacetsDisplay\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmptyList") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"facets-facet-browse-pagination\" data-view=\"GlobalViews.Pagination\"></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTotalProductsOne") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 Result for <span class=\"facets-facet-browse-title-alt\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) Results for <span class=\"facets-facet-browse-title-alt\">$(1)</span>", (depth0 != null ? compilerNameLookup(depth0,"total") : depth0), (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTotalProductsOne") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 Product", {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) Products", (depth0 != null ? compilerNameLookup(depth0,"total") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"facets-facet-browse-list-header-filter-column\"><button class=\"facets-facet-browse-list-header-filter-facets\" data-type=\"sc-pusher\" data-target=\"product-search-facets\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Narrow By", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"facets-facet-browse-list-header-filter-facets-icon\"></i></button></div> ";
},"14":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Facets.Items.Empty\"></div> ";
  },"16":function(depth0,helpers,partials,data) {
  return " <div class=\"facets-facet-browse-items\" data-view=\"Facets.Items\"></div> ";
  },"18":function(depth0,helpers,partials,data) {
  return " <div class=\"facets-facet-browse-empty-items\" data-view=\"Facets.Items.Empty\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <section class=\"facets-facet-browse\"><div data-cms-area=\"item_list_banner\" data-cms-area-filters=\"page_type\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showResults") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(18, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div id=\"banner-section-bottom\" class=\"content-banner banner-section-bottom\" data-cms-area=\"item_list_banner_bottom\" data-cms-area-filters=\"page_type\"></div></section>";
},"useData":true}); template.Name = 'facets_facet_browse'; return template;});