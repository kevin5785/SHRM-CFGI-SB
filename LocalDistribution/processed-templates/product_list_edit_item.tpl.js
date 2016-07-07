define('product_list_edit_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " <div class=\"product-list-edit-item-rating\" itemprop=\"aggregateRating\" itemscope itemtype=\"http://schema.org/AggregateRating\"><div data-view=\"GlobalViews.StarRating\"></div></div> ";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"product-list-edit-item-quantity-help\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(Minimum of $(0) required)", (depth0 != null ? compilerNameLookup(depth0,"minQuantity") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </small> ";
},"5":function(depth0,helpers,partials,data) {
  return "selected";
  },"7":function(depth0,helpers,partials,data) {
  return "disabled";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <form action=\"\" method=\"POST\"><div class=\"product-list-edit-item-modal-body\"><div class=\"product-list-edit-item-image\"><img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"thumbnailUrl") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"thumbnailUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"thumbnailAlt") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"thumbnailAlt","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"product-list-edit-item-details\"><div class=\"product-list-edit-item-basic\"><h5 class=\"product-list-edit-item-name\"><a class=\"product-list-edit-item-anchor-name\" href=\"#\" data-touchpoint=\"home\" data-hashtag=\"product/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productId") || (depth0 != null ? compilerNameLookup(depth0,"productId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"productId","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productName") || (depth0 != null ? compilerNameLookup(depth0,"productName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"productName","hash":{},"data":data}) : helper)))
    + "</a></h5><div class=\"product-list-edit-item-added\"><small>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Added on", {"name":"translate","hash":{},"data":data})))
    + ": "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemCreatedDate") || (depth0 != null ? compilerNameLookup(depth0,"itemCreatedDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemCreatedDate","hash":{},"data":data}) : helper)))
    + "</small></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"product-list-edit-item-price\"><div data-view=\"ItemViews.Price\"></div></div></div><div class=\"product-list-edit-item-options\"><div data-view=\"ItemDetails.Options\"></div></div><div class=\"product-list-edit-item-quantity\"><label class=\"product-list-edit-item-label\" for=\"product-list-edit-item-quantity\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Desired Quantity", {"name":"translate","hash":{},"data":data})))
    + "</label><button class=\"product-list-edit-item-button-quantity-minus\" data-ui-action=\"minus\">-</button><input class=\"product-list-edit-item-input-quantity\" type=\"number\" min=\"1\" name=\"quantity\" id=\"product-list-edit-item-quantity\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Desired Quantity", {"name":"translate","hash":{},"data":data})))
    + "\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"quantity","hash":{},"data":data}) : helper)))
    + "\"><button class=\"product-list-edit-item-button-quantity-add\" data-ui-action=\"add\">+</button></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMinimumQuantity") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"product-list-edit-item-priority\"><label class=\"product-list-edit-item-label\" for=\"product-list-edit-item-priority\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Priority", {"name":"translate","hash":{},"data":data})))
    + "</label><select class=\"product-list-edit-item-select-priority\" name=\"priority\" id=\"product-list-edit-item-priority\" class=\"product-list-edit-item-priority-input\"><option value=\"1\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriority1") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "High", {"name":"translate","hash":{},"data":data})))
    + "</option><option value=\"2\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriority2") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Medium", {"name":"translate","hash":{},"data":data})))
    + "</option><option value=\"3\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriority3") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Low", {"name":"translate","hash":{},"data":data})))
    + "</option></select></div><div class=\"product-list-edit-item-notes\" data-validation=\"control-group\"><label class=\"product-list-edit-item-label\" for=\"product-list-edit-item-description\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Notes for this item", {"name":"translate","hash":{},"data":data})))
    + " <p class=\"product-list-edit-item-label-optional\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(optional)", {"name":"translate","hash":{},"data":data})))
    + "</p></label><div data-validation=\"control\"><textarea class=\"product-list-edit-item-textarea\" name=\"description\" id=\"product-list-edit-item-description\" placeholder=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add a note or description for your item", {"name":"translate","hash":{},"data":data})))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea></div></div></div></div><div class=\"product-list-edit-item-modal-footer\"><button type=\"submit\" class=\"product-list-edit-item-button-edit\" data-action=\"edit\" ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isSelectionCompleteForEdit") : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Save", {"name":"translate","hash":{},"data":data})))
    + "</button><button type=\"reset\" class=\"product-list-edit-item-button-cancel\" data-dismiss=\"modal\" aria-hidden=\"true\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cancel", {"name":"translate","hash":{},"data":data})))
    + "</button></div></form>";
},"useData":true}); template.Name = 'product_list_edit_item'; return template;});