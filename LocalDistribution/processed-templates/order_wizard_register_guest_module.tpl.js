define('order_wizard_register_guest_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-wizard-register-guest-module-form-container collapse\" id=\"register-guest-show-view\"><form><div data-view=\"RegisterGuestForm\"></div><p><button type=\"submit\" class=\"order-wizard-register-guest-module-create-account-button\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create Account", {"name":"translate","hash":{},"data":data})))
    + " </button></p></form></div><p><button class=\"order-wizard-register-guest-module-button-toggle-create-account\" data-action=\"remove-button\" data-toggle=\"collapse\" data-target=\"#register-guest-show-view\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create Account", {"name":"translate","hash":{},"data":data})))
    + " </button></p>";
},"useData":true}); template.Name = 'order_wizard_register_guest_module'; return template;});