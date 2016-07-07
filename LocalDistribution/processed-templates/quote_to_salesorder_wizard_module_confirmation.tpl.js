define('quote_to_salesorder_wizard_module_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "For immediate assistance call us at <strong>$(0)</strong> or email us at <strong>$(1)</strong>", (depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0), (depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"disclaimer","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"quote-to-salesorder-wizard-module-confirmation\"><h2 class=\"quote-to-salesorder-wizard-module-confirmation-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Thank you!", {"name":"translate","hash":{},"data":data})))
    + "</h2><p class=\"quote-to-salesorder-wizard-module-confirmation-body\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your order number is <a href=\"/purchases/view/salesorder/$(0)\">#$(1)</a>", (depth0 != null ? compilerNameLookup(depth0,"orderId") : depth0), (depth0 != null ? compilerNameLookup(depth0,"orderNumber") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p><p class=\"quote-to-salesorder-wizard-module-confirmation-body\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We received your order and will process it right away.", {"name":"translate","hash":{},"data":data})))
    + "</p><p class=\"quote-to-salesorder-wizard-module-confirmation-body\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p><a class=\"quote-to-salesorder-wizard-module-confirmation-continue\" href=\"/quotes\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Go Back to List of Quotes", {"name":"translate","hash":{},"data":data})))
    + "</a></div>";
},"useData":true}); template.Name = 'quote_to_salesorder_wizard_module_confirmation'; return template;});