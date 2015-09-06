var React = require('react');
var ListCell = require('./listcell.jsx');
var Parse = require('../Parse');
var ParseReact = require('parse-react');

var List = React.createClass({
  mixins: [ParseReact.Mixin],
  observe: function() {
    return {
      memos: (new Parse.Query('Retrospective')).equalTo("kind", this.props.kind)
    };
  },
  render: function() {
    var $self = this;
    return (
      <div className="float-table-item">
        <h2>{this.props.listtitle}</h2>
        <table className="pure-table pure-table-horizontal">
          <tbody>
            {this.data.memos.map(function (memo) {
              return <ListCell data={memo} key={memo.cid}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = List;
