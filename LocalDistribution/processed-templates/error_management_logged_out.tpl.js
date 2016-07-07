define('error_management_logged_out.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <section class=\"error-management-logged-out-modal-content\"><div class=\"error-management-logged-out\"><h4><span class=\"error-management-logged-out-warning-icon\"></span> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"labels") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0))
    + " </h4><p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"labels") : depth0)) != null ? compilerNameLookup(stack1,"explanation") : stack1), depth0))
    + "</p></div><p><a class=\"error-management-logged-out-close-button\" href=\"#login\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"labels") : depth0)) != null ? compilerNameLookup(stack1,"login") : stack1), depth0))
    + "</a></p></section> ";
},"useData":true}); template.Name = 'error_management_logged_out'; return template;});