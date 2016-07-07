define('case_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/\" class=\"case-list-button-back\"><i class=\"case-list-button-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Account", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <table class=\"case-list-recordviews-table\"><thead class=\"case-list-content-table\"><tr class=\"case-list-content-table-header-row\"><th class=\"case-list-content-table-header-row-title\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Case No.", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"case-list-content-table-header-row-subject\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subject", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"case-list-content-table-header-row-creation-date\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Creation date", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"case-list-content-table-header-row-date\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Last Message", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"case-list-content-table-header-row-status\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status", {"name":"translate","hash":{},"data":data})))
    + "</span></th></tr></thead><tbody data-view=\"Case.List.Items\"></tbody></table> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"case-list-empty\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Loading...", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"case-list-empty\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No cases were found", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"case-list-paginator\"><div data-view=\"GlobalViews.Pagination\" class=\"case-list-global-views-pagination\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"11":function(depth0,helpers,partials,data) {
  return " <div data-view=\"GlobalViews.ShowCurrentPage\" class=\"case-list-global-views-current-page\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section class=\"case-list\"><header class=\"case-list-header\"><h2 class=\"case-list-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + " </h2><div data-confirm-message class=\"case-list-confirm-message\"></div><a class=\"case-list-header-button-new\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#/newcase\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create New Case", {"name":"translate","hash":{},"data":data})))
    + "</a></header><div data-view=\"List.Header\" class=\"case-list-list-header-container\"></div><div class=\"case-list-results-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasCases") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </section> ";
},"useData":true}); template.Name = 'case_list'; return template;});