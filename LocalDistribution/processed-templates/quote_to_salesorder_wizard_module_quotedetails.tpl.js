define('quote_to_salesorder_wizard_module_quotedetails.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p class=\"quote-to-salesorder-wizard-module-quotedetails\"><span class=\"quote-to-salesorder-wizard-module-quotedetails-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "From Quote #: ", {"name":"translate","hash":{},"data":data})))
    + "</span><a href=\"/quotes/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quoteId") || (depth0 != null ? compilerNameLookup(depth0,"quoteId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"quoteId","hash":{},"data":data}) : helper)))
    + "\" class=\"quote-to-salesorder-wizard-module-quotedetails-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quoteTranId") || (depth0 != null ? compilerNameLookup(depth0,"quoteTranId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"quoteTranId","hash":{},"data":data}) : helper)))
    + "</a></p>";
},"useData":true}); template.Name = 'quote_to_salesorder_wizard_module_quotedetails'; return template;});