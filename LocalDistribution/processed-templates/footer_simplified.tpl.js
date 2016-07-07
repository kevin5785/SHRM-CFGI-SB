define('footer_simplified.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div data-view=\"Global.BackToTop\"></div><div class=\"footer-simplified-content\"><div class=\"footer-simplified-content-nav\"></div><div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"simplified_footer_banner\" data-cms-area-filters=\"global\"></div><div class=\"footer-simplified-content-copyright\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&copy; 2008-2015 Company Name", {"name":"translate","hash":{},"data":data})))
    + " </div></div>";
},"useData":true}); template.Name = 'footer_simplified'; return template;});