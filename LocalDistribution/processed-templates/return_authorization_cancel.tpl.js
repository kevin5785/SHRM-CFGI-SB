define('return_authorization_cancel.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"return-authorization-cancel-modal\"><h4>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Are you sure you want to cancel this return request?", {"name":"translate","hash":{},"data":data})))
    + "</h4><p>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "The status of the request will change to \"Cancelled\" but it won't be removed.", {"name":"translate","hash":{},"data":data})))
    + "</p><div class=\"return-authorization-cancel-modal-actions\"><button class=\"return-authorization-cancel-modal-cancel-button\" data-action=\"delete\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cancel Return", {"name":"translate","hash":{},"data":data})))
    + " </button><button class=\"return-authorization-cancel-modal-close-button\" data-dismiss=\"modal\" data-action=\"cancel\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Close", {"name":"translate","hash":{},"data":data})))
    + " </button></div></div>";
},"useData":true}); template.Name = 'return_authorization_cancel'; return template;});