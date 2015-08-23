var Backbone = require("backbone");

var Memo = Backbone.Model.extend({
    defaults: {
	text: "todo"
    }
});

module.exports = Memo;
