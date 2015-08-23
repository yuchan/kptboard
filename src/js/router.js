var Backbone = require("backbone");
var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "hello": "hello",
    '*notFound': 'notFound'
  }
})

module.exports = Router;
