define('global_views_states.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <label class=\"global-views-states-group-label is-required\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "state\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "State", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"global-views-states-input-required\">*</span></label><div  class=\"global-views-states-group-form-controls\" data-validation=\"control\"><select class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"inputClass") || (depth0 != null ? compilerNameLookup(depth0,"inputClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputClass","hash":{},"data":data}) : helper)))
    + " global-views-states-group-select\" id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "state\" name=\"state\" data-type=\"selectstate\" data-action=\"selectstate\" ><option value=\"\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "-- Select --", {"name":"translate","hash":{},"data":data})))
    + " </option> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"states") : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </select></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <option value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"code") || (depth0 != null ? compilerNameLookup(depth0,"code") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"code","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " > "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " </option> ";
},"3":function(depth0,helpers,partials,data) {
  return " selected ";
  },"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <label class=\"global-views-states-group-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "state\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "State/Province/Region", {"name":"translate","hash":{},"data":data})))
    + " <p class=\"global-views-states-optional-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "(optional)", {"name":"translate","hash":{},"data":data})))
    + "</p></label><div  class=\"global-views-states-group-form-controls\" data-validation=\"control\"><input\n			type=\"text\"\n			id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"manage","hash":{},"data":data}) : helper)))
    + "state\"\n			name=\"state\"\n			class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"inputClass") || (depth0 != null ? compilerNameLookup(depth0,"inputClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputClass","hash":{},"data":data}) : helper)))
    + " global-views-states-group-input\"\n			value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"selectedState") || (depth0 != null ? compilerNameLookup(depth0,"selectedState") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"selectedState","hash":{},"data":data}) : helper)))
    + "\"\n			data-action=\"inputstate\"\n		></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCountryAndStatePresent") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'global_views_states'; return template;});