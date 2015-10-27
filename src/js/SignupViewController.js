var React = require('react');
var ReactDOM = require('react-dom');
var SignupView = require('./jsx/signupview.jsx');

function SignupViewController(router) {
  this.router = router;
}

SignupViewController.prototype.init = function() {
  var $self = this;
  this.router.on("route:signup", function() {
    $self.renderView();
  });
};

SignupViewController.prototype.renderView = function() {
    ReactDOM.render(React.createElement(SignupView, {}), document.getElementById('container'));
};

//expose interface
module.exports = SignupViewController;
