define('order_wizard_msr_package_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "collapsed";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) Items", (depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 Item", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-msr-package-details\"><div class=\"order-wizard-msr-package-details-accordion-divider\"><div class=\"order-wizard-msr-package-details-accordion-head\"><a class=\"order-wizard-msr-package-details-accordion-head-toggle-secondary ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-toggle=\"collapse\" data-target=\"#package-details-products-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"package-details-products-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-wizard-msr-package-details-accordion-head-title-container\"><span class=\"order-wizard-msr-package-details-accordion-head-address-name\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressName") || (depth0 != null ? compilerNameLookup(depth0,"addressName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressName","hash":{},"data":data}) : helper)))
    + " </span><i class=\"order-wizard-msr-package-details-accordion-toggle-icon-secondary\"></i><span class=\"order-wizard-msr-package-details-accordion-head-count\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"itemCountGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></div><p class=\"order-wizard-msr-package-details-accordion-head-address\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"address") || (depth0 != null ? compilerNameLookup(depth0,"address") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address","hash":{},"data":data}) : helper)))
    + " </p></a></div><div class=\"order-wizard-msr-package-details-accordion-body collapse\" id=\"package-details-products-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\" role=\"tabpanel\" data-target=\"#package-details-products-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"order-wizard-msr-package-details-accordion-container\" data-content=\"order-items-body\"><div class=\"order-wizard-msr-package-details-row-fluid\" data-type=\"package\" ><div data-type=\"package-style\" class=\"order-wizard-msr-package-details-multishipto-package\"><div><div class=\"order-wizard-msr-package-details-address-container\" data-type=\"address-container\"><div class=\"order-wizard-msr-package-details-address-container-addresses\"><div data-view=\"Address.Details\" class=\"order-wizard-msr-package-details-address-card\"></div></div></div><div class=\"order-wizard-msr-package-details-address-items-container\" data-type=\"accordion\"><table><tbody class=\"order-wizard-msr-package-details-actionable-table\" data-view=\"Items.Collection\"></tbody></table></div></div></div></div></div></div></div></div> ";
},"useData":true}); template.Name = 'order_wizard_msr_package_details'; return template;});