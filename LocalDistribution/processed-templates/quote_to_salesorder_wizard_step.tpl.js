define('quote_to_salesorder_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"quote-to-salesorder-wizard-step-actions\"><div class=\"quote-to-salesorder-wizard-step-button-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"quote-to-salesorder-wizard-step-button-continue\" data-action=\"submit-step\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"continueButtonLabel","hash":{},"data":data}) : helper)))
    + " </button> ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"quote-to-salesorder-wizard-step-button-back\" data-action=\"previous-step\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </button> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"quote-to-salesorder-wizard-step-disclaimer-message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "For immediate assistance contact <strong>$(0)</strong> at <strong>$(1)</strong> or send an email to <strong>$(2)</strong>", (depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0), (depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0), (depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </small> ";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <small class=\"quote-to-salesorder-wizard-step-disclaimer-message\"> ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"disclaimer","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </small> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div><header><h1 class=\"quote-to-salesorder-wizard-step-header-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentStepGroupName") || (depth0 != null ? compilerNameLookup(depth0,"currentStepGroupName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentStepGroupName","hash":{},"data":data}) : helper)))
    + "</h1></header></div><div data-type=\"alert-placeholder-step\"></div><div class=\"quote-to-salesorder-wizard-step-content-wrapper\"><div id=\"wizard-step-content\" class=\"quote-to-salesorder-wizard-step-content-main\"></div><div id=\"wizard-step-content-right\" class=\"quote-to-salesorder-wizard-step-content-right\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showNavButtons") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"quote-to-salesorder-wizard-step-disclaimer-bottom-content\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBottomMessage") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div>";
},"useData":true}); template.Name = 'quote_to_salesorder_wizard_step'; return template;});