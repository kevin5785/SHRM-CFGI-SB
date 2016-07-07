define('facets_faceted_navigation_item_color.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"facets-faceted-navigation-item-color-facet-group\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + "\" data-type=\"rendered-facet\" data-facet-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHeading") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"facets-faceted-navigation-item-color-facet-group-content\"><ul class=\"facets-faceted-navigation-item-color-picker\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"displayValues") : depth0), {"name":"each","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </ul> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showExtraValues") : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"facets-faceted-navigation-item-color-facet-group-expander\"><i class=\"facets-faceted-navigation-item-color-facet-group-expander-icon\"></i><h4 class=\"facets-faceted-navigation-item-color-facet-group-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetDisplayName","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </h4></div> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"facets-faceted-navigation-item-color-filter-delete\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"removeLink","hash":{},"data":data}) : helper)))
    + "\"><i class=\"facets-faceted-navigation-item-color-filter-delete-icon\"></i></a> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a href=\"#\" class=\"facets-faceted-navigation-item-color-facet-group-expander\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + " .facets-faceted-navigation-item-color-facet-group-wrapper\" data-type=\"collapse\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetDisplayName","hash":{},"data":data}) : helper)))
    + "\"><i class=\"facets-faceted-navigation-item-color-facet-group-expander-icon\"></i><h4 class=\"facets-faceted-navigation-item-color-facet-group-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"facetDisplayName","hash":{},"data":data}) : helper)))
    + "</h4> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </a> ";
},"8":function(depth0,helpers,partials,data) {
  return " <div class=\"facets-faceted-navigation-item-color-facet-group-wrapper\"> ";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"facets-faceted-navigation-item-color-facet-group-wrapper ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"> ";
},"11":function(depth0,helpers,partials,data) {
  return " collapse ";
  },"13":function(depth0,helpers,partials,data) {
  return " in";
  },"15":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li ><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"link") || (depth0 != null ? compilerNameLookup(depth0,"link") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\" data-color=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\" class=\"facets-faceted-navigation-item-color-option ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLightColor") : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isImageTile") : depth0), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </a></li> ";
},"16":function(depth0,helpers,partials,data) {
  return "white-border";
  },"18":function(depth0,helpers,partials,data) {
  return "active";
  },"20":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return " <img\n										src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"src") : stack1), depth0))
    + "\"\n										alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\"\n										width=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + "\"\n										height=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"height") : stack1), depth0))
    + "\"> ";
},"22":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span style=\"background: "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"color") || (depth0 != null ? compilerNameLookup(depth0,"color") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"color","hash":{},"data":data}) : helper)))
    + "\"></span> ";
},"24":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <ul class=\"facets-faceted-navigation-item-color-picker-extra collapse\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"extraValues") : depth0), {"name":"each","hash":{},"fn":this.program(25, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul><div class=\"facets-faceted-navigation-item-color-optionlist-extra-wrapper\"><button class=\"facets-faceted-navigation-item-color-optionlist-extra-button\" data-toggle=\"collapse\" data-target=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"htmlId","hash":{},"data":data}) : helper)))
    + " .facets-faceted-navigation-item-color-picker-extra\" data-action=\"see-more\"><span data-type=\"see-more\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See More", {"name":"translate","hash":{},"data":data})))
    + " </span><span data-type=\"see-less\" class=\"facets-faceted-navigation-item-color-alt-caption\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See Less", {"name":"translate","hash":{},"data":data})))
    + " </span></button></div> ";
},"25":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li ><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"link") || (depth0 != null ? compilerNameLookup(depth0,"link") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\" data-color=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\" class=\"facets-faceted-navigation-item-color-extra-option ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLightColor") : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isImageTile") : depth0), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </a></li> ";
},"26":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return " <img\n											src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"src") : stack1), depth0))
    + "\"\n											alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\"\n											width=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + "\"\n											height=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"height") : stack1), depth0))
    + "\"> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFacet") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'facets_faceted_navigation_item_color'; return template;});