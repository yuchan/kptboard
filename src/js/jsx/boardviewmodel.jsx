var React = require('react');
var Form = require('./form.jsx');
var List = require('./list.jsx');

var BoardViewModel = React.createClass({
  render: function() {
    return (
      <div className="float-table" style={{
        width: ((this.props.itemWidth + (this.props.paddingVal * 2)) * (3 + 1) + this.props.paddingVal * 2) + "px"
      }}>
        <List kind={0} listtitle="Keep"/>
        <List kind={1} listtitle="Problem"/>
        <List kind={2} listtitle="Try"/>
        <Form formtitle="New Item"/>
      </div>
    );
  }
});

module.exports = BoardViewModel;
