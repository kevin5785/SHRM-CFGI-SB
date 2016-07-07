define('payment_wizard_edit_amount_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"payment-wizard-edit-amount-layout-form-row\"><span class=\"payment-wizard-edit-amount-layout-form-row-left\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountDueLabel") || (depth0 != null ? compilerNameLookup(depth0,"amountDueLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amountDueLabel","hash":{},"data":data}) : helper)))
    + ":</span><span class=\"payment-wizard-edit-amount-layout-form-row-right\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amountDueFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountDueFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amountDueFormatted","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"payment-wizard-edit-amount-layout-form-row\"><span class=\"payment-wizard-edit-amount-layout-form-row-left\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoices ($(0))", (depth0 != null ? compilerNameLookup(depth0,"selectedInvoicesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"payment-wizard-edit-amount-layout-form-row-right\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"invoiceTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span></div> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"payment-wizard-edit-amount-layout-discount-section ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPayFull") : depth0), {"name":"unless","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><div class=\"payment-wizard-edit-amount-layout-form-row\"><span class=\"payment-wizard-edit-amount-layout-form-row-left\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Applicable discount $(0)", (depth0 != null ? compilerNameLookup(depth0,"discountFormatted") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"payment-wizard-edit-amount-layout-form-row-right\">- "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"discountAmountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"discountAmountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"discountAmountFormatted","hash":{},"data":data}) : helper)))
    + "</span></div><hr /><div class=\"payment-wizard-edit-amount-layout-form-row\"><span class=\"payment-wizard-edit-amount-layout-form-row-left\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your payment:", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"payment-wizard-edit-amount-layout-form-row-right\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueWithDiscountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"dueWithDiscountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dueWithDiscountFormatted","hash":{},"data":data}) : helper)))
    + "</span></div></div><div class=\"payment-wizard-edit-amount-layout-discount-warning ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPayFull") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(!) Discount is only available for full payments.", {"name":"translate","hash":{},"data":data})))
    + "</p></div> ";
},"6":function(depth0,helpers,partials,data) {
  return "hide";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"payment-wizard-edit-amount-layout\"><form id=\"editAmountToPayForm\" class=\"payment-wizard-edit-amount-layout-form\" data-action=\"edit-amount-form\"><div><div class=\"payment-wizard-edit-amount-layout-form-row\"><span class=\"payment-wizard-edit-amount-layout-form-row-left\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"originalAmountLabel") || (depth0 != null ? compilerNameLookup(depth0,"originalAmountLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"originalAmountLabel","hash":{},"data":data}) : helper)))
    + ":</span><span class=\"payment-wizard-edit-amount-layout-form-row-right\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"originalAmountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"originalAmountFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"originalAmountFormatted","hash":{},"data":data}) : helper)))
    + "</span></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAmountDue") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <hr/> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedInvoicesLength") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"payment-wizard-edit-amount-layout-form-row\" data-validation=\"control-group\"><span class=\"payment-wizard-edit-amount-layout-form-row-left-amount\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"inputLabel") || (depth0 != null ? compilerNameLookup(depth0,"inputLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputLabel","hash":{},"data":data}) : helper)))
    + "</span><span class=\"payment-wizard-edit-amount-layout-form-row-right\"><div class=\"payment-wizard-edit-amount-layout-form-row-currency\" data-validation=\"control\"><input name=\"amount\" data-action=\"edit-amount\" autofocus type=\"text\" class=\"payment-wizard-edit-amount-layout-form-row-currency-selector-select\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"inputValue") || (depth0 != null ? compilerNameLookup(depth0,"inputValue") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputValue","hash":{},"data":data}) : helper)))
    + "\" /><span class=\"payment-wizard-edit-amount-layout-form-row-currency-selector-addon\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currencySymbol") || (depth0 != null ? compilerNameLookup(depth0,"currencySymbol") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currencySymbol","hash":{},"data":data}) : helper)))
    + "</span></div></span></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDiscountApplied") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"payment-wizard-edit-amount-layout-form-action\"><input type=\"submit\" value=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Save", {"name":"translate","hash":{},"data":data})))
    + "\" class=\"payment-wizard-edit-amount-layout-form--action-button\" data-action=\"save-amount\" /></div></div></form></div>";
},"useData":true}); template.Name = 'payment_wizard_edit_amount_layout'; return template;});