define('order_history_cancel.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-cancel-modal\"><h4>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cancel order?", {"name":"translate","hash":{},"data":data})))
    + "</h4><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<strong>Please note:</strong> This will cancel your entire purchase #$(0) for $(1).", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), {"name":"translate","hash":{},"data":data})))
    + "</p><div class=\"order-history-cancel-modal-actions\"><button class=\"order-history-cancel-modal-cancel-button\" data-dismiss=\"modal\" data-action=\"delete\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cancel Purchase", {"name":"translate","hash":{},"data":data})))
    + " </button><button class=\"order-history-cancel-modal-close-button\" data-dismiss=\"modal\" data-action=\"cancel\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Close", {"name":"translate","hash":{},"data":data})))
    + " </button></div></div>";
},"useData":true}); template.Name = 'order_history_cancel'; return template;});