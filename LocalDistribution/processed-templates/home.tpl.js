define('home.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <li><div class=\"home-slide-main-container\"><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, depth0, (depths[1] != null ? compilerNameLookup(depths[1],"imageHomeSize") : depths[1]), {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\"\" /><div class=\"home-slide-caption\"><h2 class=\"home-slide-caption-title\">SAMPLE HEADLINE</h2><p>Example descriptive text displayed on multiple lines.</p><div class=\"home-slide-caption-button-container\"><a href=\"/search\" class=\"home-slide-caption-button\">Shop Now</a></div></div></div></li> ";
},"3":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return " <div class=\"home-banner-main-cell-nth"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\"><div class=\"home-banner-main-cell-bg\"><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, depth0, (depths[1] != null ? compilerNameLookup(depths[1],"imageHomeSizeBottom") : depths[1]), {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\"\" ><div class=\"home-banner-main-cell-text\">EXAMPLE TEXT</div></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"home\"><div class=\"home-banner-top\"><p class=\"home-banner-top-message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Use promo code <strong>SCADEMO</strong> for <strong>30%</strong> off your purchase", {"name":"translate","hash":{},"data":data})))
    + " </p></div><div class=\"home-slider-container\"><div class=\"home-image-slider\"><ul data-slider class=\"home-image-slider-list\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"carouselImages") : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </ul></div></div><div class=\"home-banner-main\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"bottomBannerImages") : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"home-merchandizing-zone\"><div data-id=\"your-merchandising-zone\" data-type=\"merchandising-zone\"></div></div></div>";
},"useData":true,"useDepths":true}); template.Name = 'home'; return template;});