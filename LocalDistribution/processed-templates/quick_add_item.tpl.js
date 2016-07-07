define('quick_add_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <a class=\"quick-add-item-results\"><div class=\"quick-add-item-results-image\"><img data-loader=\"false\" class=\"typeahead-image\" src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"url") : stack1), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></div><div class=\"quick-add-item-results-content\"><div class=\"quick-add-item-results-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"highlightKeyword") || (depth0 && compilerNameLookup(depth0,"highlightKeyword")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_name") : stack1), (depth0 != null ? compilerNameLookup(depth0,"query") : depth0), {"name":"highlightKeyword","hash":{},"data":data})))
    + " </div><div><p class=\"quick-add-item-sku\"><span class=\"quick-add-item-sku-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SKU:", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"quick-add-item-sku-value\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_sku") : stack1), depth0))
    + "</span></p></div><div data-view=\"Item.Price\"></div><div data-view=\"Item.Options\"></div><div data-view=\"Item.Stock\"></div></div></a> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"quick-add-item-shadow\"></div> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasResults") : depth0), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAjaxDone") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"quick-add-item-no-results\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No results", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"hide\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentQuery","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"7":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"quick-add-item-searching\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Searching...", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"hide\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentQuery","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isItemSelected") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'quick_add_item'; return template;});