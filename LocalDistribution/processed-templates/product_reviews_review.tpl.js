define('product_reviews_review.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " - <i class=\"product-reviews-review-icon-ok-sign\" data-toggle=\"tooltip\" data-placement=\"right\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "verified purchaser", {"name":"translate","hash":{},"data":data})))
    + "\"></i> ";
},"3":function(depth0,helpers,partials,data) {
  return " <div class=\"product-reviews-review-rating-per-attribute\"><div data-view=\"Global.StarRatingAttribute\"></div></div> ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"product-reviews-review-comment-footer\"><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Was this review helpful?", {"name":"translate","hash":{},"data":data})))
    + "</p><button class=\"product-reviews-review-comment-footer-button "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"usefulButtonClass") || (depth0 != null ? compilerNameLookup(depth0,"usefulButtonClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"usefulButtonClass","hash":{},"data":data}) : helper)))
    + "\" type=\"button\" data-action=\"vote\" data-type=\"mark-as-useful\" data-review-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"usefulCountGreaterThan0") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </button><button class=\"product-reviews-review-comment-footer-button "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"notUsefulButtonClass") || (depth0 != null ? compilerNameLookup(depth0,"notUsefulButtonClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"notUsefulButtonClass","hash":{},"data":data}) : helper)))
    + "\" type=\"button\" data-action=\"vote\" data-type=\"mark-as-not-useful\" data-review-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"notusefulCountGreater") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </button></div><div data-type=\"alert-placeholder\"></div> ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Yes ($(0))", (depth0 != null ? compilerNameLookup(depth0,"usefulCount") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Yes", {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No ($(0))", (depth0 != null ? compilerNameLookup(depth0,"notUsefulCount") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"product-reviews-review\" itemprop=\"review\" itemscope itemtype=\"http://schema.org/Review\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\"><div class=\"product-reviews-review-comment-item-cell\"><div data-view=\"Global.StarRating\" itemprop=\"reviewRating\" itemscope itemtype=\"http://schema.org/Rating\"></div><span class=\"product-reviews-review-comment-item-cell-date\" itemprop=\"datePublished\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewCreatedOn") || (depth0 != null ? compilerNameLookup(depth0,"reviewCreatedOn") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewCreatedOn","hash":{},"data":data}) : helper)))
    + " </span></div><h4 class=\"product-reviews-review-title\" itemprop=\"name\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"reviewTitle") || (depth0 != null ? compilerNameLookup(depth0,"reviewTitle") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reviewTitle","hash":{},"data":data}) : helper)))
    + " </h4><p class=\"product-reviews-review-comment-username\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "by <span itemprop=\"author\">$(0)</span>", (depth0 != null ? compilerNameLookup(depth0,"reviewAuthor") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReviewVerified") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p><div class=\"product-reviews-review-review\"><p class=\"product-reviews-review-review-description\" itemprop=\"description\"> "
    + escapeExpression(((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"reviewText") : depth0), {"name":"breaklines","hash":{},"data":data})))
    + " </p><div class=\"product-reviews-review-review-rating\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isReviewRatingPerAttributesLegthGreaterThan0") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showActionButtons") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"useData":true}); template.Name = 'product_reviews_review'; return template;});