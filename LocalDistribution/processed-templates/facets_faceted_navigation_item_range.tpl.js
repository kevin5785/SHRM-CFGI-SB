define('facets_faceted_navigation_item_range.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"facets-faceted-navigation-item-range-facet-group\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + "\" data-type=\"rendered-facet\" data-facet-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHeading") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <span class=\"facets-faceted-navigation-item-range-end\" data-range-indicator=\"end\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeToLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeToLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeToLabel","hash":{},"data":data}) : helper)))
    + "</span><span class=\"facets-faceted-navigation-item-range-start\" data-range-indicator=\"start\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeFromLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeFromLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeFromLabel","hash":{},"data":data}) : helper)))
    + "</span><div\n			class=\"facets-faceted-navigation-item-range-slider\"\n			data-toggle=\"slider\"\n			data-facet-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetId","hash":{},"data":data}) : helper)))
    + "\"\n			data-min=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeMin") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeMin","hash":{},"data":data}) : helper)))
    + "\"\n			data-max=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeMax") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeMax","hash":{},"data":data}) : helper)))
    + "\"\n			data-low=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"rangeFrom") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeFrom","hash":{},"data":data}) : helper)))
    + "\"\n			data-high=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeTo") || (depth0 != null ? compilerNameLookup(depth0,"rangeTo") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeTo","hash":{},"data":data}) : helper)))
    + "\"><div class=\"facets-faceted-navigation-item-range-slider-bar\" data-control=\"bar\" style=\"left: 0%; width: 100%;\"></div><button class=\"facets-faceted-navigation-item-range-slider-bar-right\" data-control=\"low\" style=\"left: 0%;\"></button><button class=\"facets-faceted-navigation-item-range-slider-bar-left\" data-control=\"high\" style=\"left: 100%;\"></button></div></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"facets-faceted-navigation-item-range-facet-group-expander\"><h4 class=\"facets-faceted-navigation-item-range-facet-group-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetDisplayName","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </h4></div> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"facets-faceted-navigation-item-range-filter-delete\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"removeLink","hash":{},"data":data}) : helper)))
    + "\"><i class=\"facets-faceted-navigation-item-range-filter-delete-icon\"></i></a> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a href=\"#\" class=\"facets-faceted-navigation-item-range-facet-group-expander\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + " .facets-faceted-navigation-item-range-facet-group-wrapper\" data-type=\"collapse\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetDisplayName","hash":{},"data":data}) : helper)))
    + "\"><i class=\"facets-faceted-navigation-item-range-facet-group-expander-icon\"></i><h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetDisplayName","hash":{},"data":data}) : helper)))
    + "</h4> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </a> ";
},"8":function(depth0,helpers,partials,data) {
  return " <div class=\"facets-faceted-navigation-item-range-facet-group-wrapper\"> ";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"facets-faceted-navigation-item-range-facet-group-wrapper ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"> ";
},"11":function(depth0,helpers,partials,data) {
  return " collapse";
  },"13":function(depth0,helpers,partials,data) {
  return " in";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFacet") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'facets_faceted_navigation_item_range'; return template;});