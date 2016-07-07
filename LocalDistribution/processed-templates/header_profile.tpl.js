define('header_profile.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a class=\"header-profile-welcome-link\" href=\"#\" data-toggle=\"dropdown\"><i class=\"header-profile-welcome-user-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Welcome <strong class=\"header-profile-welcome-link-name\">$(0)</strong>", (depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <i class=\"header-profile-welcome-carret-icon\"></i></a> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMyAccountMenu") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  return " <ul class=\"header-profile-menu-myaccount-container\"><li data-view=\"Header.Menu.MyAccount\"></li></ul> ";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLoginMenu") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLogin") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"header-profile-menu-login-container\"><ul class=\"header-profile-menu-login\"><li><i class=\"header-profile-login-icon\"></i></li><li><a class=\"header-profile-login-link\" data-touchpoint=\"login\" data-hashtag=\"login-register\" href=\"#\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Login", {"name":"translate","hash":{},"data":data})))
    + " </a></li> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul></div> ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li> | </li><li><a class=\"header-profile-register-link\" data-touchpoint=\"register\" data-hashtag=\"login-register\" href=\"#\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Register", {"name":"translate","hash":{},"data":data})))
    + " </a></li> ";
},"9":function(depth0,helpers,partials,data) {
  return " <a class=\"header-profile-loading-link\"><i class=\"header-profile-loading-icon\"></i><span class=\"header-profile-loading-indicator\"></span></a> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'header_profile'; return template;});