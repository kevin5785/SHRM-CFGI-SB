define('order_wizard_title.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"details") || (depth0 != null ? compilerNameLookup(depth0,"details") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"details","hash":{},"data":data}) : helper)))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"tag") || (depth0 != null ? compilerNameLookup(depth0,"tag") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tag","hash":{},"data":data}) : helper)))
    + " class=\"order-wizard-title\" "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"attributes") || (depth0 != null ? compilerNameLookup(depth0,"attributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"attributes","hash":{},"data":data}) : helper)))
    + "> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " </"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"tag") || (depth0 != null ? compilerNameLookup(depth0,"tag") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tag","hash":{},"data":data}) : helper)))
    + "> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDetails") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'order_wizard_title'; return template;});