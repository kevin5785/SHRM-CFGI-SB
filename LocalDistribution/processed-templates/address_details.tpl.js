define('address_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " data-manage=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manageOption") || (depth0 != null ? compilerNameLookup(depth0,"manageOption") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manageOption","hash":{},"data":data}) : helper)))
    + "\" ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"address-details-container-multiselect-address-selector\" ><label class=\"address-details-container-multiselect-address-selector-checkbox\"><input type=\"checkbox\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAddressCheck") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"multi-select-address\" /></label></div> ";
},"4":function(depth0,helpers,partials,data) {
  return " 'checked' ";
  },"6":function(depth0,helpers,partials,data) {
  return " address-details-container-multiselect-address ";
  },"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"address-details-container-multiselect-address-company\" name=\"company\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company","hash":{},"data":data}) : helper)))
    + " </p><p class=\"address-details-container-multiselect-address-name\" name=\"fullname\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"fullname") || (depth0 != null ? compilerNameLookup(depth0,"fullname") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fullname","hash":{},"data":data}) : helper)))
    + " </p> ";
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showFullNameOnly") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"address-details-address-name\" name=\"fullname\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"fullname") || (depth0 != null ? compilerNameLookup(depth0,"fullname") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fullname","hash":{},"data":data}) : helper)))
    + " </span> ";
},"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"address-details-container-multiselect-address-details-addr2\" name=\"addr2\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressLine2") || (depth0 != null ? compilerNameLookup(depth0,"addressLine2") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressLine2","hash":{},"data":data}) : helper)))
    + " </p> ";
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"address-details-container-multiselect-address-details-state\" name=\"state\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"state") || (depth0 != null ? compilerNameLookup(depth0,"state") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " </p> ";
},"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isDefaultShippingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isDefaultBillingAddress") : depth0), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"18":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"address-details-default-shipping\"><i class=\"address-details-default-shipping-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Default Shipping Address", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"20":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"address-details-default-billing\"><i class=\"address-details-default-shipping-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Default Billing Address", {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"22":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <button class=\"address-details-select-address\" data-action=\"select\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isASelectMessageSpecified") : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.program(25, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </button> ";
},"23":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"selectMessage") || (depth0 != null ? compilerNameLookup(depth0,"selectMessage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"selectMessage","hash":{},"data":data}) : helper)))
    + " ";
},"25":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Select Address", {"name":"translate","hash":{},"data":data})))
    + " ";
},"27":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <p class=\"address-details-actions\"><a class=\"address-details-edit-address\" href=\"/addressbook/"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"edit-address\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"show-in-modal\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showChangeButton") : depth0), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.program(30, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isInvalidAddressToRemove") : depth0), {"name":"if","hash":{},"fn":this.program(34, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"28":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"#\" class=\"address-details-change-address\" data-action=\"change-address\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Change Address", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"30":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRemoveButton") : depth0), {"name":"if","hash":{},"fn":this.program(31, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"31":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <button class=\"address-details-remove-address\" data-action=\"remove\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isInvalidAddressToRemove") : depth0), {"name":"if","hash":{},"fn":this.program(32, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remove", {"name":"translate","hash":{},"data":data})))
    + " </button> ";
},"32":function(depth0,helpers,partials,data) {
  return "disabled";
  },"34":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"address-details-invalid-remove-msg\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You cannot remove this address because it was already assigned to a shipment", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"36":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div data-type=\"address-details-error-container\"><div class=\"address-details-error-message\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invalid address, please provide the following:", {"name":"translate","hash":{},"data":data})))
    + "</div> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"invalidAttributes") : depth0), {"name":"each","hash":{},"fn":this.program(37, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"37":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <div class=\"address-details-error-message\"> - "
    + escapeExpression(lambda(depth0, depth0))
    + " </div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"address-details\"><div class=\"address-details-container\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isManageOptionsSpecified") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "><address> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMultiSelect") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"address-details-info";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMultiSelect") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><p class=\"address-details-container-multiselect-address-title\" name=\"company\"><b>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</b></p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCompanyAndFullName") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"address-details-container-multiselect-address-details-addr1\" name=\"addr1\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressLine1") || (depth0 != null ? compilerNameLookup(depth0,"addressLine1") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressLine1","hash":{},"data":data}) : helper)))
    + " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showAddressLine1") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <span class=\"address-details-container-multiselect-address-line\"><p class=\"address-details-container-multiselect-address-details-city\" name=\"city\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"city") || (depth0 != null ? compilerNameLookup(depth0,"city") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showState") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <p class=\"address-details-container-multiselect-address-zip\" name=\"zip\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"zip") || (depth0 != null ? compilerNameLookup(depth0,"zip") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zip","hash":{},"data":data}) : helper)))
    + " </p></span><p class=\"address-details-country\" name=\"country\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"country") || (depth0 != null ? compilerNameLookup(depth0,"country") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"country","hash":{},"data":data}) : helper)))
    + " </p><p class=\"address-details-phone\" name=\"phone\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"phone","hash":{},"data":data}) : helper)))
    + " </p></div></address> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDefaultLabels") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectionButton") : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showActionButtons") : depth0), {"name":"if","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showError") : depth0), {"name":"if","hash":{},"fn":this.program(36, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"useData":true}); template.Name = 'address_details'; return template;});