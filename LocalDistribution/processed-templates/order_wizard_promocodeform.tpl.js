define('order_wizard_promocodeform.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-promocodeform\"><div class=\"order-wizard-promocodeform-expander-head\"><a class=\"order-wizard-promocodeform-expander-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#order-wizard-promocode\" aria-expanded=\"false\" aria-controls=\"order-wizard-promocode\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Have a Promo Code?", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"order-wizard-promocodeform-tooltip\" data-toggle=\"tooltip\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<b>Promo Code</b><br>To redeem a promo code, simply enter your information and we will apply the offer to your purchase during checkout.", {"name":"translate","hash":{},"data":data})))
    + "\"></i><i class=\"order-wizard-promocodeform-expander-toggle-icon\"></i></a></div><div class=\"order-wizard-promocodeform-expander-body collapse\" id=\"order-wizard-promocode\"  data-type=\"promo-code-container\" data-action=\"show-promo-code-container\" aria-expanded=\"false\" data-target=\"#order-wizard-promocode\"><div class=\"order-wizard-promocodeform-expander-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMultiShipTo") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-wizard-promocodeform-unsupported-summary-warning\"><p> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping to multiple addresses does not support Promo Codes.", {"name":"translate","hash":{},"data":data})))
    + " </p><p> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "If you want to apply one, please <a href=\"#\" data-action=\"change-status-multishipto-sidebar\" data-type=\"multishipto\">ship to a single address</a>.", {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
},"4":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Cart.PromocodeForm\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPromocodeForm") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'order_wizard_promocodeform'; return template;});