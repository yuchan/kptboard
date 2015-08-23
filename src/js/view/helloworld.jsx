var React = require('react');
var Form = require('./partial/form.jsx');
var List = require('./partial/list.jsx');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className="float-table" style={{
        width: ((this.props.itemWidth + (this.props.paddingVal * 2)) * (3 + 1) + this.props.paddingVal * 2) + "px"
      }}>
        <List listtitle="Keep" memos={this.props.keeps}/>
        <List listtitle="Problem" memos={this.props.problems}/>
        <List listtitle="Try" memos={this.props.tries}/>
        <Form formtitle="New Item"/>
      </div>
    );
  }
});

module.exports = HelloWorld;
