var Backbone = require('backbone');
var Router = require('./router');
var HomeViewController = require('./homeViewController');
var BoardViewController = require('./boardViewController');
var ErrorViewController = require('./errorViewController');

var router = new Router();
var homeVC = new HomeViewController(router);
homeVC.init();
var boardVC = new BoardViewController(router);
boardVC.init();
var errorVC = new ErrorViewController(router);
errorVC.init();
Backbone.history.start();
