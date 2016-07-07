define('global_views_star_rating.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"global-views-star-rating-content-rating\"><span class=\"global-views-star-rating-label-visible\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Rating", {"name":"translate","hash":{},"data":data})))
    + " </span></div> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"global-views-star-rating-content-label\"><span class=\"global-views-star-rating-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " </span></div> ";
},"5":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = " <div class=\"global-views-star-rating-area-writable"
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"className") : depths[1]), depth0))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"buttons") : depth0), {"name":"each","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"6":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <button type=\"button\" data-action=\"rate\" name=\""
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"name") : depths[1]), depth0))
    + "\" value=\""
    + escapeExpression(lambda((data && compilerNameLookup(data,"indexPlusOne")), depth0))
    + "\"></button> ";
},"8":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <i class=\"global-views-star-rating-empty"
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"className") : depths[1]), depth0))
    + "\"></i> ";
},"10":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <i class=\"global-views-star-rating-filled"
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"className") : depths[1]), depth0))
    + "\"></i> ";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"global-views-star-rating-value\" itemprop=\"ratingValue\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + " </span> ";
},"14":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <meta itemprop=\"ratingValue\" content=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\"> ";
},"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <span class=\"global-views-star-rating-review-total\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"ratingCountGreaterThan0") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span> ";
},"17":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"global-views-star-rating-review-total-number\" itemprop=\"reviewCount\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"ratingCount") || (depth0 != null ? compilerNameLookup(depth0,"ratingCount") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ratingCount","hash":{},"data":data}) : helper)))
    + "</span><span class=\"global-views-star-rating-review-total-review\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, " Reviews", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"global-views-star-rating-review-total-empty-number\" itemprop=\"reviewCount\">("
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"ratingCount") || (depth0 != null ? compilerNameLookup(depth0,"ratingCount") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ratingCount","hash":{},"data":data}) : helper)))
    + ")</span><span class=\"global-views-star-rating-review-total-no-review\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, " No Reviews yet", {"name":"translate","hash":{},"data":data})))
    + "</span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"global-views-star-rating\" data-validation=\"control-group\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLabelRating") : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"global-views-star-rating-area\" data-toggle='rater' data-validation=\"control\" data-name=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-max=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxValue") || (depth0 != null ? compilerNameLookup(depth0,"maxValue") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxValue","hash":{},"data":data}) : helper)))
    + "\" data-value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isWritable") : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"global-views-star-rating-area-empty\"><div class=\"global-views-star-rating-area-empty-content\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"buttons") : depth0), {"name":"each","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div><meta itemprop=\"bestRating\" content=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxValue") || (depth0 != null ? compilerNameLookup(depth0,"maxValue") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxValue","hash":{},"data":data}) : helper)))
    + "\"><div class=\"global-views-star-rating-area-fill\" data-toggle='ratting-component-fill' style=\"width: "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"filledBy") || (depth0 != null ? compilerNameLookup(depth0,"filledBy") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filledBy","hash":{},"data":data}) : helper)))
    + "%\"><div class=\"global-views-star-rating-area-filled\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"buttons") : depth0), {"name":"each","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showValue") : depth0), {"name":"if","hash":{},"fn":this.program(12, data, depths),"inverse":this.program(14, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRatingCount") : depth0), {"name":"if","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true,"useDepths":true}); template.Name = 'global_views_star_rating'; return template;});