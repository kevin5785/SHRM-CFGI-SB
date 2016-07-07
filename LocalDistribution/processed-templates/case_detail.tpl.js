define('case_detail.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"case-detail-reply-section\"><button type=\"button\" class=\"case-detail-close-case-button\" data-action=\"close-case\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Close Case", {"name":"translate","hash":{},"data":data})))
    + "</button></div> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"case-detail-message-group-row\"><div class=\"case-detail-message-date-section\"><span class=\"case-detail-field-message-date\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</span></div> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"messages") : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"case-detail-message-row ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><div class=\"case-detail-message\"><span class=\"case-detail-field-message-author\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"author") || (depth0 != null ? compilerNameLookup(depth0,"author") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</span><span class=\"case-detail-field-message-field-message-time\"> ("
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"messageDate") || (depth0 != null ? compilerNameLookup(depth0,"messageDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"messageDate","hash":{},"data":data}) : helper)))
    + ")</span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><p class=\"case-detail-field-message-text\">"
    + escapeExpression(((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"text") : depth0), {"name":"breaklines","hash":{},"data":data})))
    + "</p></div> ";
},"5":function(depth0,helpers,partials,data) {
  return "sc-highlighted";
  },"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"case-detail-field-message-original\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "- Original case message", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", lambda=this.lambda, buffer = " <section class=\"case-detail\"><header class=\"case-detail-title\"><a href=\"/cases\" class=\"case-detail-back-btn\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Cases", {"name":"translate","hash":{},"data":data})))
    + "</a><h2 class=\"case-detail-header-title\"><span class=\"case-detail-field-number\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</span><span class=\"case-detail-field-subject\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0))
    + "</span></h2></header><div data-confirm-message class=\"case-detail-confirm-message\"></div><div data-type=\"alert-placeholder\"></div><div class=\"case-detail-header-information\"><div class=\"case-detail-header-row\"><div class=\"case-detail-header-col-left\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"case-detail-label-type\">Type of inquiry: </span><span class=\"case-detail-value-type\">$(0)</span>", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"category") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), {"name":"translate","hash":{},"data":data})))
    + "</p><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"case-detail-label-creation-date\">Creation date: </span><span class=\"case-detail-value-creation-date\">$(0)</span>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdDate") : stack1), {"name":"translate","hash":{},"data":data})))
    + "</p><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"case-detail-label-last-message-date\">Last message: </span><span class=\"case-detail-value-last-message-date\">$(0)</span>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"lastMessageDate") : stack1), {"name":"translate","hash":{},"data":data})))
    + "</p></div><div class=\"case-detail-header-col-right\"><p class=\"case-detail-header-status-info\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"case-detail-label-status\">Status: </span><span class=\"case-detail-value-status\">$(0)</span>", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), {"name":"translate","hash":{},"data":data})))
    + "</p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"closeStatusId") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></div><div class=\"case-detail-conversation-background\"><form action=\"#\"><div class=\"case-detail-reply-container\" data-validation=\"control-group\"><label class=\"case-detail-reply-label\" for=\"reply\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Reply with a message:", {"name":"translate","hash":{},"data":data})))
    + "</label><span class=\"case-detail-controls\" data-validation=\"control\"><textarea name=\"reply\" id=\"reply\" class=\"case-detail-reply-textarea\" rows=\"4\"></textarea></span></div><div class=\"case-detail-reply-section\"><button type=\"submit\" class=\"case-detail-reply-button\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Reply", {"name":"translate","hash":{},"data":data})))
    + "</button></div></form><div class=\"case-detail-messages-accordion\"><div class=\"case-detail-accordion-head\"><a class=\"case-detail-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#response-messages\" aria-expanded=\"true\" aria-controls=\"#response-messages\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Messages ($(0))", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"messages_count") : stack1), {"name":"translate","hash":{},"data":data})))
    + " <i class=\"case-detail-accordion-toggle-icon\"></i></a></div><div class=\"case-detail-accordion-body collapse in\" id=\"response-messages\" role=\"tabpanel\" data-target=\"#response-messages\"><div class=\"case-detail-accordion-container\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"grouped_messages") : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div></div></section>";
},"useData":true}); template.Name = 'case_detail'; return template;});