define('product_reviews_form.tpl', ['Handlebars','Handlebars.CompilerNameLookup','facets_item_cell_list.tpl'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You need to be logged in to write a review, <a href=\"#\" data-touchpoint=\"login\">click here</a> to log in.", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <h1>";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"header","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1><div class=\"product-reviews-form-divider-desktop\"></div><div class=\"product-reviews-form-divider\"></div><div class=\"product-reviews-form-item-cell\"><div data-view=\"Facets.ItemCell\" data-template=\"facets_item_cell_list\"></div></div><div class=\"product-reviews-form-content\"><form id=\"new-product-review\" class=\"product-reviews-form-new\" action=\"POST\"><label class=\"product-reviews-form-content-label-required\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Required", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"product-reviews-form-content-required\">*</span></label> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showStarRatingAttributes") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <p class=\"product-reviews-form-content-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Rating", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"product-reviews-form-content-required\">*</span></p><div data-view=\"Global.StarRating\" data-validation=\"control-group\" name=\"rating\" class=\"product-reviews-form-global-star-rating\"></div><div class=\"product-reviews-form-content-groups\"><div class=\"product-reviews-form-content-group\" data-validation=\"control-group\" data-input=\"writerName\"><label class=\"product-reviews-form-content-group-label\" for=\"writerName\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your Name", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"product-reviews-form-content-required\">*</span></label><div class=\"product-reviews-form-controls\" data-validation=\"control\"><input type=\"text\" id=\"writerName\" class=\"product-reviews-form-content-group-input\" name=\"writerName\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"writer") || (depth0 != null ? compilerNameLookup(depth0,"writer") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"writer","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"\"><p class=\"product-reviews-form-help\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "For privacy reasons, please do not use your full name or email address.", {"name":"translate","hash":{},"data":data})))
    + "</p></div></div><div class=\"product-reviews-form-content-group\" data-validation=\"control-group\" data-input=\"text\"><label class=\"product-reviews-form-content-group-label\" for=\"text\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Write your review", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"product-reviews-form-content-required\">*</span></label><div class=\"product-reviews-form-controls\" data-validation=\"control\"><textarea id=\"text\" class=\"product-reviews-form-content-group-text\" name=\"text\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea></div></div><div class=\"product-reviews-form-content-group\" data-validation=\"control-group\" data-input=\"title\"><label class=\"product-reviews-form-content-group-label\" for=\"title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "A headline for your review", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"product-reviews-form-content-required\">*</span></label><div class=\"product-reviews-form-controls\" data-validation=\"control\"><input type=\"text\" id=\"title\" class=\"product-reviews-form-content-group-input\" name=\"title\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"\"></div></div></div><div class=\"product-reviews-form-actions\"><button type=\"submit\" class=\"product-reviews-form-actions-button-submit\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Submit", {"name":"translate","hash":{},"data":data})))
    + "</button><button type=\"button\" data-action=\"preview\" class=\"product-reviews-form-actions-button-preview\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Preview", {"name":"translate","hash":{},"data":data})))
    + "</button><a class=\"product-reviews-form-actions-button-back\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Product", {"name":"translate","hash":{},"data":data})))
    + "</a></div></form></div> ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"product-reviews-form-content-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "How does this product feel overall?", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"product-reviews-form-content-required\">*</span></p><div class=\"product-reviews-form-content-rating\" data-view=\"Global.StarRatingAttribute\"></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"product-reviews-form\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLoginRequiredAndIsNotLoggedIn") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'product_reviews_form'; return template;});