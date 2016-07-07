define('global_views_breadcrumb.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (data && compilerNameLookup(data,"last")), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-breadcrumb-item-active\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + " </li> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li class=\"global-views-breadcrumb-item\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"href") || (depth0 != null ? compilerNameLookup(depth0,"href") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"href","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasDataTouchpoint") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasDataHashtag") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " > "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + " </a></li><li class=\"global-views-breadcrumb-divider\"><span class=\"global-views-breadcrumb-divider-icon\"></span></li> ";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " data-touchpoint=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"data-touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"data-touchpoint") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data-touchpoint","hash":{},"data":data}) : helper)))
    + "\" ";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " data-hashtag=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"data-hashtag") || (depth0 != null ? compilerNameLookup(depth0,"data-hashtag") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data-hashtag","hash":{},"data":data}) : helper)))
    + "\" ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div id=\"banner-breadcrumb-top\" class=\"content-banner banner-breadcrumb-top\" data-cms-area=\"breadcrumb_top\" data-cms-area-filters=\"global\"></div><ul class=\"global-views-breadcrumb\" itemprop=\"breadcrumb\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"pages") : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul><div id=\"banner-breadcrumb-bottom\" class=\"content-banner banner-breadcrumb-bottom\" data-cms-area=\"breadcrumb_bottom\" data-cms-area-filters=\"global\"></div>";
},"useData":true}); template.Name = 'global_views_breadcrumb'; return template;});