define('order_wizard_paymentmethod_creditcard_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h3 class=\"order-wizard-paymentmethod-creditcard-module-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h3> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <div class=\"order-wizard-paymentmethod-creditcard-module-selected-card\"><div data-view=\"SelectedCreditCard\"></div><div class=\"order-wizard-paymentmethod-creditcard-module-actions\"><a class=\"order-wizard-paymentmethod-creditcard-module-edit-card\" href=\"/creditcards/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedCreditCard") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" data-toggle=\"show-in-modal\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit Card", {"name":"translate","hash":{},"data":data})))
    + " </a><a href=\"#\" class=\"order-wizard-paymentmethod-creditcard-module-change-card\" data-action=\"change-creditcard\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Change Card", {"name":"translate","hash":{},"data":data})))
    + " </a></div></div> ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div id=\"creditcard-module-list-placeholder\" class=\"order-wizard-paymentmethod-creditcard-module-list-placeholder\"><p><a class=\"order-wizard-paymentmethod-creditcard-module-add-new-credit-card-button\" href=\"/creditcards/new\" data-toggle=\"show-in-modal\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add New Credit Card", {"name":"translate","hash":{},"data":data})))
    + " </a></p><div data-view=\"CreditCard.List\"></div></div> ";
},"7":function(depth0,helpers,partials,data) {
  return " <div class=\"order-wizard-paymentmethod-creditcard-module-form\"><form method=\"POST\" data-view=\"CreditCard.Form\"></form></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-paymentmethod-creditcard-module\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedCreditCard") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showList") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showForm") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <p class=\"order-wizard-paymentmethod-creditcard-module-learn-more\"><i class=\"order-wizard-paymentmethod-creditcard-module-learn-more-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Learn more about <a class=\"order-wizard-paymentmethod-creditcard-module-learn-more-link\" data-action=\"show-safe-secure-info\"> safe and secure </a> shopping", {"name":"translate","hash":{},"data":data})))
    + " </p></div>";
},"useData":true}); template.Name = 'order_wizard_paymentmethod_creditcard_module'; return template;});