define('global_views_back_to_top.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div id=\"back-to-top\" class=\"global-views-back-to-top\"><a href=\"#\" data-action=\"back-to-top\"><i class=\"global-views-back-to-top-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Top", {"name":"translate","hash":{},"data":data})))
    + " </a></div>";
},"useData":true}); template.Name = 'global_views_back_to_top'; return template;});