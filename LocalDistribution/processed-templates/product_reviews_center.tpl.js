define('product_reviews_center.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"product-reviews-center-container\"><div class=\"product-reviews-center-container-header\"><h2 class=\"product-reviews-center-container-header-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Ratings &amp; Reviews", {"name":"translate","hash":{},"data":data})))
    + "</h2><h3 class=\"product-reviews-center-container-header-number\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasOneReview") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </h3><div data-view=\"Global.StarRating\"></div></div><div class=\"product-reviews-center-container-wrapper\"><div data-view=\"Global.RatingByStar\"></div></div><div class=\"product-reviews-center-container-footer\"><a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-footer-button\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Write a Review", {"name":"translate","hash":{},"data":data})))
    + "</a></div></div><section class='product-reviews-center-list'><div data-view=\"ListHeader.View\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"totalRecords") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </section><div class=\"product-reviews-center-footer\"><div data-view=\"GlobalViews.Pagination\"></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "1 review", {"name":"translate","hash":{},"data":data})))
    + " ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) reviews", (depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"6":function(depth0,helpers,partials,data) {
  return " <div data-view=\"ProductReviews.Review\" class=\"product-reviews-center-review-container\"></div> ";
  },"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "There are no reviews available for your selection", {"name":"translate","hash":{},"data":data})))
    + " ";
},"10":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"product-reviews-center-container\"><div class=\"product-reviews-center-container-header\"><h3 class=\"product-reviews-center-container-header-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Ratings &amp; Reviews", {"name":"translate","hash":{},"data":data})))
    + "</h3><h4 class=\"product-reviews-center-container-header-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No reviews available", {"name":"translate","hash":{},"data":data})))
    + "</h4><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Be the first to", {"name":"translate","hash":{},"data":data})))
    + " <a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-button\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Write a Review", {"name":"translate","hash":{},"data":data})))
    + "</a></p></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"product-reviews-center\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'product_reviews_center'; return template;});