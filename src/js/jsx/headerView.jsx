var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');

var headerView = React.createClass({
    userLogOut: function(e) {
        e.preventDefault();
        Parse.User.logOut();
        ReactDOM.render(React.createElement(headerView, {}), document.getElementById('header'));
        window.location = "/#";
    },
    renderComponent: function(elmLoginLink) {
        return (
            <div className="pure-menu pure-menu-horizontal">
                <a href="#" className="pure-menu-heading pure-menu-link">KPTBoard</a>
                <ul className="pure-menu-list">
                    {elmLoginLink}
                </ul>
            </div>
        );
    },
    renderLogIn: function() {
        return this.renderComponent(
            [<li className="pure-menu-item"><a href="#/signup" className="pure-menu-link">signup</a></li>,
             <li className="pure-menu-item"><a href="#/login" className="pure-menu-link">login</a></li>]
        );
    },
    renderLogOut: function() {
        return this.renderComponent([<li className="pure-menu-item"><a href="#/board" className="pure-menu-link">board</a></li>,
                                     <li className="pure-menu-item"><a href="#/logout" className="pure-menu-link" onClick={this.userLogOut}>logout</a></li>]);        
    },
    render: function() {
        var currentUser = Parse.User.current();
        if (currentUser) {
            return this.renderLogOut();
        } else {
            return this.renderLogIn();
        }
    }
});

module.exports = headerView;
