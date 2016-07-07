define('overview_payment.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div data-view=\"CreditCard.View\"></div><a class=\"overview-payment-card-button-edit\" href=\"/creditcards/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"creditCardInternalid") || (depth0 != null ? compilerNameLookup(depth0,"creditCardInternalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"creditCardInternalid","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"show-in-modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit", {"name":"translate","hash":{},"data":data})))
    + "</a> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"overview-payment-card-content\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We have no default credit card on file for this account.", {"name":"translate","hash":{},"data":data})))
    + "</p></div><a href=\"/creditcards/new\" class=\"overview-payment-card-button-edit\" data-toggle=\"show-in-modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add a Credit Card", {"name":"translate","hash":{},"data":data})))
    + "</a> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <article class=\"overview-payment\"><div class=\"overview-payment-header\"><h4>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment", {"name":"translate","hash":{},"data":data})))
    + "</h4></div><section class=\"overview-payment-card\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasDefaultCreditCard") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </section></article> ";
},"useData":true}); template.Name = 'overview_payment'; return template;});