define('order_wizard_promocode_unsupported.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div data-type=\"promocode-unsupported-warning-container\" class=\"order-wizard-promocode-unsupported\"><p class=\"order-wizard-promocode-unsupported-message\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + " </p><div data-type=\"action-buttons-container\" class=\"order-wizard-promocode-unsupported-button-container\"><button class=\"order-wizard-promocode-unsupported-button-continue\" data-action=\"continue\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Continue", {"name":"translate","hash":{},"data":data})))
    + "</button><button class=\"order-wizard-promocode-unsupported-button-back\" type=\"button\" data-dismiss=\"modal\" data-type=\"cancel\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cancel", {"name":"translate","hash":{},"data":data})))
    + "</button></div></div>";
},"useData":true}); template.Name = 'order_wizard_promocode_unsupported'; return template;});