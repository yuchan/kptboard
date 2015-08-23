var React = require('react');

var ListCell = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.data.get("text")}</td>
				<td>{this.props.data.get("author")}</td>
			</tr>
    );
  }
});

module.exports = ListCell;
