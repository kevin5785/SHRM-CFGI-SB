define('payment_wizard_invoice_subject.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"payment-wizard-invoice-subject-date-overdue\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dueDate","hash":{},"data":data}) : helper)))
    + " </span><i class=\"payment-wizard-invoice-subject-icon-flag\"></i> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dueDate","hash":{},"data":data}) : helper)))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <br><small class=\"payment-wizard-invoice-subject-text-success\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applied Discount: $(0) - until $(1)", (depth0 != null ? compilerNameLookup(depth0,"discountFormatted") : depth0), (depth0 != null ? compilerNameLookup(depth0,"discDate") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </small> ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <br><small class=\"payment-wizard-invoice-subject-text-success\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Processing Payments", {"name":"translate","hash":{},"data":data})))
    + " </small> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <span class=\"payment-wizard-invoice-subject\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOverdue") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isDiscountAppliedAndIsPayFull") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPaid") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span>";
},"useData":true}); template.Name = 'payment_wizard_invoice_subject'; return template;});