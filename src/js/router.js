var Backbone = require("backbone");
var Router = Backbone.Router.extend({
    routes: {
        "": "home",
        "board": "board",
        "signup": "signup",
        'login': 'login',
        '*notFound': 'notFound'
  }
});

module.exports = Router;
