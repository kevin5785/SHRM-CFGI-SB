define('facets_facet_categories.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " collapse ";
  },"3":function(depth0,helpers,partials,data) {
  return " in ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetHtmlId") || (depth0 != null ? compilerNameLookup(depth0,"facetHtmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetHtmlId","hash":{},"data":data}) : helper)))
    + "\" class=\"facets-facet-categories-well\" data-type=\"rendered-facet\" data-facet-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetId","hash":{},"data":data}) : helper)))
    + "\"><h3 class=\"facets-facet-categories-title\"></h3><div class=\"facets-facet-categories-filters ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCollapsible") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"><div data-view=\"Facets.FacetCategoriesList\"></div></div></div>";
},"useData":true}); template.Name = 'facets_facet_categories'; return template;});