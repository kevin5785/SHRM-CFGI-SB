define('order_wizard_msr_package_details_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"order-wizard-msr-package-details-actions-remove-button\" data-action=\"remove-item\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remove from Shipment", {"name":"translate","hash":{},"data":data})))
    + " </button><button class=\"order-wizard-msr-package-details-actions-move-button\" data-action=\"move-item\" style=\"display: none;\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Move", {"name":"translate","hash":{},"data":data})))
    + " </button>";
},"useData":true}); template.Name = 'order_wizard_msr_package_details_actions'; return template;});