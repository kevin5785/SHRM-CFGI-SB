define('order_wizard_termsandconditions_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"wrapperClass") || (depth0 != null ? compilerNameLookup(depth0,"wrapperClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wrapperClass","hash":{},"data":data}) : helper)))
    + "\"> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <label class=\"order-wizard-termsandconditions-module-label\"><input type=\"checkbox\" id=\"termsandconditions\" name=\"termsandconditions\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAgreeTermCondition") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "I agree to the <a data-type=\"term-condition-link-module\" data-toggle=\"show-terms\" href=\"#\">Terms & Conditions</a>", {"name":"translate","hash":{},"data":data})))
    + " </label> ";
},"4":function(depth0,helpers,partials,data) {
  return "checked";
  },"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"order-wizard-termsandconditions-module-text\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "By placing your order, you are agreeing to our <a data-type=\"term-condition-link-module\" data-toggle=\"show-terms\" href=\"#\">Terms & Conditions</a>", {"name":"translate","hash":{},"data":data})))
    + " </small> ";
},"8":function(depth0,helpers,partials,data) {
  return " </div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showWrapper") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCheckbox") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showWrapper") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'order_wizard_termsandconditions_module'; return template;});