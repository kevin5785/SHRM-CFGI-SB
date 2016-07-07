define('order_wizard_paymentmethod_giftcertificates_module_record.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <tr class=\"order-wizard-paymentmethod-giftcertificates-module-record-row\" data-gc-code=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "\"><td class=\"order-wizard-paymentmethod-giftcertificates-module-record-gift-certificates\"><span class=\"order-wizard-paymentmethod-giftcertificates-module-record-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Gift Certificate: ", {"name":"translate","hash":{},"data":data})))
    + "</span><div data-view=\"GiftCertificates\" class=\"order-wizard-paymentmethod-giftcertificates-module-record-value\"></div></td><td class=\"order-wizard-paymentmethod-giftcertificates-module-record-amount-applied\"><span class=\"order-wizard-paymentmethod-giftcertificates-module-record-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount applied: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"amountapplied_formatted") : stack1), depth0))
    + "</span></td><td class=\"order-wizard-paymentmethod-giftcertificates-module-record-remaining-balance\"><span class=\"order-wizard-paymentmethod-giftcertificates-module-record-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remaining balance: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"amountremaining_formatted") : stack1), depth0))
    + "</span></td><td class=\"order-wizard-paymentmethod-giftcertificates-module-record-actions\"><a class=\"order-wizard-paymentmethod-giftcertificates-module-record-actions-button\" href=\"#\" data-action=\"remove\" data-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remove", {"name":"translate","hash":{},"data":data})))
    + " </a></td></tr>";
},"useData":true}); template.Name = 'order_wizard_paymentmethod_giftcertificates_module_record'; return template;});