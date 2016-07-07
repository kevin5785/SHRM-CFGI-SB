define('product_list_display_full.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "active";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <td class=\"product-list-display-full-select\"><input type=\"checkbox\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"select\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "></td> ";
},"4":function(depth0,helpers,partials,data) {
  return "checked";
  },"6":function(depth0,helpers,partials,data) {
  return " <p class=\"product-list-display-full-rating\" itemprop=\"aggregateRating\" itemscope itemtype=\"http://schema.org/AggregateRating\"><span data-view=\"GlobalViews.StarRating\"></span></p> ";
  },"8":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <p class=\"product-list-display-full-date\"><span class=\"product-list-display-full-date-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Added on: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"product-list-display-full-date-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemCreatedDate") || (depth0 != null ? compilerNameLookup(depth0,"itemCreatedDate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemCreatedDate","hash":{},"data":data}) : helper)))
    + "</span></p> ";
},"10":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <span class=\"product-list-display-full-notes-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Notes: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"product-list-display-full-notes-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</span> ";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"product-list-display-full-edit\" data-action=\"edit-item\" data-toggle=\"show-in-modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit", {"name":"translate","hash":{},"data":data})))
    + "</button> ";
},"14":function(depth0,helpers,partials,data) {
  return " <div class=\"product-list-display-full-move\" data-type=\"productlist-control-move\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <tr class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemDetailsId") || (depth0 != null ? compilerNameLookup(depth0,"itemDetailsId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemDetailsId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"product-list-item\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCheckbox") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <td class=\"product-list-display-full-thumnail\"><img src=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"thumbnailResized") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailResized") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"thumbnailResized","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"thumbnailAlt") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"thumbnailAlt","hash":{},"data":data}) : helper)))
    + "\"></td><td class=\"product-list-display-full-details\"><p class=\"product-list-display-full-name\"><a class=\"product-list-display-full-name-anchor\" "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper)))
    + "> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productName") || (depth0 != null ? compilerNameLookup(depth0,"productName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"productName","hash":{},"data":data}) : helper)))
    + "</a></p><p class=\"product-list-display-full-price\"><div data-view=\"ItemViews.Price\"></div></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-view=\"Item.SelectedOptions\"></div><p class=\"product-list-display-full-stock\"><div data-view=\"ItemViews.Stock\"></div></p><div data-view=\"ProductList.DetailsMinQuantity\"></div></td><td class=\"product-list-display-full-extras\"><p class=\"product-list-display-full-quantity\"><span class=\"product-list-display-full-quantity-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Desired Quantity: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"product-list-display-full-quantity-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"quantity","hash":{},"data":data}) : helper)))
    + "</span></p><p class=\"product-list-display-full-priority\"><span class=\"product-list-display-full-priority-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Priority: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"product-list-display-full-priority-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"priorityName") || (depth0 != null ? compilerNameLookup(depth0,"priorityName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"priorityName","hash":{},"data":data}) : helper)))
    + "</span></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAddedOn") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"product-list-display-full-notes\" data-type=\"item-details-notes\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasDescription") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p></td><td class=\"product-list-display-full-actions\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showEdit") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMoveAction") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </td></tr>";
},"useData":true}); template.Name = 'product_list_display_full'; return template;});