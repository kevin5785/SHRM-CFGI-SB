define('order_wizard_msr_package_details_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"muted order-wizard-msr-package-details-quantity-crossed\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineAmountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"lineAmountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineAmountFormatted","hash":{},"data":data}) : helper)))
    + " </small> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"order-wizard-msr-package-details-quantity\"><p class=\"order-wizard-msr-package-details-quantity-count\"><span class=\"order-wizard-msr-package-details-quantity-count-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity: ", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"order-wizard-msr-package-details-quantity-count-value\" data-type=\"item-quantity\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineQuantity") || (depth0 != null ? compilerNameLookup(depth0,"lineQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineQuantity","hash":{},"data":data}) : helper)))
    + " </span></p><div class=\"order-wizard-msr-package-details-quantity-amount\"><p class=\"order-wizard-msr-package-details-quantity-amount\"><span class=\"order-wizard-msr-package-details-quantity-amount-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-wizard-msr-package-details-quantity-amount-value\" data-type=\"item-amount\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"lineTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAmountGreaterThanTotal") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div>";
},"useData":true}); template.Name = 'order_wizard_msr_package_details_quantity'; return template;});