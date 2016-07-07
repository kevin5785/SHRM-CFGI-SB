define('itemssearcher_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <a class=\"itemssearcher-item-results\" data-hashtag=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_url") : stack1), depth0))
    + "\" data-touchpoint=\"home\"><div class=\"itemssearcher-item-results-image\"><img data-loader=\"false\" class=\"typeahead-image\" src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"url") : stack1), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></div><div class=\"itemssearcher-item-results-content\"><div class=\"itemssearcher-item-results-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"highlightKeyword") || (depth0 && compilerNameLookup(depth0,"highlightKeyword")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_name") : stack1), (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0), {"name":"highlightKeyword","hash":{},"data":data})))
    + " </div><div data-view=\"Global.StarRating\"></div></div></a> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"itemssearcher-item-shadow\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasResults") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"itemssearcher-item-all-results\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See all results", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"hide\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentQuery","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAjaxDone") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"itemssearcher-item-no-results\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No results", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"hide\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentQuery","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"9":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"itemssearcher-item-searching\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Searching...", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"hide\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentQuery","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isItemSelected") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'itemssearcher_item'; return template;});