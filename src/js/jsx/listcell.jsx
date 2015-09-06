var React = require('react');
var Parse = require('../Parse');
var ParseReact = require('parse-react');

var ListCell = React.createClass({
  deleteItem: function() {
    ParseReact.Mutation.Destroy(this.props.data).dispatch();
  },
  render: function() {
    return (
      <tr>
        <td style={{
          width: "180px"
        }}>{this.props.data.text}</td>
        <td><input onClick={this.deleteItem} type='button' value="x"/></td>
      </tr>
    );
  }
});

module.exports = ListCell;
