var Backbone = require("backbone");

var Book = Backbone.Model.extend({
  defaults: {
    title: "Book"
  }
});

module.exports = Book;
