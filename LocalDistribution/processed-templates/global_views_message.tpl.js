define('global_views_message.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <ul> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"messages") : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <ul> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = " <li>";
  stack1 = lambda(depth0, depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"6":function(depth0,helpers,partials,data) {
  return " <button class=\"global-views-message-button\" data-action=\"close-message\" type=\"button\" data-dismiss=\"alert\">&times;</button> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"global-views-message "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + " alert\" role=\"alert\"><div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMultipleMessage") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"closable") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'global_views_message'; return template;});