define('header_logo.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <img class=\"header-logo-image\" src=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"logoUrl") || (depth0 != null ? compilerNameLookup(depth0,"logoUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"logoUrl","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"siteName","hash":{},"data":data}) : helper)))
    + "\"> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"header-logo-sitename\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"siteName","hash":{},"data":data}) : helper)))
    + " </span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div id=\"site-logo\" class=\"content-banner\"></div><a class=\"header-logo\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"headerLinkHref") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHref") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"headerLinkHref","hash":{},"data":data}) : helper)))
    + "\" data-touchpoint=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"headerLinkTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTouchPoint") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"headerLinkTouchPoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"headerLinkHashtag") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHashtag") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"headerLinkHashtag","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"headerLinkTitle") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTitle") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"headerLinkTitle","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"logoUrl") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </a> ";
},"useData":true}); template.Name = 'header_logo'; return template;});