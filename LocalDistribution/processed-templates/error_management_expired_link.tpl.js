define('error_management_expired_link.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h1 class=\"error-management-expired-link-header-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"error-management-expired-link-header\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div id=\"main-banner\" class=\"error-management-expired-link-main-banner\"></div></div><div id=\"internal-error-content\" class=\"error-management-expired-link-content\"> ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><hr><div><a class=\"error-management-expired-link-login-button\" href=\"#\" data-touchpoint=\"login\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Login", {"name":"translate","hash":{},"data":data})))
    + "</a><a class=\"error-management-expired-link-register-button\" href=\"#\" data-touchpoint=\"register\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Register", {"name":"translate","hash":{},"data":data})))
    + "</a></div>";
},"useData":true}); template.Name = 'error_management_expired_link'; return template;});