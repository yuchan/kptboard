var React = require('react');
var ReactDOM = require('react-dom');
var SigninView = require('./jsx/signinview.jsx');

function SigninViewController(router) {
  this.router = router;
}

SigninViewController.prototype.init = function() {
  var $self = this;
  this.router.on("route:login", function() {
    $self.renderView();
  });
};

SigninViewController.prototype.renderView = function() {
    ReactDOM.render(React.createElement(SigninView, {}), document.getElementById('container'));
};

//expose interface
module.exports = SigninViewController;
