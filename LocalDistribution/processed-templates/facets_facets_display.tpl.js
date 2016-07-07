define('facets_facets_display.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <span class=\"facets-facets-display-narrowedby-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Narrowed By:", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"values") : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"facets-facets-display-clear-wrapper\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"clearAllFacetsLink") || (depth0 != null ? compilerNameLookup(depth0,"clearAllFacetsLink") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"clearAllFacetsLink","hash":{},"data":data}) : helper)))
    + "\" class=\"facets-facets-display-clear\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Clear All", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"facets-facets-display-clear-icon\"></i></a></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a class=\"facets-facets-display-filter\" data-type=\"facet-selected\" data-facet-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetValue") || (depth0 != null ? compilerNameLookup(depth0,"facetValue") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetValue","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetValueUrl") || (depth0 != null ? compilerNameLookup(depth0,"facetValueUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetValueUrl","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"facetValueIsObject") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <i class=\"facets-facets-display-filter-delete-icon\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Clear filter", {"name":"translate","hash":{},"data":data})))
    + "\"></i></a> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) to $(1)", (depth0 != null ? compilerNameLookup(depth0,"from") : depth0), (depth0 != null ? compilerNameLookup(depth0,"to") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"valueLabel") || (depth0 != null ? compilerNameLookup(depth0,"valueLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueLabel","hash":{},"data":data}) : helper)))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasFacets") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'facets_facets_display'; return template;});