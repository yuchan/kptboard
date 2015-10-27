var Backbone = require('backbone');
var Router = require('./router');
var AppDelegate = require('./AppDelegate');
var HomeViewController = require('./homeViewController');
var BoardViewController = require('./boardViewController');
var ErrorViewController = require('./errorViewController');
var SignupViewController = require('./SignupViewController')
var SigninViewController = require('./SigninViewController');

var Parse = require('parse').Parse;
Parse.initialize("ymfYLgl9a1pshKZvJwspG01qf4yb9ZnmEDCGf3Ou", "g7bTJ7V5Fo2yqxwvhNA0rOCMyCHsHGhr6aH6iIxX");

var router = new Router();
var homeVC = new HomeViewController(router);
homeVC.init();
var boardVC = new BoardViewController(router);
boardVC.init();
var errorVC = new ErrorViewController(router);
errorVC.init();
var signupVC = new SignupViewController(router);
signupVC.init();
var signinVC = new SigninViewController(router);
signinVC.init();

Backbone.history.start();

var app = new AppDelegate();
app.init();
