define('requestquote_wizard_module_message.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <div class=\"requestquote-wizard-module-message\"><p class=\"requestquote-wizard-module-message-disclaimer\"> ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p></div>";
},"useData":true}); template.Name = 'requestquote_wizard_module_message'; return template;});