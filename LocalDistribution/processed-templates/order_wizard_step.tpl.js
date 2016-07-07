define('order_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <header class=\"order-wizard-step-header\"><h2 data-type=\"wizard-step-name-container\" class=\"order-wizard-step-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></header> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"order-wizard-step-message "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"bottomMessageClass") || (depth0 != null ? compilerNameLookup(depth0,"bottomMessageClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bottomMessageClass","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"bottomMessage") || (depth0 != null ? compilerNameLookup(depth0,"bottomMessage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bottomMessage","hash":{},"data":data}) : helper)))
    + " </small> ";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"order-wizard-step-button-continue\" data-action=\"submit-step\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"continueButtonLabel","hash":{},"data":data}) : helper)))
    + " </button> ";
},"7":function(depth0,helpers,partials,data) {
  return "style=\"display:none;\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div data-action=\"skip-login-message\" class=\"order-wizard-step-guest-message\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-type=\"alert-placeholder-step\"></div><div class=\"order-wizard-step-review-wrapper\"><section class=\"order-wizard-step-review-main\"><div id=\"wizard-step-review-left\"></div></section><section id=\"wizard-step-review-right\" class=\"order-wizard-step-review-secondary\"></section></div><div class=\"order-wizard-step-content-wrapper\"><section id=\"wizard-step-content\" class=\"order-wizard-step-content-main\"></section><section id=\"wizard-step-content-right\" class=\"order-wizard-step-content-secondary\"></section><div class=\"order-wizard-step-actions\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBottomMessage") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"order-wizard-step-button-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <button class=\"order-wizard-step-button-back\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " data-action=\"previous-step\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </button></div></div></div>";
},"useData":true}); template.Name = 'order_wizard_step'; return template;});