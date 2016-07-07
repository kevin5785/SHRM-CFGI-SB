define('login_register_checkout_as_guest.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "in";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Checkout as a Guest", {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Checkout as a guest and you will have an opportunity to create an account when you are finished.", {"name":"translate","hash":{},"data":data})))
    + " ";
},"7":function(depth0,helpers,partials,data) {
  return " <div class=\"login-register-checkout-as-guest-form-controls-group\" data-validation=\"control-group\"><div class=\"login-register-checkout-as-guest-register-form-controls\" data-validation=\"control\"><input value=\"true\" type=\"hidden\" name=\"redirect\" id=\"redirect\" ></div></div> ";
  },"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <hr><div class=\"login-register-checkout-as-guest-register-header collapse in\" id=\"register-show-view\"><p class=\"login-register-checkout-as-guest-description\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create an account and take advantage of faster checkouts and other great benefits.", {"name":"translate","hash":{},"data":data})))
    + " </p><button class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\" data-target=\"#register-show-view,#register-view\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Create Account", {"name":"translate","hash":{},"data":data})))
    + " </button></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"login-register-checkout-as-guest-header collapse ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"guest-show-view\"><p class=\"login-register-checkout-as-guest-description\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Checkout as a guest and you will have an opportunity to create an account when you are finished.", {"name":"translate","hash":{},"data":data})))
    + " </p><button href=\"#\" class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\" data-target=\"#guest-show-view,#guest-view\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Checkout as a Guest", {"name":"translate","hash":{},"data":data})))
    + " </button></div><div class=\"login-register-checkout-as-guest-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"guest-view\"><p class=\"login-register-checkout-as-guest-description\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p><form class=\"login-register-checkout-as-guest-form\" method=\"POST\" novalidate><div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\"><label class=\"login-register-checkout-as-guest-control-label\" for=\"register-firstname\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "First Name <small class=\"login-register-checkout-as-guest-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\"><input type=\"text\" name=\"firstname\" id=\"guest-firstname\" class=\"login-register-checkout-as-guest-input\"></div></div><div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\"><label class=\"login-register-checkout-as-guest-control-label\" for=\"guest-lastname\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Last Name <small class=\"login-register-checkout-as-guest-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\"><input type=\"text\" name=\"lastname\" id=\"guest-lastname\" class=\"login-register-checkout-as-guest-input\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\"><label class=\"login-register-checkout-as-guest-control-label\" for=\"register-email\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email Address <small class=\"login-register-checkout-as-guest-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\"><input type=\"email\" name=\"email\" id=\"guest-email\" class=\"login-register-checkout-as-guest-input\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "your@email.com", {"name":"translate","hash":{},"data":data})))
    + "\" value=\"\"><p class=\"login-register-checkout-as-guest-help-block\"><small>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "We need your email address to contact you about your order.", {"name":"translate","hash":{},"data":data})))
    + "</small></p></div></div><div class=\"login-register-checkout-as-guest-form-messages\" data-type=\"alert-placeholder\"></div><div class=\"login-register-checkout-as-guest-control-group\"><button type=\"submit\" class=\"login-register-checkout-as-guest-submit\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Proceed to Checkout", {"name":"translate","hash":{},"data":data})))
    + " </button></div></form></div> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'login_register_checkout_as_guest'; return template;});