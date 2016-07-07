define('overview_home.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <table class=\"overview-home-orders-list-table\"><thead class=\"overview-home-content-table\"><tr class=\"overview-home-content-table-header-row\"><th class=\"overview-home-content-table-header-row-title\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchase No.", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"overview-home-content-table-header-row-date\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Date", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"overview-home-content-table-header-row-currency\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</span></th> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <th class=\"overview-home-content-table-header-row-track\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Track Items", {"name":"translate","hash":{},"data":data})))
    + "</span></th></tr></thead><tbody class=\"overview-home-purchases-list\" data-view=\"Order.History.Results\"></tbody></table> ";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <th class=\"overview-home-content-table-header-row-origin\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Origin", {"name":"translate","hash":{},"data":data})))
    + "</span></th> ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <th class=\"overview-home-content-table-header-row-status\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status", {"name":"translate","hash":{},"data":data})))
    + "</span></th> ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"overview-home-orders-empty-section\"><h5>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You don't have any purchases in your account right now.", {"name":"translate","hash":{},"data":data})))
    + "</h5></div> ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"overview-home-header-links\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Need Help? Contact <a href=\"$(0)\">Customer Service</a>", (depth0 != null ? compilerNameLookup(depth0,"customerSupportURL") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <section class=\"overview-home\"><div class=\"overview-home-orders\" data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\"><div class=\"overview-home-orders-title\"><h3>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Recent Purchases", {"name":"translate","hash":{},"data":data})))
    + "</h3><a href=\"/purchases\" class=\"overview-home-orders-title-link\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "View Purchase History", {"name":"translate","hash":{},"data":data})))
    + "</a></div><div class=\"overview-home-order-history-results-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></section><section class=\"overview-home-mysettings\"><h3>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "My Settings", {"name":"translate","hash":{},"data":data})))
    + "</h3><div class=\"overview-home-mysettings-row\"><div class=\"overview-home-mysettings-profile\"><div data-view=\"Overview.Profile\"></div></div><div class=\"overview-home-mysettings-shipping\"><div data-view=\"Overview.Shipping\"></div></div><div class=\"overview-home-mysettings-payment\"><div data-view=\"Overview.Payment\"></div></div></div></section><div data-view=\"Overview.Banner\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasCustomerSupportURL") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'overview_home'; return template;});