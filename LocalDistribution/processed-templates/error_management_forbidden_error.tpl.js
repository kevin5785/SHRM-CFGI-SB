define('error_management_forbidden_error.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h1>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"error-management-forbidden-error\"><div class=\"error-management-forbidden-error-header\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div id=\"main-banner\" class=\"error-management-forbidden-error-main-banner\"></div></div><div id=\"forbidden-error-content\" class=\"error-management-forbidden-error-content\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sorry! You have no permission to view this page.", {"name":"translate","hash":{},"data":data})))
    + "</p><p>";
  stack1 = ((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Please contact the website administrator, click <a href=\"/\">here</a> to continue.", {"name":"translate","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p></div></div>";
},"useData":true}); template.Name = 'error_management_forbidden_error'; return template;});