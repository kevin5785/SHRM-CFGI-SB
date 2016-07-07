define('item_details_image_gallery.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showImageSlider") : depth0), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.program(5, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " <ul class=\"bxslider\" data-slider> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"images") : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul> ";
},"3":function(depth0,helpers,partials,data,depths) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <li data-zoom><img \n							src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"url") : depth0), (depths[1] != null ? compilerNameLookup(depths[1],"imageResizeId") : depths[1]), {"name":"resizeImage","hash":{},"data":data})))
    + "\" \n							alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"altimagetext") || (depth0 != null ? compilerNameLookup(depth0,"altimagetext") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"altimagetext","hash":{},"data":data}) : helper)))
    + "\" \n							itemprop=\"image\" \n							data-loader=\"false\"></li> ";
},"5":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"with").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"firstImage") : depth0), {"name":"with","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"6":function(depth0,helpers,partials,data,depths) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"item-details-image-gallery-detailed-image \" data-zoom><img\n						class=\"center-block\"\n						src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"url") : depth0), (depths[1] != null ? compilerNameLookup(depths[1],"imageResizeId") : depths[1]), {"name":"resizeImage","hash":{},"data":data})))
    + "\" \n						alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"altimagetext") || (depth0 != null ? compilerNameLookup(depth0,"altimagetext") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"altimagetext","hash":{},"data":data}) : helper)))
    + "\" \n						itemprop=\"image\"\n						data-loader=\"false\"></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " <div class=\"item-details-image-gallery\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showImages") : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div data-view=\"SocialSharing.Flyout.Hover\"></div></div> ";
},"useData":true,"useDepths":true}); template.Name = 'item_details_image_gallery'; return template;});