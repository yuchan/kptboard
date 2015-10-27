var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');

var SignupForm = React.createClass({
    addUser: function(e) {
        e.preventDefault();
        var username = ReactDOM.findDOMNode(this.refs.username).value;
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var user = new Parse.User();
        console.log(username);
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
        user.signUp(null, {
            success: function(user) {
                // Hooray! Let them use the app now.
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
    },
    render: function() {
	    return (
                <form className="pure-form pure-form-aligned" onSubmit={this.addUser}>
                    <fieldset>
                        <div className="pure-control-group">
                            <label htmlFor="name">Username</label>
                            <input id="username" ref="username" type="text" placeholder="Username" />
                        </div>
                        <div className="pure-control-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" ref="password" type="password" placeholder="Password" />
                        </div>
                        <div className="pure-control-group">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" ref="email" type="email" placeholder="Email Address" />
                        </div>

                        <div className="pure-controls">
                            <button type="submit" className="pure-button pure-button-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
		);
	}
});

var SignupView = React.createClass({
  render: function() {
      return (
          <SignupForm />
    );
  }
});

module.exports = SignupView;
