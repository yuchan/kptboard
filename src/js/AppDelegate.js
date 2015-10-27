var React = require('react');
var ReactDOM = require('react-dom');
var headerView = require('./jsx/headerView.jsx');
var jquery = require('jquery');
var parse = require('parse');

var AppDelegate = function() {
};

AppDelegate.prototype.init = function() {
    var $self = this;
    jquery(document).ready(function(){
        ReactDOM.render(React.createElement(headerView, {userLogOut: $self.userLogOut}), document.getElementById('header'));
    });
};

AppDelegate.prototype.userLogOut = function() {
    parse.User.logOut();
    ReactDOM.render(React.createElement(headerView, {userLogOut: this.userLogOut}), document.getElementById('header'));
    window.location = "/#";
}

module.exports = AppDelegate;
