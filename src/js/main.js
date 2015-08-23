var React = require('react');
var Backbone = require('backbone');

// Backbone
var Book = require('./models/book');
var Router = require('./router');

// React
var home = require('./views/home.jsx');
var helloworld = require('./views/helloworld.jsx');
var notfound = require('./views/404.jsx');

var router = new Router();
router.on("route:home", function() {
  React.render(React.createElement(home), document.getElementById('container'));
});
router.on("route:notFound", function() {
  React.render(React.createElement(notfound), document.getElementById('container'));
});
router.on("route:hello", function() {
  React.render(React.createElement(helloworld, {
    name: (new Book()).get("title")
  }), document.getElementById('container'));
});

Backbone.history.start();
