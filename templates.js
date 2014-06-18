define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};
this["JST"]["module1"] = this["JST"]["module1"] || {};

this["JST"] = this["JST"] || {};
this["JST"]["module2"] = this["JST"]["module2"] || {};

this["JST"]["module1"]["foo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["module2"]["bar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

return this["JST"]["module2"];

});