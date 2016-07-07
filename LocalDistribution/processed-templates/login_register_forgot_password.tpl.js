define('login_register_forgot_password.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <section class=\"login-register-forgot-password\"><header class=\"login-register-forgot-password-header\"><h1 class=\"login-register-forgot-password-header-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Log in", {"name":"translate","hash":{},"data":data})))
    + " </h1></header><div class=\"login-register-forgot-password-body\"><h2 class=\"login-register-forgot-password-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Reset Password", {"name":"translate","hash":{},"data":data})))
    + " </h2><form class=\"login-register-forgot-password-form\" novalidate><p class=\"login-register-forgot-password-description\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Enter your email below and we'll send you a link to reset your password.", {"name":"translate","hash":{},"data":data})))
    + " </p><fieldset><div class=\"login-register-forgot-password-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-forgot-password-form-label\" for=\"email\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email Address <small class=\"login-register-forgot-password-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-forgot-password-form-controls\" data-validation=\"control\"><input type=\"email\" name=\"email\" id=\"email\" class=\"login-register-forgot-password-form-input\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "your@email.com", {"name":"translate","hash":{},"data":data})))
    + "\"></div></div><div data-type=\"alert-placeholder\"></div><div class=\"login-register-forgot-password-form-controls-group\"><button type=\"submit\" class=\"login-register-forgot-password-submit\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Send Email", {"name":"translate","hash":{},"data":data})))
    + " </button></div></fieldset></form><a href=\"/login-register\" class=\"login-register-forgot-password-sign-in\" data-target=\".register\" data-action=\"sign-in-now\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Log in now", {"name":"translate","hash":{},"data":data})))
    + " </a></div></section>";
},"useData":true}); template.Name = 'login_register_forgot_password'; return template;});