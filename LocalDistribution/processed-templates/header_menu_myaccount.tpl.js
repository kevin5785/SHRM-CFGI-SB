define('header_menu_myaccount.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <li> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasNoItem") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </li> ";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes/new\" name=\"requestaquotes\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Request a Quote", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasItemInBasket") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotebasket\" name=\"quotebasket\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quote basket <span>(300)</span>", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li class=\"header-menu-myaccount-item-level2\"><a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#wishlist\" name=\"wishlist\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Wishlist", {"name":"translate","hash":{},"data":data})))
    + " </a><ul class=\"header-menu-myaccount-level3\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"productListsReady") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul></li> ";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isSingleList") : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"productLists") : depth0), {"name":"each","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li><a href=\"#\" class=\"header-menu-myaccount-anchor-level3\" data-touchpoint=\"customercenter\" data-hashtag=\"#wishlist\" name=\"allmylists\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "All my lists", {"name":"translate","hash":{},"data":data})))
    + " </a></li> ";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <li><a href=\"#\" class=\"header-menu-myaccount-anchor-level3\" data-touchpoint=\"customercenter\" data-hashtag=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"items") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), depth0))
    + ") </a></li> ";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li><a href=\"#\" class=\"header-menu-myaccount-anchor-level3\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Loading...", {"name":"translate","hash":{},"data":data})))
    + " </a></li> ";
},"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li class=\"header-menu-myaccount-item-level2\" data-permissions=\"lists.listCase.2\"><a  class=\"header-menu-myaccount-anchor-level2\" tabindex=\"-1\" href=\"#\" data-action=\"push-menu\" name=\"cases\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Cases", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#cases\" name=\"allmycases\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Support Cases", {"name":"translate","hash":{},"data":data})))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#newcase\" name=\"submitnewcase\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Submit New Case", {"name":"translate","hash":{},"data":data})))
    + "</a></li></ul></li> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <a class=\"header-menu-myaccount-anchor\" href=\"#\" data-action=\"push-menu\" name=\"myaccount\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "My Account", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li class=\"header-menu-myaccount-overview\"><a class=\"header-menu-myaccount-overview-anchor\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#overview\" name=\"accountoverview\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Account Overview", {"name":"translate","hash":{},"data":data})))
    + " </a><a class=\"header-menu-myaccount-signout-link\" href=\"#\" data-touchpoint=\"logout\" name=\"signout\"><i class=\"header-menu-myaccount-signout-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sign Out", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li class=\"header-menu-myaccount-item-level2 header-menu-myaccount-level2-orders\" data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\" data-permissions-operator=\"OR\"><a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-action=\"push-menu\" name=\"orders\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchases", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3 header-menu-myaccount-level3-orders\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\"><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#purchases\" name=\"orderhistory\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Purchases History", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#returns\" data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"returnsPermissions") || (depth0 != null ? compilerNameLookup(depth0,"returnsPermissions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"returnsPermissions","hash":{},"data":data}) : helper)))
    + "\" name=\"returns\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Returns", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li data-permissions=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\"><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#reorderItems\" name=\"reorderitems\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Reorder Items", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li class=\"header-menu-myaccount-item-level3\" data-permissions=\"transactions.tranFind.1,transactions.tranEstimate.1\"><a class=\"header-menu-myaccount-anchor-level3\" data-action=\"push-menu\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes\" name=\"quotes\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quotes", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level4\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level4\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes\" name=\"allmyquotes\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "All my Quotes", {"name":"translate","hash":{},"data":data})))
    + " </a></li> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasProductList") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </ul></li></ul></li> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isProductListsEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <li class=\"header-menu-myaccount-item-level2\"><a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-action=\"push-menu\" name=\"billing\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Billing", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#balance\" name=\"accountbalance\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Account Balance", {"name":"translate","hash":{},"data":data})))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#invoices\" data-permissions=\"transactions.tranCustInvc.1\" name=\"invoices\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Invoices", {"name":"translate","hash":{},"data":data})))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#transactionhistory\" data-permissions=\"transactions.tranCustInvc.1, transactions.tranCustCred.1, transactions.tranCustPymt.1, transactions.tranCustDep.1, transactions.tranDepAppl.1\" data-permissions-operator=\"OR\" name=\"transactionhistory\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Transaction History", {"name":"translate","hash":{},"data":data})))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#printstatement\" data-permissions=\"transactions.tranStatement.2\" name=\"printastatement\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Print a Statement", {"name":"translate","hash":{},"data":data})))
    + "</a></li></ul></li><li class=\"header-menu-myaccount-item-level2\"><a class=\"header-menu-myaccount-anchor-level2\" tabindex=\"-1\" href=\"#\" data-action=\"push-menu\" name=\"settings\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Settings", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#profileinformation\" name=\"profileinformation\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Profile Information", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#emailpreferences\" name=\"emailpreferences\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Email Preferences", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#addressbook\" name=\"addressbook\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Address Book", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#creditcards\" name=\"creditcards\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Credit Cards", {"name":"translate","hash":{},"data":data})))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#updateyourpassword\" name=\"updateyourpassword\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Update Your Password", {"name":"translate","hash":{},"data":data})))
    + " </a></li></ul></li> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCaseModuleEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul>";
},"useData":true}); template.Name = 'header_menu_myaccount'; return template;});