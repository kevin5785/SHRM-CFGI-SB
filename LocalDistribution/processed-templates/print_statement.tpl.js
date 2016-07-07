define('print_statement.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/\" class=\"print-statement-button-back\"><i class=\"print-statement-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Account", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <section class=\"print-statement\"><h2 class=\"print-statement-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2><div class=\"print-statement-alert-placeholder\" data-type=\"alert-placeholder\"></div><form class=\"print-statement-form\"><small class=\"print-statement-form-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Required", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"print-statement-form-label-required\">*</span></small><div class=\"print-statement-form-group\" data-validation=\"control-group\"><label class=\"print-statement-form-group-label\" for=\"statementDate\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Statement date", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"print-statement-form-label-required\">*</span></label><div  class=\"print-statement-form-controls\" data-validation=\"control\"><input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"statementDate\" name=\"statementDate\" class=\"print-statement-form-group-input\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "YYYY-MM-DD", {"name":"translate","hash":{},"data":data})))
    + "\" autocomplete=\"off\" data-todayhighlight=\"true\"/><i class=\"print-statement-form-input-icon\"></i></div></div><div class=\"print-statement-form-group\" data-validation=\"control-group\"><label class=\"print-statement-form-group-label\" for=\"startDate\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Start date", {"name":"translate","hash":{},"data":data})))
    + " <p class=\"print-statement-form-group-label-optional\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(optional)", {"name":"translate","hash":{},"data":data})))
    + "</p></label><div  class=\"print-statement-form-controls\" data-validation=\"control\"><input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"startDate\" name=\"startDate\" class=\"print-statement-form-group-input\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "YYYY-MM-DD", {"name":"translate","hash":{},"data":data})))
    + "\" autocomplete=\"off\" data-todayhighlight=\"true\"/><i class=\"print-statement-form-input-icon\"></i></div></div><div class=\"print-statement-form-group\"><div class=\"print-statement-form-controls\"><label class=\"print-statement-form-checkbox-label\"><input type=\"checkbox\" name=\"inCustomerLocale\"/> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Print in customer's locale", {"name":"translate","hash":{},"data":data})))
    + " </label><label class=\"print-statement-form-checkbox-label\"><input type=\"checkbox\" name=\"openOnly\"/> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Show only Open Transactions", {"name":"translate","hash":{},"data":data})))
    + " </label><label class=\"print-statement-form-checkbox-label\"><input type=\"checkbox\" name=\"consolidatedStatement\"/> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Consolidated Statement", {"name":"translate","hash":{},"data":data})))
    + " </label></div></div><div class=\"print-statement-form-actions\"><button type=\"submit\" class=\"print-statement-form-actions-print\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Download as PDF", {"name":"translate","hash":{},"data":data})))
    + "</button><button type=\"button\" class=\"print-statement-form-actions-email\" data-action=\"email\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email", {"name":"translate","hash":{},"data":data})))
    + "</button></div></form></section>";
},"useData":true}); template.Name = 'print_statement'; return template;});