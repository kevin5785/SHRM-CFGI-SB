define('order_wizard_confirmation_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#/purchases/view/salesorder/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"orderId") || (depth0 != null ? compilerNameLookup(depth0,"orderId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"orderId","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"confirmationNumber") || (depth0 != null ? compilerNameLookup(depth0,"confirmationNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmationNumber","hash":{},"data":data}) : helper)))
    + "</a>. ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"confirmationNumber") || (depth0 != null ? compilerNameLookup(depth0,"confirmationNumber") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmationNumber","hash":{},"data":data}) : helper)))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"order-wizard-confirmation-module-body\" data-type=\"additional-confirmation-message\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"additionalConfirmationMessage") || (depth0 != null ? compilerNameLookup(depth0,"additionalConfirmationMessage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"additionalConfirmationMessage","hash":{},"data":data}) : helper)))
    + "</p> ";
},"7":function(depth0,helpers,partials,data) {
  return "data-touchpoint=\"home\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"order-wizard-confirmation-module alert fade in\"><h2 class=\"order-wizard-confirmation-module-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Thank you for shopping with us!", {"name":"translate","hash":{},"data":data})))
    + "</h2><p class=\"order-wizard-confirmation-module-body\" name=\"orderNumber\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your order number is", {"name":"translate","hash":{},"data":data})))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isGuestAndCustomerCenter") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p><p class=\"order-wizard-confirmation-module-body\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We received your order and will process it right away.", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"additionalConfirmationMessage") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <a class=\"order-wizard-confirmation-module-continue\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueURL") || (depth0 != null ? compilerNameLookup(depth0,"continueURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"continueURL","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"touchPoint") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " data-hashtag=\"#/\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Continue shopping", {"name":"translate","hash":{},"data":data})))
    + "</a><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pdfUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"order-wizard-confirmation-module-download-pdf\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download PDF", {"name":"translate","hash":{},"data":data})))
    + " </a></div>";
},"useData":true}); template.Name = 'order_wizard_confirmation_module'; return template;});