define('merchandising_zone.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"merchandising-zone-description\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"zoneDescription") || (depth0 != null ? compilerNameLookup(depth0,"zoneDescription") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zoneDescription","hash":{},"data":data}) : helper)))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <aside class=\"merchandising-zone\"><h3> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"zoneTitle") : depth0), {"name":"translate","hash":{},"data":data})))
    + "</h3> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isZoneDescription") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"merchandising-zone-container\"><div data-view=\"Zone.Items\"></div></div></aside>";
},"useData":true}); template.Name = 'merchandising_zone'; return template;});