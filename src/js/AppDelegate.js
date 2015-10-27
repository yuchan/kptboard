var React = require('react');
var ReactDOM = require('react-dom');
var headerView = require('./jsx/headerView.jsx');
var jquery = require('jquery');

var AppDelegate = function() {
};

AppDelegate.prototype.init = function() {
    jquery(document).ready(function(){
        ReactDOM.render(React.createElement(headerView, null), document.getElementById('header'));
    });
};

module.exports = AppDelegate;
