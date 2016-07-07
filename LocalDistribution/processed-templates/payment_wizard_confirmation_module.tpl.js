define('payment_wizard_confirmation_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"payment-wizard-confirmation-module-body\"><a href=\"/transactionhistory/customerpayment/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmationId","hash":{},"data":data}) : helper)))
    + "\" data-touchpoint=\"customercenter\" data-hashtag=\"#transactionhistory/customerpayment/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmationId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment #$(0)", (depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</a></p> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"payment-wizard-confirmation-module-body\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "A Deposit/Credit Memo Application was generated.", {"name":"translate","hash":{},"data":data})))
    + "</p><p class=\"payment-wizard-confirmation-module-body\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You can see the details in <a href=\"/transactionhistory\" data-action=\"update-layout\">Transaction History</a> page.", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a href=\"";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"dwonloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"dwonloadPDFURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dwonloadPDFURL","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" target=\"_blank\" class=\"payment-wizard-confirmation-module-download\" > "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/make-a-payment\" class=\"payment-wizard-confirmation-module-payment\" data-action=\"update-layout\" > "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Make another payment", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"payment-wizard-confirmation-module-payment\" disabled=\"disabled\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No payment due", {"name":"translate","hash":{},"data":data})))
    + "</button> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"payment-wizard-confirmation-module alert fade in\"><h2 class=\"payment-wizard-confirmation-module-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Thank you!", {"name":"translate","hash":{},"data":data})))
    + "</h2> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLinkConfirmation") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"payment-wizard-confirmation-module-body\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You will receive an email with your payment confirmation.", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isConfirmationCreated") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isInvoiceLengthGreaterThan0") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'payment_wizard_confirmation_module'; return template;});