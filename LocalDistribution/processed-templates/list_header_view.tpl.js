define('list_header_view.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"list-header-view\" data-type=\"accordion\"><div class=\"list-header-view-accordion\" data-action=\"accordion-header\"><div class=\"list-header-view-accordion-link\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"headerMarkup") || (depth0 != null ? compilerNameLookup(depth0,"headerMarkup") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"headerMarkup","hash":{},"data":data}) : helper)))
    + "</div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHeaderExpandable") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"list-header-view-accordion-header\"><button class=\"list-header-view-filter-button\" data-action=\"toggle-filters\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Filter", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"list-header-view-filter-button-icon\" ></i></button></div><div class=\"list-header-view-accordion-body "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"initiallyCollapsed") || (depth0 != null ? compilerNameLookup(depth0,"initiallyCollapsed") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initiallyCollapsed","hash":{},"data":data}) : helper)))
    + "\" data-type=\"accordion-body\" ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"accordionStyle") || (depth0 != null ? compilerNameLookup(depth0,"accordionStyle") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"accordionStyle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "><div class=\"list-header-view-accordion-body-header "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"classes") || (depth0 != null ? compilerNameLookup(depth0,"classes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"rangeFilter") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"sorts") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"filters") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <label class=\"list-header-view-from\" for=\"from\"><span>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeFilterLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeFilterLabel","hash":{},"data":data}) : helper)))
    + "</span><input class=\"list-header-view-accordion-body-input\" id=\"from\" name=\"from\" type=\"date\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "YYYY-MM-DD", {"name":"translate","hash":{},"data":data})))
    + "\" autocomplete=\"off\" data-format=\"yyyy-mm-dd\" data-start-date=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeFilterFromMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterFromMin") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeFilterFromMin","hash":{},"data":data}) : helper)))
    + "\" data-end-date=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeFilterFromMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterFromMax") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeFilterFromMax","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"selectedRangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"selectedRangeFrom") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"selectedRangeFrom","hash":{},"data":data}) : helper)))
    + "\" data-action=\"range-filter\" data-todayhighlight=\"true\"/><i class=\"list-header-view-accordion-body-calendar-icon\"></i><a class=\"list-header-view-accordion-body-clear\" data-action=\"clear-value\"><i class=\"list-header-view-accordion-body-clear-icon\"></i></a></label><label class=\"list-header-view-to\" for=\"to\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "to", {"name":"translate","hash":{},"data":data})))
    + "</span><input class=\"list-header-view-accordion-body-input\" id=\"to\" name=\"to\" type=\"date\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "YYYY-MM-DD", {"name":"translate","hash":{},"data":data})))
    + "\" autocomplete=\"off\" data-format=\"yyyy-mm-dd\" data-start-date=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeFilterToMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterToMin") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeFilterToMin","hash":{},"data":data}) : helper)))
    + "\" data-end-date=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rangeFilterToMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterToMax") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rangeFilterToMax","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"selectedRangeTo") || (depth0 != null ? compilerNameLookup(depth0,"selectedRangeTo") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"selectedRangeTo","hash":{},"data":data}) : helper)))
    + "\" data-action=\"range-filter\" data-todayhighlight=\"true\"/><i class=\"list-header-view-accordion-body-calendar-icon\"></i><a class=\"list-header-view-accordion-body-clear\" data-action=\"clear-value\"><i class=\"list-header-view-accordion-body-clear-icon\"></i></a></label> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <label class=\"list-header-view-sorts\"><select name=\"sort\" id=\"\" class=\"list-header-view-accordion-body-select\" data-action=\"sort\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"sorts") : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </select><button class=\"list-header-view-accordion-body-button-sort\" data-action=\"toggle-sort\"><i class=\"list-header-view-accordion-body-button-sort-up "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sortIconUp") || (depth0 != null ? compilerNameLookup(depth0,"sortIconUp") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sortIconUp","hash":{},"data":data}) : helper)))
    + "\"></i><i class=\"list-header-view-accordion-body-button-sort-down "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sortIconDown") || (depth0 != null ? compilerNameLookup(depth0,"sortIconDown") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sortIconDown","hash":{},"data":data}) : helper)))
    + "\"></i></button></label> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <option value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"permission") || (depth0 != null ? compilerNameLookup(depth0,"permission") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"permission","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"selected") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</option> ";
},"7":function(depth0,helpers,partials,data) {
  return " selected ";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <label class=\"list-header-view-filters\"><select name=\"filter\" id=\"\" class=\"list-header-view-accordion-body-select\" data-action=\"filter\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"filters") : depth0), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </select></label> ";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <option value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemValue") || (depth0 != null ? compilerNameLookup(depth0,"itemValue") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemValue","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cssClassName") || (depth0 != null ? compilerNameLookup(depth0,"cssClassName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cssClassName","hash":{},"data":data}) : helper)))
    + "\" data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"permission") || (depth0 != null ? compilerNameLookup(depth0,"permission") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"permission","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"selected") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</option> ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"list-header-view-select-all\"><label class=\"list-header-view-select-all-label\" for=\"select-all\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"unselectedLength") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </label></div> ";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <input type=\"checkbox\" name=\"select-all\" id=\"select-all\" data-action=\"select-all\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Select All ($(0))", (depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <input type=\"checkbox\" name=\"select-all\" id=\"select-all\" data-action=\"unselect-all\" checked>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unselect All ($(0))", (depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"list-header-view-paginator\"><div data-view=\"GlobalViews.Pagination\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"18":function(depth0,helpers,partials,data) {
  return " <div data-view=\"GlobalViews.ShowCurrentPage\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showHeader") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectAll") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'list_header_view'; return template;});