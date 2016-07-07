define('creditcard_edit_form_securitycode_tooltip.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isVisaMasterOrDiscoverAvailable") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAmexAvailable") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "VISA/Mastercard/Discover", {"name":"translate","hash":{},"data":data})))
    + "</p><p><img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageCvvAllCardsURL") || (depth0 != null ? compilerNameLookup(depth0,"imageCvvAllCardsURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageCvvAllCardsURL","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></p> ";
},"4":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "American Express", {"name":"translate","hash":{},"data":data})))
    + "</p><p><img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageCvvAmericanCardURL") || (depth0 != null ? compilerNameLookup(depth0,"imageCvvAmericanCardURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageCvvAmericanCardURL","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></p> ";
},"6":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "VISA/Mastercard/Discover", {"name":"translate","hash":{},"data":data})))
    + "</p><p><img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageCvvAllCardsURL") || (depth0 != null ? compilerNameLookup(depth0,"imageCvvAllCardsURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageCvvAllCardsURL","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></p><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "American Express", {"name":"translate","hash":{},"data":data})))
    + "</p><p><img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageCvvAmericanCardURL") || (depth0 != null ? compilerNameLookup(depth0,"imageCvvAmericanCardURL") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageCvvAmericanCardURL","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCreditCards") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"useData":true}); template.Name = 'creditcard_edit_form_securitycode_tooltip'; return template;});