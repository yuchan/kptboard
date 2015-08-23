var React = require('react');

var ListCell = React.createClass({
  deleteItem: function() {
    this.props.deleteItem(this.props.data)
  },
  render: function() {
    return (
      <tr>
        <td style={{
          width: "180px"
        }}>{this.props.data.get("text")}</td>
        <td><input onClick={this.deleteItem} type='button' value="x"/></td>
      </tr>
    );
  }
});

module.exports = ListCell;
