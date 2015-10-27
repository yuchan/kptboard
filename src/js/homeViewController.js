var React = require('react');
var ReactDOM = require('react-dom');
var home = require('./jsx/home.jsx');

var HomeViewController = function(router) {
  this.router = router;
};
HomeViewController.prototype.init = function() {
  this.router.on("route:home", function() {
      ReactDOM.render(React.createElement(home), document.getElementById('container'));
  });
};

module.exports = HomeViewController;
