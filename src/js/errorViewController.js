var React = require('react');
var notfound = require('./jsx/404.jsx');

var ErrorViewController = function(router) {
  this.router = router;
};

ErrorViewController.prototype.init = function() {
  this.router.on("route:notFound", function() {
    React.render(React.createElement(notfound), document.getElementById('container'));
  });
};

module.exports = ErrorViewController;
