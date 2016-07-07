define('cart_promocode_form.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "error";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"displayMessage") || (depth0 && compilerNameLookup(depth0,"displayMessage")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"errorMessage") : depth0), "error", true, {"name":"displayMessage","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <form class=\"cart-promocode-form\" data-action=\"apply-promocode\"><div class=\"cart-promocode-form-summary-grid\"><div class=\"cart-promocode-form-summary-container-input\"><div class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><input\n				type=\"text\"\n				name=\"promocode\"\n				id=\"promocode\"\n				class=\"cart-promocode-form-summary-input\"\n				value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"code") || (depth0 != null ? compilerNameLookup(depth0,"code") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"code","hash":{},"data":data}) : helper)))
    + "\"\n			></div></div><div class=\"cart-promocode-form-summary-promocode-container-button\"><button type=\"submit\" class=\"cart-promocode-form-summary-button-apply-promocode\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Apply", {"name":"translate","hash":{},"data":data})))
    + " </button></div></div><div data-type=\"promocode-error-placeholder\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></form> ";
},"useData":true}); template.Name = 'cart_promocode_form'; return template;});