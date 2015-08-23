var React = require('react');
var ListCell = require('./listcell.jsx');

var List = React.createClass({
  deleteItem: function(item){
    this.props.deleteItem(item);
  },
  render: function() {
    var $self = this;
    return (
      <div className="float-table-item">
        <h2>{this.props.listtitle}</h2>
        <table className="pure-table pure-table-horizontal">
          <tbody>
            {this.props.memos.map(function (memo) {
              return <ListCell data={memo} key={memo.cid} deleteItem={$self.deleteItem}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = List;
