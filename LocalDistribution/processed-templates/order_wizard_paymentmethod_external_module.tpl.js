define('order_wizard_paymentmethod_external_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-wizard-paymentmethod-external-module-row\"><div class=\"order-wizard-paymentmethod-external-module-column-left\"><img class=\"order-wizard-paymentmethod-external-module-image\" src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageUrl") || (depth0 != null ? compilerNameLookup(depth0,"imageUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"order-wizard-paymentmethod-external-module-column-right\"><p>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p></div></div>";
},"useData":true}); template.Name = 'order_wizard_paymentmethod_external_module'; return template;});