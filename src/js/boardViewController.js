var React = require('react');
var Memo = require('./memo');
var BoardViewModel = require('./jsx/boardviewmodel.jsx');

function BoardViewController(router) {
  this.router = router;
}

BoardViewController.prototype.init = function() {
  var $self = this;
  this.router.on("route:hello", function() {
    $self.renderView();
  });
};

BoardViewController.prototype.renderView = function() {
  React.render(React.createElement(BoardViewModel, {
    itemWidth: 200,
    paddingVal: 16,
  }), document.getElementById('container'));
};

//expose interface
module.exports = BoardViewController;
