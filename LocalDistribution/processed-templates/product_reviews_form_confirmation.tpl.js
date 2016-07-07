define('product_reviews_form_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup','facets_item_cell_list.tpl'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " - <i class=\"product-reviews-form-confirmation-icon-sign\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "verified purchaser", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"product-reviews-form-confirmation\"><h1>";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"header","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1><div class=\"product-reviews-form-confirmation-divider-desktop\"></div><div class=\"product-reviews-form-confirmation-divider\"></div><div class=\"product-reviews-form-confirmation-message\"> ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"confirmationMessage") || (depth0 != null ? compilerNameLookup(depth0,"confirmationMessage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmationMessage","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " <a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"product-reviews-form-confirmation-button-back\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to ", {"name":"translate","hash":{},"data":data})))
    + " ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"productTitle") || (depth0 != null ? compilerNameLookup(depth0,"productTitle") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"productTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " </a></div><div class=\"product-reviews-form-confirmation-item-cell\"><div data-view=\"Facets.ItemCell\" data-template=\"facets_item_cell_list\"></div></div><div class=\"product-reviews-form-confirmation-content\"><div class=\"product-reviews-form-confirmation-review-rating\"><div data-view=\"Global.StarRatingAttribute\" class=\"product-reviews-form-confirmation-rating-attribute\"></div><div data-view=\"Global.StarRating\" itemprop=\"reviewRating\" itemscope itemtype=\"http://schema.org/Rating\"></div></div><div class=\"product-reviews-form-confirmation-content-review\"><h4 itemprop=\"name\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewTitle") || (depth0 != null ? compilerNameLookup(depth0,"reviewTitle") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewTitle","hash":{},"data":data}) : helper)))
    + " </h4><p class=\"product-reviews-form-confirmation-content-username\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "By <span itemprop=\"author\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"reviewAuthor") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReviewVerified") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p><div class=\"product-reviews-form-confirmation-content-description\"><p itemprop=\"description\"> ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"reviewText") || (depth0 != null ? compilerNameLookup(depth0,"reviewText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p></div></div></div></div>";
},"useData":true}); template.Name = 'product_reviews_form_confirmation'; return template;});