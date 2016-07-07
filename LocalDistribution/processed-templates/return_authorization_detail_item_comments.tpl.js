define('return_authorization_detail_item_comments.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"return-authorization-detail-item-comments-row\"><div class=\"return-authorization-detail-item-comments-column\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Comments:", {"name":"translate","hash":{},"data":data})))
    + "</p><blockquote>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comment") || (depth0 != null ? compilerNameLookup(depth0,"comment") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comment","hash":{},"data":data}) : helper)))
    + "</blockquote></div></div>";
},"useData":true}); template.Name = 'return_authorization_detail_item_comments'; return template;});