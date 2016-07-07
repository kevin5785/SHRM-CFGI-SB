define('case_new.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/\" class=\"case-new-button-back\"><i class=\"case-new-button-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Account", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <option value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + " </option> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section class=\"case-new\"><header class=\"case-new-header\"><h2 class=\"case-new-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2></header><div class=\"case-new-alert-placeholder\" data-type=\"alert-placeholder\"></div><small class=\"case-new-required\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Required", {"name":"translate","hash":{},"data":data})))
    + "<span class=\"case-new-form-required\">*</span></small><form action=\"#\" class=\"case-new-form\" novalidate><div class=\"case-new-form-controls-group\" data-validation=\"control-group\"><label class=\"case-new-form-label\" for=\"title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Subject <small class=\"case-new-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"case-new-form-controls\" data-validation=\"control\"><input data-action=\"text\" type=\"text\" name=\"title\" id=\"title\" class=\"case-new-form-input\" value=\"\" maxlength=\"300\"></input></div></div><div class=\"case-new-form-controls-group\" data-validation=\"control-group\"><label class=\"case-new-form-label\" for=\"category\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Type of inquiry", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"case-new-form-controls\" data-validation=\"control\"><select name=\"category\" id=\"category\" class=\"case-new-form-case-category\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"categories") : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </select></div></div><div class=\"case-new-form-controls-group\" data-validation=\"control-group\"><label  class=\"case-new-form-label\" for=\"message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Message <small class=\"case-new-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"case-new-form-controls\" data-validation=\"control\"><textarea name=\"message\" id=\"message\" class=\"case-new-form-textarea\"></textarea></div></div><div class=\"case-new-form-controls-group\"><label class=\"case-new-form-label\"><input data-action=\"include_email\" type=\"checkbox\" name=\"include_email\" id=\"include_email\" class=\"case-new-form-include-email\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "I want to use another email address for this case", {"name":"translate","hash":{},"data":data})))
    + " </input></label></div><div class=\"collapse\" data-collapse-content data-validation=\"control-group\"><label for=\"email\" class=\"case-new-form-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email <small class=\"case-new-form-required\">*</small>", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"case-new-form-controls\" data-validation=\"control\"><input type=\"email\" autofocus name=\"email\" id=\"email\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "yourname@company.com", {"name":"translate","hash":{},"data":data})))
    + "\" data-case-email class=\"case-new-form-input\" value=\"\" disabled=\"true\" maxlength=\"300\"></input></div></div><div class=\"case-new-form-controls-group\"><button type=\"submit\" class=\"case-new-button-submit\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Submit", {"name":"translate","hash":{},"data":data})))
    + "</button></div></form></section>";
},"useData":true}); template.Name = 'case_new'; return template;});