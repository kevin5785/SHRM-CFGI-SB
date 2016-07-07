define('order_wizard_paymentmethod_paypal_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You have selected to pay using PayPal as your payment method.", {"name":"translate","hash":{},"data":data})))
    + " </p><p> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "To review your order, click the \"Continue\" button below.", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please select the \"Continue To PayPal\" button below to sign in into your PayPal account.", {"name":"translate","hash":{},"data":data})))
    + " </p><p> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You will be redirected to PayPal, but will have an opportunity to review your order back on our site before purchasing.", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-paymentmethod-paypal-module-row\"><div class=\"order-wizard-paymentmethod-paypal-module-column-left\"><img class=\"order-wizard-paymentmethod-paypal-module-paypal-logo\" src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paypalImageUrl") || (depth0 != null ? compilerNameLookup(depth0,"paypalImageUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paypalImageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"PayPal\"></div><div class=\"order-wizard-paymentmethod-paypal-module-column-right\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPaypalComplete") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div>";
},"useData":true}); template.Name = 'order_wizard_paymentmethod_paypal_module'; return template;});