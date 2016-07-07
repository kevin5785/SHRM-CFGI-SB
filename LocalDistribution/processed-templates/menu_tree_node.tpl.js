define('menu_tree_node.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return " <div class=\"menu-tree-node\" data-type=\"menu-tree-node-expandable\" data-type=\"menu-tree-node-expandable\" data-id='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"id") : stack1), depth0))
    + "' data-permissions=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"permission") : stack1), depth0))
    + "\" data-permissions-operator=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"permissionOperator") : stack1), depth0))
    + "\"><a class=\"menu-tree-node-item-anchor\" data-target=\"#menu-tree-node-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"id") : stack1), depth0))
    + "\" data-action=\"expander\" data-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"id") : stack1), depth0))
    + "\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + " <i class=\"menu-tree-node-item-icon\"></i></a><div id=\"menu-tree-node-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"id") : stack1), depth0))
    + "\" data-type=\"menu-tree-node-expander\" class=\"menu-tree-node-submenu menu-tree-node-submenu-level-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"level") || (depth0 != null ? compilerNameLookup(depth0,"level") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"level","hash":{},"data":data}) : helper)))
    + " collapse\"><div class=\"menu-tree-node-submenu-wrapper\" data-view=\"MenuItems.Collection\"></div></div></div> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <div class=\"menu-tree-node\" data-type=\"menu-tree-node\" data-permissions=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"permission") : stack1), depth0))
    + "\" data-permissions-operator=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"permissionOperator") : stack1), depth0))
    + "\"><a class=\"menu-tree-node-item-anchor\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1), depth0))
    + "\" target=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"target") : stack1), depth0))
    + "\" data-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"id") : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</a></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"node") : depth0)) != null ? compilerNameLookup(stack1,"showChildren") : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); template.Name = 'menu_tree_node'; return template;});