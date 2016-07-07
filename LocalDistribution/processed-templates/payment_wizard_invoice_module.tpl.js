define('payment_wizard_invoice_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"payment-wizard-invoice-module-list-subheader\"><table class=\"payment-wizard-invoice-module-table\"><thead class=\"payment-wizard-invoice-module-table-header\"><tr><th class=\"payment-wizard-invoice-module-table-select-col\"> &nbsp; </th><th class=\"payment-wizard-invoice-module-table-invoice-number\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoice No.", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"payment-wizard-invoice-module-table-invoice-due-date\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Due date", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"payment-wizard-invoice-module-table-invoice-amount\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"payment-wizard-invoice-module-table-invoice-action\"> &nbsp; </th></tr></thead><tbody class=\"payment-wizard-invoice-module-table-body\" data-view=\"Invoices.Collection\"></tbody></table></div> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"payment-wizard-invoice-module-list-empty\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You don't have any Open Invoices at the moment,</br>see <a href=\"/paid-invoices\">Invoices Paid In Full</a>", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div data-view=\"ListHeader.View\"></div><div class=\"payment-wizard-invoice-module-payment-list\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isInvoiceLengthGreaterThan0") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'payment_wizard_invoice_module'; return template;});