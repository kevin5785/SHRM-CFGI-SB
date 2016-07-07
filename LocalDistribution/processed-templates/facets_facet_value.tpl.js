define('facets_facet_value.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " active";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <i class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></i> ";
},"4":function(depth0,helpers,partials,data) {
  return " facets-facet-value-icon-ok ";
  },"6":function(depth0,helpers,partials,data) {
  return " facets-facet-value-icon-plus";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><h4><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetValueUrl") || (depth0 != null ? compilerNameLookup(depth0,"facetValueUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetValueUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"behaviorIsMulti") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <span> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"formattedLabel") || (depth0 != null ? compilerNameLookup(depth0,"formattedLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formattedLabel","hash":{},"data":data}) : helper)))
    + " </span><span class=\"hidden\"> ("
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"count") || (depth0 != null ? compilerNameLookup(depth0,"count") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"count","hash":{},"data":data}) : helper)))
    + ") </span></a></h4></li>";
},"useData":true}); template.Name = 'facets_facet_value'; return template;});