define('header_menu.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li><a class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + "\" "
    + escapeExpression(((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || helperMissing).call(depth0, depth0, {"name":"objectToAtrributes","hash":{},"data":data})))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"categories") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + " </a> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"categories") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </li> ";
},"2":function(depth0,helpers,partials,data) {
  return "data-toggle=\"dropdown\"";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <ul class=\"header-menu-level-container\"><li><ul class=\"header-menu-level2\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"categories") : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul></li></ul> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li><a class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + "\" "
    + escapeExpression(((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || helperMissing).call(depth0, depth0, {"name":"objectToAtrributes","hash":{},"data":data})))
    + ">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</a> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"categories") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </li> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <ul class=\"header-menu-level3\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"categories") : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul> ";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li><a class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + "\" "
    + escapeExpression(((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || helperMissing).call(depth0, depth0, {"name":"objectToAtrributes","hash":{},"data":data})))
    + ">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</a></li> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <nav class=\"header-menu-secondary-nav\"><div class=\"header-menu-search\"><button class=\"header-menu-search-link\" data-action=\"show-sitesearch\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Search", {"name":"translate","hash":{},"data":data})))
    + "\"><i class=\"header-menu-search-icon\"></i></button></div><ul class=\"header-menu-level1\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"categories") : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul></nav> ";
},"useData":true}); template.Name = 'header_menu'; return template;});