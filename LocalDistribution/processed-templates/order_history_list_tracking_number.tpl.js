define('order_history_list_tracking_number.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showContentOnEmpty") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <span class=\"order-history-list-tracking-number-not-available-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tracking Number:", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-list-tracking-number-not-available "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"contentClass") || (depth0 != null ? compilerNameLookup(depth0,"contentClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contentClass","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "N/A", {"name":"translate","hash":{},"data":data})))
    + " </span> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTrackingNumberCollectionLengthEqual1") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showTrackPackagesLabel") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <span class=\"order-history-list-tracking-number-available-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Tracking Number:", {"name":"translate","hash":{},"data":data})))
    + " </span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberName") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"order-history-list-tracking-number-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Track Packages", {"name":"translate","hash":{},"data":data})))
    + ": </span> ";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a target=\"_blank\" class=\"order-history-list-tracking-number-control-numbers-link\" data-action=\"tracking-number\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberURL") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstTrackingNumberURL","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberName") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstTrackingNumberName","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberText") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstTrackingNumberText","hash":{},"data":data}) : helper)))
    + "</a> ";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a target=\"_blank\" class=\"order-history-list-tracking-number-control-numbers-link\" data-action=\"tracking-number\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberURL") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstTrackingNumberURL","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberText") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstTrackingNumberText","hash":{},"data":data}) : helper)))
    + "</a> ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-history-list-tracking-number-control\"><button class=\"order-history-list-tracking-number-control-button\"  data-toggle=\"dropdown\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Track Packages", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"order-history-list-tracking-number-control-toggle-icon\"></i></button><div class=\"order-history-list-tracking-number-control-numbers ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"collapseElements") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><ul> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"trackingNumbers") : depth0), {"name":"each","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul></div></div> ";
},"13":function(depth0,helpers,partials,data) {
  return "collapsed";
  },"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li><a target=\"_blank\" class=\"order-history-list-tracking-number-control-numbers-link\" data-action=\"tracking-number\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"serviceURL") || (depth0 != null ? compilerNameLookup(depth0,"serviceURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"serviceURL","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"trackingNumber") || (depth0 != null ? compilerNameLookup(depth0,"trackingNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"trackingNumber","hash":{},"data":data}) : helper)))
    + "</a> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"serviceName") || (depth0 != null ? compilerNameLookup(depth0,"serviceName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"serviceName","hash":{},"data":data}) : helper)))
    + " </li> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTrackingNumberCollectionEmpty") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'order_history_list_tracking_number'; return template;});