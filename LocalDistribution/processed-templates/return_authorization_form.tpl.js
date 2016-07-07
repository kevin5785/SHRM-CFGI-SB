define('return_authorization_form.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/\" class=\"return-authorization-form-button-back\"><i class=\"return-authorization-form-button-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Account", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<b>$(0)</b> products selected", (depth0 != null ? compilerNameLookup(depth0,"activeLinesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<b>$(0)</b> product selected", (depth0 != null ? compilerNameLookup(depth0,"activeLinesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<b>$(0)</b> items in total to return", (depth0 != null ? compilerNameLookup(depth0,"itemsToReturnLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<b>$(0)</b> item in total to return", (depth0 != null ? compilerNameLookup(depth0,"itemsToReturnLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"11":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"return-authorization-form-accordion-divider\"><div class=\"return-authorization-form-accordion-head\"><a class=\"return-authorization-form-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#return-authorization-form-products\" aria-expanded=\"true\" aria-controls=\"return-authorization-form-products\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Products from original order not eligible for return ($(0))", (depth0 != null ? compilerNameLookup(depth0,"invalidLinesLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " <i class=\"return-authorization-form-accordion-toggle-icon\"></i></a></div><div class=\"return-authorization-form-accordion-body collapse\" id=\"return-authorization-form-products\" role=\"tabpanel\" data-target=\"#return-authorization-form-products\"><div data-content=\"items-body\"><table class=\"return-authorization-form-products-list\"><thead class=\"return-authorization-form-table-products-header\"><th class=\"return-authorization-form-table-products-header-image\"></th><th class=\"return-authorization-form-table-products-header-product\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-form-table-products-header-qty\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Qty", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-form-table-products-header-unit-price\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Unit price", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"return-authorization-form-table-products-header-amount\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</th></thead><tbody data-view=\"Invalid.Lines.Collection\"></tbody></table></div></div></div> ";
},"13":function(depth0,helpers,partials,data) {
  return "disabled";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section class=\"return-authorization-form\"><header><h2 class=\"return-authorization-form-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2></header><div data-type=\"alert-placeholder\"></div><form class=\"return-authorization-form-form\"><fieldset class=\"return-authorization-form-items-fieldset\"><p class=\"return-authorization-form-items-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<label class=\"return-authorization-form-items-fieldset-from-label\">From: </label><a href=\"$(0)\">Purchase #$(1)</a>", (depth0 != null ? compilerNameLookup(depth0,"createdFromURL") : depth0), ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </p><input type=\"hidden\" name=\"type\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), depth0))
    + "\"><h5 class=\"return-authorization-form-products-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Select products to return", {"name":"translate","hash":{},"data":data})))
    + "</h5><input type=\"hidden\" name=\"id\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\"><div data-view=\"ListHeader\"></div><div class=\"return-authorization-form-list\"><table class=\"return-authorization-form-returnable-products-table md2sm\"><tbody data-view=\"Returnable.Lines.Collection\"></tbody></table></div><p><small class=\"return-authorization-form-counter-legend\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"activeLinesLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </small></p><p><small class=\"return-authorization-form-counter-legend\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"itemsToReturnLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </small></p></fieldset> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInvalidLines") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <fieldset class=\"return-authorization-form-comment-fieldset\"><label class=\"return-authorization-form-comment-label\" for=\"comment\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add a comment <span class=\"return-authorization-form-comment-label-optional\">(optional)</span>", {"name":"translate","hash":{},"data":data})))
    + "</label><textarea data-action=\"comments\"  class=\"return-authorization-form-comment\" rows=\"4\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comments") || (depth0 != null ? compilerNameLookup(depth0,"comments") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comments","hash":{},"data":data}) : helper)))
    + "</textarea></fieldset><div class=\"form-actions\"><button type=\"submit\" class=\"return-authorization-form-submit-button\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasAtLeastOneActiveLine") : depth0), {"name":"unless","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Submit Request", {"name":"translate","hash":{},"data":data})))
    + "</button></div></form></section> ";
},"useData":true}); template.Name = 'return_authorization_form'; return template;});