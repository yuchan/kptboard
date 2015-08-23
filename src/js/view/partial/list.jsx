var React = require('react');
var ListCell = require('./listcell.jsx');

var List = React.createClass({
  render: function() {
    return (
      <div className="float-table-item">
        <h2>{this.props.listtitle}</h2>
        <table className="pure-table pure-table-horizontal">
          {this.props.memos.map(function (memo) {
            return <ListCell data={memo} key={memo.cid}/>
          })}
        </table>
      </div>
    );
  }
});

module.exports = List;
