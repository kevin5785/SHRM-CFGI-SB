define('global_views_pagination.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <nav class=\"global-views-pagination\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPageIndicator") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <ul class=\"global-views-pagination-links ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPaginationLinksCompactClass") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCurrentPageDifferentThan1") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPageList") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCurrentPageLast") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(20, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul></nav> ";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"global-views-pagination-count\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) of $(1)", (depth0 != null ? compilerNameLookup(depth0,"currentPage") : depth0), (depth0 != null ? compilerNameLookup(depth0,"totalPages") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"4":function(depth0,helpers,partials,data) {
  return " global-views-pagination-links-compact ";
  },"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-pagination-prev\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"previousPageURL") || (depth0 != null ? compilerNameLookup(depth0,"previousPageURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"previousPageURL","hash":{},"data":data}) : helper)))
    + "\"><i class=\"global-views-pagination-prev-icon\"></i></a></li> ";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-pagination-prev-disabled\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentPageURL","hash":{},"data":data}) : helper)))
    + "\"><i class=\"global-views-pagination-prev-icon\"></i></a></li> ";
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isRangeStartGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"pages") : depth0), {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isRangeEndLowerThanTotalPages") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-pagination-disabled\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentPageURL","hash":{},"data":data}) : helper)))
    + "\">...</a></li> ";
},"13":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCurrentPageActivePage") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"14":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-pagination-links-number\"><a class=\"global-views-pagination-active\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"fixedURL") || (depth0 != null ? compilerNameLookup(depth0,"fixedURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fixedURL","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageIndex") || (depth0 != null ? compilerNameLookup(depth0,"pageIndex") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageIndex","hash":{},"data":data}) : helper)))
    + "</a></li> ";
},"16":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-pagination-links-number\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"URL") || (depth0 != null ? compilerNameLookup(depth0,"URL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"URL","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageIndex") || (depth0 != null ? compilerNameLookup(depth0,"pageIndex") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageIndex","hash":{},"data":data}) : helper)))
    + "</a></li> ";
},"18":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-pagination-next-disabled\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentPageURL","hash":{},"data":data}) : helper)))
    + "\"><i class=\"global-views-pagination-next-icon\"></i></a></li> ";
},"20":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"global-views-pagination-next\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"nextPageURL") || (depth0 != null ? compilerNameLookup(depth0,"nextPageURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nextPageURL","hash":{},"data":data}) : helper)))
    + "\"><i class=\"global-views-pagination-next-icon\"></i></a></li> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"currentPageLowerThanTotalPagesAndCurrentPageGreaterThan0AndPagesCountGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'global_views_pagination'; return template;});