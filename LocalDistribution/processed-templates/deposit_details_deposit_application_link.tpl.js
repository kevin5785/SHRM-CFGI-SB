define('deposit_details_deposit_application_link.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/transactionhistory/depositapplication/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"depositApplicationId") || (depth0 != null ? compilerNameLookup(depth0,"depositApplicationId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"depositApplicationId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"go-to-deposit-application\" class=\"deposit-details-deposit-application-link-deposit-application-date\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"depositApplicationDate") || (depth0 != null ? compilerNameLookup(depth0,"depositApplicationDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"depositApplicationDate","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true}); template.Name = 'deposit_details_deposit_application_link'; return template;});