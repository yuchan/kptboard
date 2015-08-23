var React = require('react');
var Memo = require('../model/memo');
var Memos = require('../collection/memos');
var BoardViewModel = require('../view/boardviewmodel.jsx');

function BoardViewController(router) {
  this.router = router;
};

BoardViewController.prototype.init = function() {
  var $self = this;
  this.memos = new Memos();
  this.memos.fetch();

  this.memos.on("add", function(newItem) {
    newItem.save();
    $self.renderView();
  });
  this.memos.on("remove", function(removedItem) {
    $self.renderView();
  });
  this.router.on("route:hello", function() {
    $self.renderView();
  });
};

BoardViewController.prototype.renderView = function() {
  React.render(React.createElement(BoardViewModel, {
    itemWidth: 200,
    paddingVal: 16,
    memos: this.memos
  }), document.getElementById('container'));
}

//expose interface
module.exports = BoardViewController;
