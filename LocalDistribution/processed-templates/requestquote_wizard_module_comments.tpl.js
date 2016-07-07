define('requestquote_wizard_module_comments.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"requestquote-wizard-module-comments\"><div class=\"requestquote-wizard-module-comments-box\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReadOnly") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h3 class=\"requestquote-wizard-module-comments-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " </h3> ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"requestquote-wizard-module-comments-box-message\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0), {"name":"breaklines","hash":{},"data":data})))
    + "</p></div> ";
},"6":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p><label>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Do you have any remarks or comments with this quote request?", {"name":"translate","hash":{},"data":data})))
    + "</label><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, " (Optional)", {"name":"translate","hash":{},"data":data})))
    + "</span></p><textarea data-action=\"validate-textarea-length\" maxlength=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxLength") || (depth0 != null ? compilerNameLookup(depth0,"maxLength") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxLength","hash":{},"data":data}) : helper)))
    + "\" data-type=\"memo-input\" class=\"requestquote-wizard-module-comments-box-textarea\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"memo","hash":{},"data":data}) : helper)))
    + "</textarea><small class=\"requestquote-wizard-module-comments-box-textarea-length\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Maximum 999 characters.", {"name":"translate","hash":{},"data":data})))
    + "</small> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hideContent") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'requestquote_wizard_module_comments'; return template;});