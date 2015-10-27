var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');

var SigninForm = React.createClass({
    logIn: function(e) {
        e.preventDefault();
        var username = ReactDOM.findDOMNode(this.refs.username).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var $self = this;
        Parse.User.logIn(username, password, {
            success: function(user) {
                // Do stuff after successful login.
                ReactDOM.render(React.createElement(headerView, {}), document.getElementById('header'));
                window.location = "#/board";
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
                alert("Error: " + error.code + " " + error.message);
            }
        });
    },
    render: function() {
	    return (
                <form className="pure-form pure-form-aligned" onSubmit={this.logIn}>
                    <fieldset>
                        <div className="pure-control-group">
                            <label htmlFor="name">Username</label>
                            <input id="username" ref="username" type="text" placeholder="Username" />
                        </div>
                        <div className="pure-control-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" ref="password" type="password" placeholder="Password" />
                        </div>
                        <div className="pure-controls">
                            <button type="submit" className="pure-button pure-button-primary">Log in</button>
                        </div>
                    </fieldset>
                </form>
		);
	}
});

var SigninView = React.createClass({
  render: function() {
      return (
          <SigninForm userLogIn={this.props.userLogIn} />
    );
  }
});

module.exports = SigninView;
