var React = require('react');

var TitleHeader = React.createClass({
  render: function() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
});

module.exports = TitleHeader;
