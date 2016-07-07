define('address_edit_fields.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"address-edit-fields-group\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "><label class=\"address-edit-fields-group-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "company\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Company", {"name":"translate","hash":{},"data":data})))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </label><div  class=\"address-edit-fields-group-form-controls\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "><input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "company\" name=\"company\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company","hash":{},"data":data}) : helper)))
    + "\" ></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  return " data-input=\"company\" data-validation=\"control-group\" ";
  },"4":function(depth0,helpers,partials,data) {
  return " <span class=\"address-edit-fields-group-label-required\">*</span> ";
  },"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"address-edit-fields-company-optional-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(optional)", {"name":"translate","hash":{},"data":data})))
    + "</p> ";
},"8":function(depth0,helpers,partials,data) {
  return " data-validation=\"control\" ";
  },"10":function(depth0,helpers,partials,data) {
  return " hide ";
  },"12":function(depth0,helpers,partials,data) {
  return " style=\"display: none;\" ";
  },"14":function(depth0,helpers,partials,data) {
  return " checked ";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"address-edit-fields-group\" data-input=\"defaultbilling\"><label class=\"address-edit-fields-group-input-checkbox\"><input type=\"checkbox\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "defaultbilling\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultbilling\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultBilling") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </label></div><div class=\"address-edit-fields-group\" data-input=\"defaultshipping\"><label class=\"address-edit-fields-group-input-checkbox\"><input type=\"checkbox\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "defaultshipping\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultshipping\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultShipping") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.program(23, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </label></div> ";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Save as my primary billing address", {"name":"translate","hash":{},"data":data})))
    + " ";
},"19":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Make this my default billing address", {"name":"translate","hash":{},"data":data})))
    + " ";
},"21":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Save as my primary shipping address", {"name":"translate","hash":{},"data":data})))
    + " ";
},"23":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Make this my default shipping address", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"address-edit-fields\"><div data-type=\"alert-placeholder\"></div><small class=\"address-edit-fields\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Required", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"address-edit-fields-required\">*</span></small><div class=\"address-edit-fields-group\" data-input=\"fullname\" data-validation=\"control-group\"><label class=\"address-edit-fields-group-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "fullname\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Full Name", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"address-edit-fields-group-label-required\">*</span></label><div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\"><input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "fullname\" name=\"fullname\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"fullName") || (depth0 != null ? compilerNameLookup(depth0,"fullName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fullName","hash":{},"data":data}) : helper)))
    + "\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCompanyField") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"address-edit-fields-group\" data-input=\"addr1\" data-validation=\"control-group\"><label class=\"address-edit-fields-group-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "addr1\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Address", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"address-edit-fields-input-required\">*</span></label><div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\"><input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "addr1\" name=\"addr1\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressLine1") || (depth0 != null ? compilerNameLookup(depth0,"addressLine1") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressLine1","hash":{},"data":data}) : helper)))
    + "\"><p class=\"address-edit-fields-input-help\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Example: 1234 Main Street", {"name":"translate","hash":{},"data":data})))
    + "</p></div></div><div class=\"address-edit-fields-group address-edit-fields-group-big\" data-input=\"addr2\"><label for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "addr2\"><p class=\"address-edit-fields-addr2-optional-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(optional)", {"name":"translate","hash":{},"data":data})))
    + "</p></label><div><input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "addr2\" name=\"addr2\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressLine2") || (depth0 != null ? compilerNameLookup(depth0,"addressLine2") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"addressLine2","hash":{},"data":data}) : helper)))
    + "\"><p class=\"address-edit-fields-input-help\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Example: Apt. 3 or Suite #1516", {"name":"translate","hash":{},"data":data})))
    + "</p></div><div class=\"address-edit-fields-group\" data-input=\"city\" data-validation=\"control-group\"><label class=\"address-edit-fields-group-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "city\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "City", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"address-edit-fields-input-required\">*</span></label><div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\"><input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "city\" name=\"city\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"city") || (depth0 != null ? compilerNameLookup(depth0,"city") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + "\"></div></div><div class=\"address-edit-fields-group ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCountriesField") : depth0), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-view=\"CountriesDropdown\" data-input=\"country\" data-validation=\"control-group\"></div><div class=\"address-edit-fields-group\" data-input=\"state\" data-view=\"StatesView\" data-validation=\"control-group\"></div><div class=\"address-edit-fields-group\" data-input=\"zip\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isZipOptional") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " data-validation=\"control-group\"><label class=\"address-edit-fields-group-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "zip\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Zip Code", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"address-edit-fields-input-required\">*</span></label><div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\"><input type=\"text\" class=\"address-edit-fields-group-input-zip\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "zip\" name=\"zip\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"zip") || (depth0 != null ? compilerNameLookup(depth0,"zip") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zip","hash":{},"data":data}) : helper)))
    + "\" data-type=\"zip\"><p class=\"address-edit-fields-input-help\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Example: 94117", {"name":"translate","hash":{},"data":data})))
    + "</p></div></div><div class=\"address-edit-fields-group\"  data-input=\"phone\" data-validation=\"control-group\"><label class=\"address-edit-fields-group-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "phone\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Phone Number", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"address-edit-fields-input-required\">*</span></label><div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\"><input type=\"tel\" class=\"address-edit-fields-group-input\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "phone\" name=\"phone\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"phone","hash":{},"data":data}) : helper)))
    + "\" data-action=\"inputphone\"><p class=\"address-edit-fields-input-help\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Example: 555-123-1234", {"name":"translate","hash":{},"data":data})))
    + "</p></div></div><div class=\"address-edit-fields-group\" data-input=\"isresidential\"><label class=\"address-edit-fields-group-input-checkbox\"><input type=\"checkbox\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "isresidential\" value=\"T\" data-unchecked-value=\"F\" name=\"isresidential\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAddressResidential") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " > "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "This is a Residential Address", {"name":"translate","hash":{},"data":data})))
    + " <a href=\"#\" rel=\"tooltip\" data-toggle=\"tooltip\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Indicating that this is a residential address will help us determine the best delivery method for your items.", {"name":"translate","hash":{},"data":data})))
    + "\"><i class=\"address-edit-fields-icon-question-sign\"></i></a></label></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDefaultControls") : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>";
},"useData":true}); template.Name = 'address_edit_fields'; return template;});