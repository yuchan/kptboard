var React = require('react');
var Memo = require('../model/memo');
var Memos = require('../collection/memos');
var helloworld = require('../view/helloworld.jsx');

var BoardViewController = function(router) {
  this.router = router;
};
BoardViewController.prototype.init = function() {
  this.router.on("route:hello", function() {
    var keeps = prepareCollection.call(this);
    var probs = new Memos();
    probs.add(new Memo({
      text: "haaa!"
    }));
    var tries = new Memos();
    tries.add(new Memo({
      text: "Fuuuu!"
    }));
    React.render(React.createElement(helloworld, {
      itemWidth: 200,
      paddingVal: 16,
      keeps: keeps.models,
      problems: probs.models,
      tries: tries.models
    }), document.getElementById('container'));
  });
};

//private functions
function prepareCollection() {
  var memos = new Memos();
  var memo1 = new Memo({
    text: "aha!",
    author: "mike"
  });
  var memo2 = new Memo({
    text: "aha2!",
    author: "mike"
  });
  var memo3 = new Memo({
    text: "aha3!",
    author: "mike"
  });
  memos.add([memo1, memo2, memo3]);
  return memos;
}
module.exports = BoardViewController;
