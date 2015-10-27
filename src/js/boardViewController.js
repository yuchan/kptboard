var React = require('react');
var ReactDOM = require('react-dom');
var Memo = require('./memo');
var BoardViewModel = require('./jsx/boardviewmodel.jsx');

function BoardViewController(router) {
  this.router = router;
}

BoardViewController.prototype.init = function() {
  var $self = this;
  this.router.on("route:board", function() {
    $self.renderView();
  });
};

BoardViewController.prototype.renderView = function() {
    ReactDOM.render(React.createElement(BoardViewModel, {
    itemWidth: 200,
    paddingVal: 16,
  }), document.getElementById('container'));
};

//expose interface
module.exports = BoardViewController;
