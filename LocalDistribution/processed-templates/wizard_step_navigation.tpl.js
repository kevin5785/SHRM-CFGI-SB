define('wizard_step_navigation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a data-action=\"previous-step\" class=\"wizard-step-navigation-back\"><i class=\"wizard-step-navigation-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Previous", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (data && compilerNameLookup(data,"first")), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <li class=\"wizard-step-navigation-step wizard-step-navigation-step-"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\"><a class=\"wizard-step-navigation-step-anchor "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"listItemClass") || (depth0 != null ? compilerNameLookup(depth0,"listItemClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"listItemClass","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkUrl") || (depth0 != null ? compilerNameLookup(depth0,"linkUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkUrl","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"counter") || (depth0 != null ? compilerNameLookup(depth0,"counter") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"counter","hash":{},"data":data}) : helper)))
    + "<span class=\"wizard-step-navigation-step-anchor-label\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a></li> ";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <li class=\"wizard-step-navigation-divider wizard-step-navigation-divider-"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\">/</li> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"wizard-step-navigation\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <ol class=\"wizard-step-navigation-menu\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"stepGroups") : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ol></div>";
},"useData":true}); template.Name = 'wizard_step_navigation'; return template;});