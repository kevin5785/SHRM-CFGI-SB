define('overview_shipping.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div data-view=\"Address.Details\"></div><a class=\"overview-shipping-card-button-edit\" href=\"/addressbook/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"shippingAddressInternalid") || (depth0 != null ? compilerNameLookup(depth0,"shippingAddressInternalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"shippingAddressInternalid","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"show-in-modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit", {"name":"translate","hash":{},"data":data})))
    + "</a> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"overview-shipping-card-content\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We have no default address on file for this account.", {"name":"translate","hash":{},"data":data})))
    + "</p></div><a href=\"/addressbook/new\" class=\"overview-shipping-card-button-edit\" data-toggle=\"show-in-modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create New Address", {"name":"translate","hash":{},"data":data})))
    + "</a> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <article class=\"overview-shipping\"><div class=\"overview-shipping-header\"><h4>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shipping", {"name":"translate","hash":{},"data":data})))
    + "</h4></div><section class=\"overview-shipping-card\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasDefaultShippingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </section></article>";
},"useData":true}); template.Name = 'overview_shipping'; return template;});