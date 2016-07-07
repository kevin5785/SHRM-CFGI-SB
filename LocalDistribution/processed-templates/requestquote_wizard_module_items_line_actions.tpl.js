define('requestquote_wizard_module_items_line_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"requestquote-wizard-module-items-line-actions\"><a class=\"requestquote-wizard-module-items-line-actions-button-remove\" data-action=\"remove\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remove", {"name":"translate","hash":{},"data":data})))
    + " </a></div>";
},"useData":true}); template.Name = 'requestquote_wizard_module_items_line_actions'; return template;});