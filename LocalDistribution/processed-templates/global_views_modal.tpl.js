define('global_views_modal.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h2 class=\"global-views-modal-content-header-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + " </h2> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"modal-dialog global-views-modal "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"modalDialogClass") || (depth0 != null ? compilerNameLookup(depth0,"modalDialogClass") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"modalDialogClass","hash":{},"data":data}) : helper)))
    + "\"><div class=\"global-views-modal-content\"><div id=\"modal-header\" class=\"global-views-modal-content-header\"><button type=\"button\" class=\"global-views-modal-content-header-close\" data-dismiss=\"modal\" aria-hidden=\"true\"> &times; </button> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPageHeader") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div id=\"modal-body\" data-type=\"modal-body\" class=\" global-views-modal-content-body\" data-view=\"Child.View\"></div></div></div>";
},"useData":true}); template.Name = 'global_views_modal'; return template;});