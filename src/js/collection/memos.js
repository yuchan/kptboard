var Backbone = require("backbone");
var Memo = require("../model/memo");

var Memos = Backbone.Collection.extend({
  model: Memo
});

module.exports = Memos;
