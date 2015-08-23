var React = require('react');
var Form = require('./partial/form.jsx');
var List = require('./partial/list.jsx');
var Memo = require('../model/memo')

var BoardViewModel = React.createClass({
  addItem: function(kind, text){
    var newMemo = new Memo({
      kind: kind,
      text: text
    });
    this.props.memos.add(newMemo);
  },
  deleteItem: function(item){
    item.destroy({success: function(model, response){
      model.collection.remove(model);
    }});
  },
  render: function() {
    return (
      <div className="float-table" style={{
        width: ((this.props.itemWidth + (this.props.paddingVal * 2)) * (3 + 1) + this.props.paddingVal * 2) + "px"
      }}>
        <List listtitle="Keep" memos={this.props.memos.where({
          kind: "0"
        })} deleteItem={this.deleteItem}/>
        <List listtitle="Problem" memos={this.props.memos.where({
          kind: "1"
        })} deleteItem={this.deleteItem}/>
        <List listtitle="Try" memos={this.props.memos.where({
          kind: "2"
        })} deleteItem={this.deleteItem}/>
      <Form formtitle="New Item" memos={this.props.memos} addItem={this.addItem}/>
      </div>
    );
  }
});

module.exports = BoardViewModel;
