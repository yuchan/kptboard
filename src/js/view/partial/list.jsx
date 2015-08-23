var React = require('react');
var ListCell = require('./listcell.jsx');

var List = React.createClass({
	render: function() {
		return (
			<div className="float-table-item">
				<table className="pure-table pure-table-horizontal">
						{this.props.memos.map(function(memo){
							return <ListCell key={memo.cid} data={memo} />
						})}
				</table>
			</div>
		);
	}
});

module.exports = List;
