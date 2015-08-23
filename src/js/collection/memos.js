var Backbone = require("backbone");
Backbone.LocalStorage = require("backbone.localstorage");
var Memo = require("../model/memo");

var Memos = Backbone.Collection.extend({
  model: Memo,
  localStorage: new Backbone.LocalStorage("MemoCollection")
});

module.exports = Memos;
