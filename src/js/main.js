var React = require('react');
var Backbone = require('backbone');

// Backbone
var Memo = require('./model/memo');
var Memos = require('./collection/memos');
var Router = require('./router');

// React
var home = require('./view/home.jsx');
var helloworld = require('./view/helloworld.jsx');
var notfound = require('./view/404.jsx');

var router = new Router();
router.on("route:home", function() {
  React.render(React.createElement(home), document.getElementById('container'));
});

router.on("route:notFound", function() {
  React.render(React.createElement(notfound), document.getElementById('container'));
});

function prepareCollection() {
  var memos = new Memos();
  var memo1 = new Memo({text: "aha!", author: "mike"});
  var memo2 = new Memo({text: "aha2!", author: "mike"});
  var memo3 = new Memo({text: "aha3!", author: "mike"});
  memos.add([memo1, memo2, memo3]);
  return memos;
}

router.on("route:hello", function() {
  var keeps = prepareCollection();
  var probs = new Memos();
  probs.add(new Memo({text: "haaa!"}));
  var tries = new Memos();
  tries.add(new Memo({text: "Fuuuu!"}));
  React.render(React.createElement(helloworld, {
    keeps: keeps.models,
    problems: probs.models,
    tries: tries.models
  }), document.getElementById('container'));
});

Backbone.history.start();
