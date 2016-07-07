define('product_reviews_preview_review.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Global.StarRatingAttribute\" class=\"product-reviews-preview-review-rating-attribute\"></div> ";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " - <i class=\"product-reviews-preview-review-icon-ok-sign\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "verified purchaser", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"product-reviews-preview-review\" itemprop=\"review\" itemscope itemtype=\"http://schema.org/Review\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"product-reviews-preview-review-rating\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReviewRatingPerAttributesLegthGreaterThan0") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-view=\"Global.StarRating\" itemprop=\"reviewRating\" itemscope itemtype=\"http://schema.org/Rating\"></div></div><div class=\"product-reviews-preview-review-content\"><h4 itemprop=\"name\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewTitle") || (depth0 != null ? compilerNameLookup(depth0,"reviewTitle") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewTitle","hash":{},"data":data}) : helper)))
    + " </h4><p class=\"product-reviews-preview-review-content-username\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Will be posted publicly as <span itemprop=\"author\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"reviewAuthor") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReviewVerified") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p><div class=\"product-reviews-preview-review-content-description\"><p itemprop=\"description\"> ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"reviewText") || (depth0 != null ? compilerNameLookup(depth0,"reviewText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p></div></div></div> ";
},"useData":true}); template.Name = 'product_reviews_preview_review'; return template;});