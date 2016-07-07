define('footer.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <ul class=\"footer-content-nav-list\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"footerNavigationLinks") : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <li><a "
    + escapeExpression(((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"item") : depth0), {"name":"objectToAtrributes","hash":{},"data":data})))
    + "> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + " </a></li> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div data-view=\"Global.BackToTop\"></div><div class=\"footer-content\"><div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"global_banner_footer\" data-cms-area-filters=\"global\"></div><div class=\"footer-content-nav\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFooterNavigationLinks") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"footer-content-copyright\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&copy; 2008-2015 Company Name", {"name":"translate","hash":{},"data":data})))
    + " </div></div>";
},"useData":true}); template.Name = 'footer'; return template;});