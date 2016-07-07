define('facets_empty.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We were unable to find results for <strong>$(0)</strong>. Please check your spelling or try searching for similar terms.", (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"facets-empty\"><h1 class=\"facets-empty-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sorry, we couldn´t find any products.", {"name":"translate","hash":{},"data":data})))
    + "</h1><p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"keywords") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p><div class=\"facets-empty-merchandising-zone\"><div data-type=\"merchandising-zone\" data-id=\"newArrivals\"></div></div></div>";
},"useData":true}); template.Name = 'facets_empty'; return template;});