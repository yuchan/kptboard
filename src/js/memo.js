var Parse = require('./Parse');

var Memo = Parse.Object.extend("Retrospective", {
  defaults: {
    kind: 0,
    text: "todo"
  }
});

module.exports = Memo;
