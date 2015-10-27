var React = require('react');
var ReactDOM = require('react-dom');
var notfound = require('./jsx/404.jsx');

var ErrorViewController = function(router) {
  this.router = router;
};

ErrorViewController.prototype.init = function() {
  this.router.on("route:notFound", function() {
    ReactDOM.render(React.createElement(notfound), document.getElementById('container'));
  });
};

module.exports = ErrorViewController;
