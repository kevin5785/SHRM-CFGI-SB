define('cart_summary_gift_certificate_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <p class=\"cart-summary-gift-certificate-cell\"><span class=\"cart-summary-gift-certificate-cell-value\">-"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"giftcertificate") : stack1)) != null ? compilerNameLookup(stack1,"amountapplied_formatted") : stack1), depth0))
    + "</span><span title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"giftcertificate") : stack1)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "\"><span data-type=\"backbone.collection.view.cell\"></span></span></p> ";
},"useData":true}); template.Name = 'cart_summary_gift_certificate_cell'; return template;});