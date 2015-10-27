var React = require('react');
var ReactDOM = require('react-dom');
var SigninView = require('./jsx/signinview.jsx');
var headerView = require('./jsx/headerView.jsx');

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
    ReactDOM.render(React.createElement(SigninView, {userLogIn: this.userLogIn}), document.getElementById('container'));
};

SigninViewController.prototype.userLogIn = function(user){
    ReactDOM.render(React.createElement(headerView, {userLogOut: this.userLogOut}), document.getElementById('header'));
    window.location = "#/board";
};

//expose interface
module.exports = SigninViewController;
