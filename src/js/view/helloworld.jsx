var React = require('react');
var Form = require('./partial/form.jsx');
var List = require('./partial/list.jsx');

var HelloWorld = React.createClass({
	render: function() {
		return (
			<div className="float-table" style={{width: (224 * (3 + 1) + 24) + "px"}}>
				<List memos={this.props.keeps}/>
				<List memos={this.props.problems}/>
				<List memos={this.props.tries}/>
				<Form />
			</div>
		);
	}
});

module.exports = HelloWorld;
