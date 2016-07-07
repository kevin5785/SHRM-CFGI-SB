define('login_register_login.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " autofocus ";
  },"3":function(depth0,helpers,partials,data) {
  return " <div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\"><div class=\"login-register-login-form-controls\" data-validation=\"control\"><input value=\"true\" type=\"hidden\" name=\"redirect\" id=\"redirect\" ></div></div> ";
  },"5":function(depth0,helpers,partials,data) {
  return " <div data-view=\"GlobalMessageSessionTimeout\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <h2 class=\"login-register-login-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Returning customer", {"name":"translate","hash":{},"data":data})))
    + "</h2><p class=\"login-register-login-description\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Log in below to checkout with an existing account", {"name":"translate","hash":{},"data":data})))
    + "</p><small class=\"login-register-login-required\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Required <span class=\"login-register-login-form-required\">*</span>", {"name":"translate","hash":{},"data":data})))
    + "</small><form class=\"login-register-login-form\" novalidate><fieldset class=\"login-register-login-form-fieldset\"><div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-login-form-label\" for=\"login-email\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email Address <small class=\"login-register-login-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-login-form-controls\" data-validation=\"control\"><input ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasAutoFocus") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " type=\"email\" name=\"email\" id=\"login-email\" class=\"login-register-login-form-input\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "your@email.com", {"name":"translate","hash":{},"data":data})))
    + "\"/></div></div><div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-login-form-label\" for=\"login-password\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Password <small class=\"login-register-login-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-login-form-controls\" data-validation=\"control\"><input type=\"password\" name=\"password\" id=\"login-password\" class=\"login-register-login-form-input\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-type=\"alert-placeholder\" class=\"login-register-login-form-messages\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isUserSessionTimedOut") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"login-register-login-form-controls-group\" data-type=\"form-login-action\"><button type=\"submit\" class=\"login-register-login-submit\" data-action=\"login-button\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Log In", {"name":"translate","hash":{},"data":data})))
    + " </button><a class=\"login-register-login-forgot\" data-action=\"forgot-password\" href=\"/forgot-password\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Forgot password?", {"name":"translate","hash":{},"data":data})))
    + " </a></div></fieldset></form>";
},"useData":true}); template.Name = 'login_register_login'; return template;});