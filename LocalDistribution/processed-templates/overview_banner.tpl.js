define('overview_banner.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <hr> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkUrl") || (depth0 != null ? compilerNameLookup(depth0,"linkUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkUrl","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkTarget") || (depth0 != null ? compilerNameLookup(depth0,"linkTarget") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkTarget","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageSource") || (depth0 != null ? compilerNameLookup(depth0,"imageSource") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageSource","hash":{},"data":data}) : helper)))
    + "\"></a> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageSource") || (depth0 != null ? compilerNameLookup(depth0,"imageSource") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageSource","hash":{},"data":data}) : helper)))
    + "\"> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'overview_banner'; return template;});