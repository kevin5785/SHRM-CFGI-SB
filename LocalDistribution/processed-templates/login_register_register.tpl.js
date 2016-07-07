define('login_register_register.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"login-register-register-form-description\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create an account and take advantage of faster checkouts and other great benefits.", {"name":"translate","hash":{},"data":data})))
    + " </p><form class=\"login-register-register-form\" method=\"POST\" novalidate><small class=\"login-register-register-required\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Required <span class=\"login-register-register-form-required\">*</span>", {"name":"translate","hash":{},"data":data})))
    + "</small> ";
},"3":function(depth0,helpers,partials,data) {
  return " autofocus ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-register-form-label\" for=\"register-company\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldRequire") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </label><div class=\"login-register-register-form-controls\" data-validation=\"control\"><input type=\"text\" name=\"company\" id=\"register-company\" class=\"login-register-register-form-input\"/></div></div> ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Company <small class=\"login-register-register-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Company", {"name":"translate","hash":{},"data":data})))
    + " <small class=\"login-register-register-form-optional\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(optional)", {"name":"translate","hash":{},"data":data})))
    + "</small> ";
},"10":function(depth0,helpers,partials,data) {
  return " <div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\"><div class=\"login-register-register-form-controls\" data-validation=\"control\"><input value=\"true\" type=\"hidden\" name=\"redirect\" id=\"redirect\" ></div></div> ";
  },"12":function(depth0,helpers,partials,data) {
  return " checked ";
  },"14":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"login-register-register-form-controls-group\"><button type=\"submit\" class=\"login-register-register-form-submit\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create Account", {"name":"translate","hash":{},"data":data})))
    + " </button></div></form> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFormFieldsOnly") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-register-form-label\" for=\"register-firstname\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "First Name <small class=\"login-register-register-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-register-form-controls\" data-validation=\"control\"><input ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasAutoFocus") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " type=\"text\" name=\"firstname\" id=\"register-firstname\" class=\"login-register-register-form-input\"></div></div><div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-register-form-label\" for=\"register-lastname\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Last Name <small class=\"login-register-register-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-register-form-controls\" data-validation=\"control\"><input type=\"text\" name=\"lastname\" id=\"register-lastname\" class=\"login-register-register-form-input\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCompanyField") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-register-form-label\" for=\"register-email\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email Address <small class=\"login-register-register-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-register-form-controls\" data-validation=\"control\"><input type=\"email\" name=\"email\" id=\"register-email\" class=\"login-register-register-form-input\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "your@email.com", {"name":"translate","hash":{},"data":data})))
    + "\"><p class=\"login-register-register-form-help-block\"><small> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We need your email address to contact you about your order.", {"name":"translate","hash":{},"data":data})))
    + " </small></p></div></div><div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-register-form-label\" for=\"register-password\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Password <small class=\"login-register-register-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-register-form-controls\" data-validation=\"control\"><input type=\"password\" name=\"password\" id=\"register-password\" class=\"login-register-register-form-input\"></div></div><div class=\"login-register-register-form-controls-group\" data-validation=\"control-group\"><label class=\"login-register-register-form-label\" for=\"register-password2\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Re-Enter Password <small class=\"login-register-register-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-register-form-controls\" data-validation=\"control\"><input type=\"password\" name=\"password2\" id=\"register-password2\" class=\"login-register-register-form-input\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"login-register-register-form-controls-group\"><label class=\"login-register-register-form-label\"><input type=\"checkbox\" name=\"emailsubscribe\" id=\"register-emailsubscribe\" value=\"T\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmailSubscribeChecked") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Yes, Please sign me up for $(0) exclusive offers and promotions", (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </label></div><div class=\"login-register-register-form-messages\" data-type=\"alert-placeholder\"></div> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFormFieldsOnly") : depth0), {"name":"unless","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"useData":true}); template.Name = 'login_register_register'; return template;});