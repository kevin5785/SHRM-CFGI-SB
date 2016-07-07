define('order_wizard_registeremail_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " checked ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"order-wizard-registeremail-module\"><div class=\"order-wizard-registeremail-module-show-addresses-container\"><h3 class=\"order-wizard-registeremail-module-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Enter Email Address", {"name":"translate","hash":{},"data":data})))
    + " </h3><div class=\"order-wizard-registeremail-module-form-placeholder\"><label class=\"order-wizard-registeremail-module-edit-fields-group-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email Address", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"order-wizard-registeremail-module-input-required\">*</span></label><input type=\"email\" name=\"email\" id=\"email\" class=\"order-wizard-registeremail-module-edit-fields-group-input\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "your@email.com", {"name":"translate","hash":{},"data":data})))
    + "\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "\" ><p class=\"order-wizard-registeremail-module-input-help\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We need you email address to send you information about your order.", {"name":"translate","hash":{},"data":data})))
    + " </p></div><label class=\"order-wizard-registeremail-module-checkbox\"><input\n				type=\"checkbox\"\n				name=\"sign-up-newsletter\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmailSubcribe") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " > "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sign up for our Newsletter to receive promotions", {"name":"translate","hash":{},"data":data})))
    + " </label></div></div>";
},"useData":true}); template.Name = 'order_wizard_registeremail_module'; return template;});