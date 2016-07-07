define('overview_profile.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"overview-profile-company\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"companyName") || (depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"companyName","hash":{},"data":data}) : helper)))
    + "</p> ";
},"3":function(depth0,helpers,partials,data) {
  return "overview-profile-name-title";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <article class=\"overview-profile\"><div class=\"overview-profile-header\"><h4>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Profile", {"name":"translate","hash":{},"data":data})))
    + "</h4></div><section class=\"overview-profile-card\"><div class=\"overview-profile-card-content\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCompany") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"overview-profile-name ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isNameTitle") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</p><p class=\"overview-profile-email\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "</p><p class=\"overview-profile-phone\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"phone","hash":{},"data":data}) : helper)))
    + "</p></div><a class=\"overview-profile-card-button-edit\" href=\"/profileinformation\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit", {"name":"translate","hash":{},"data":data})))
    + "</a></section></article> ";
},"useData":true}); template.Name = 'overview_profile'; return template;});