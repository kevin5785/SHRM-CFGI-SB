define('payment_wizard_showinvoices_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "in";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <tr data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"payment-wizard-showinvoices-module-invoice\"><td><span class=\"payment-wizard-showinvoices-module-value-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " </span><span class=\"payment-wizard-showinvoices-module-amount\"><span class=\"payment-wizard-showinvoices-module-mobile-header-amount\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"payment-wizard-showinvoices-module-value-amount\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amountFormatted","hash":{},"data":data}) : helper)))
    + " </span></span></td></tr> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"payment-wizard-showinvoices-module\"><div class=\"payment-wizard-showinvoices-module-expander-head\"><a class=\"payment-wizard-showinvoices-module-expander-head-toggle\" data-toggle=\"collapse\" data-target=\"#payment-wizard-showinvoices-module-body\" aria-expanded=\"false\" aria-controls=\"payment-wizard-showinvoices-module-body\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoices (<span class=\"payment-wizard-showinvoices-module-invoices-count\">$(0)</span>)", (depth0 != null ? compilerNameLookup(depth0,"invoicesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <i class=\"payment-wizard-showinvoices-module-expander-head-toggle-icon\"></i></a></div><div class=\"payment-wizard-showinvoices-module-expander-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"payment-wizard-showinvoices-module-body\"><div class=\"payment-wizard-showinvoices-module-expander-body-wrapper\"><table class=\"payment-wizard-showinvoices-module-records\"><thead class=\"payment-wizard-showinvoices-module-records-head\"><tr><th class=\"payment-wizard-showinvoices-module-header-number\"><span class=\"payment-wizard-showinvoices-module-header-number-value\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Number", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"payment-wizard-showinvoices-module-header-amount\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + " </th></tr></thead><tbody> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"invoices") : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <tr class=\"payment-wizard-showinvoices-module-subtotal\"><td><span class=\"payment-wizard-showinvoices-module-subtotal-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoices Subtotal: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"payment-wizard-showinvoices-module-value-subtotal\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"invoicesTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoicesTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"invoicesTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr></tbody></table></div></div></div>";
},"useData":true}); template.Name = 'payment_wizard_showinvoices_module'; return template;});