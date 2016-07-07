define('order_history_return_authorization.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"order-history-return-authorization-id\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-history-return-authorization-number-label\">Return: </span><a class=\"order-history-return-authorization-status-id-link\" href=\"returns/$(2)/$(1)\">#$(0)</a>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <div class=\"order-history-return-authorization\"><div class=\"order-history-return-authorization-header\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLink") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <p class=\"order-history-return-authorization-status\"><span class=\"order-history-return-authorization-status-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Status:", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"order-history-return-authorization-status-value\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span></p></div><table class=\"order-history-return-authorization-table lg2sm-first\"><thead class=\"order-history-return-authorization-table-head\"><th class=\"order-history-return-authorization-table-header\"></th><th class=\"order-history-return-authorization-table-header\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Item", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"order-history-return-authorization-table-header-quantity\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Qty", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"order-history-return-authorization-table-header-unit-price\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unit price", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"order-history-return-authorization-table-header-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Items.Collection\"></tbody></table></div> ";
},"useData":true}); template.Name = 'order_history_return_authorization'; return template;});