define('profile_emailpreferences.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/\" class=\"profile-emailpreferences-button-back\"><i class=\"profile-emailpreferences-button-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Account", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  return "checked";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <hr class=\"profile-emailpreferences-divider\"><fieldset><legend class=\"profile-emailpreferences-subtitle\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subscriptions", {"name":"translate","hash":{},"data":data})))
    + " </legend> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"subscriptions") : depth0), {"name":"each","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </fieldset> ";
},"6":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"profile-emailpreferences-controls-group\"><div class=\"profile-emailpreferences-controls\"><label class=\"profile-emailpreferences-label\"><input type=\"checkbox\" id=\"subscription-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-type=\"subscription-checkbox\" value=\"T\" data-unchecked-value=\"F\" name=\"subscription-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depths[1] != null ? compilerNameLookup(depths[1],"isEmailSuscribe") : depths[1]), {"name":"unless","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"subscribed") : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"name") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </label></div></div> ";
},"7":function(depth0,helpers,partials,data) {
  return "disabled";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section class=\"profile-emailpreferences\"><h2 class=\"profile-emailpreferences-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2><div class=\"profile-emailpreferences-alert-placeholder\" data-type=\"alert-placeholder\"></div><form class=\"profile-emailpreferences-form\"><fieldset><legend class=\"profile-emailpreferences-subtitle\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Newsletter", {"name":"translate","hash":{},"data":data})))
    + " </legend><div class=\"profile-emailpreferences-controls-group\"><div class=\"profile-emailpreferences-controls\"><label class=\"profile-emailpreferences-label\"><input type=\"checkbox\" id=\"emailsubscribe\" data-type=\"emailsubscribe-checkbox\" value=\"T\" data-unchecked-value=\"F\" name=\"emailsubscribe\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmailSuscribe") : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Yes, I would like to sign up for your Newsletter.", {"name":"translate","hash":{},"data":data})))
    + " </label></div></div></fieldset> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"campaignSubscriptions") : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"profile-emailpreferences-controls-submit\"><button type=\"submit\" class=\"profile-emailpreferences-submit\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Update", {"name":"translate","hash":{},"data":data})))
    + "</button><button type=\"reset\"  class=\"profile-emailpreferences-reset\" data-action=\"reset\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cancel", {"name":"translate","hash":{},"data":data})))
    + "</button></div></form></section> ";
},"useData":true,"useDepths":true}); template.Name = 'profile_emailpreferences'; return template;});