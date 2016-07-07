define('return_authorization_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "in";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <div class=\"return-authorization-confirmation-comments-row\"><div class=\"return-authorization-confirmation-comments\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Comments:", {"name":"translate","hash":{},"data":data})))
    + "</p><blockquote>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), depth0))
    + "</blockquote></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"return-authorization-confirmation\"><h2 class=\"return-authorization-confirmation-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageTitle") || (depth0 != null ? compilerNameLookup(depth0,"pageTitle") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</h2><div class=\"return-authorization-confirmation-module\"><h2 class=\"return-authorization-confirmation-module-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Thank you!", {"name":"translate","hash":{},"data":data})))
    + "</h2><p class=\"return-authorization-confirmation-module-body\"><a href=\"returns/returnauthorization/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalId","hash":{},"data":data}) : helper)))
    + "\" class=\"return-authorization-confirmation-module-body-return-id\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Return request #$(0)", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), {"name":"translate","hash":{},"data":data})))
    + "</a></p><p class=\"return-authorization-confirmation-module-body\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your request was successfully submitted and a representative will contact you briefly.", {"name":"translate","hash":{},"data":data})))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "An email was sent to you with a copy of this request.", {"name":"translate","hash":{},"data":data})))
    + " </p><a href=\"/returns\" class=\"return-authorization-confirmation-module-continue\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Go to list of requests", {"name":"translate","hash":{},"data":data})))
    + "</a></div><h3><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "From:", {"name":"translate","hash":{},"data":data})))
    + "</span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchase #$(0)", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"tranid") : stack1), {"name":"translate","hash":{},"data":data})))
    + " <span class=\"return-authorization-confirmation-amount\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span></h3><div class=\"return-authorization-confirmation-row\" name=\"return-content-layout\"><div class=\"return-authorization-confirmation-content-col\"><div class=\"return-authorization-confirmation-accordion-divider\"><div class=\"return-authorization-confirmation-accordion-head\"><a href=\"#\" class=\"return-authorization-confirmation-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#return-products\" aria-expanded=\"true\" aria-controls=\"return-products\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Items ($(0))", (depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <i class=\"return-authorization-confirmation-head-toggle-icon\"></i></a></div><div class=\"return-authorization-confirmation-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"return-products\" role=\"tabpanel\" data-target=\"#return-products\"><table class=\"return-authorization-confirmation-products-table\"><thead class=\"return-authorization-confirmation-headers\"><tr><th class=\"return-authorization-confirmation-headers-image\"></th><th class=\"return-authorization-confirmation-headers-product\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Item", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-confirmation-headers-quantity\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Qty to return", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-confirmation-headers-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-confirmation-headers-reason\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Reason for Return", {"name":"translate","hash":{},"data":data})))
    + "</th></tr></thead><tbody data-view=\"Items.Collection\"></tbody></table></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showComments") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div>";
},"useData":true}); template.Name = 'return_authorization_confirmation'; return template;});