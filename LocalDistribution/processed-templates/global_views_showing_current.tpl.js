define('global_views_showing_current.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"global-views-showing-current "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"extraClass") || (depth0 != null ? compilerNameLookup(depth0,"extraClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"extraClass","hash":{},"data":data}) : helper)))
    + "\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Showing $(0) - $(1) of $(2)", (depth0 != null ? compilerNameLookup(depth0,"firstItem") : depth0), (depth0 != null ? compilerNameLookup(depth0,"lastItem") : depth0), (depth0 != null ? compilerNameLookup(depth0,"totalItems") : depth0), {"name":"translate","hash":{},"data":data})))
    + " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"order_text") || (depth0 != null ? compilerNameLookup(depth0,"order_text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_text","hash":{},"data":data}) : helper)))
    + "</p></div> ";
},"useData":true}); template.Name = 'global_views_showing_current'; return template;});