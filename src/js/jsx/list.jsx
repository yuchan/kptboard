var React = require('react');
var Parse = require('../Parse');
var ParseReact = require('parse-react');

var ListCell = React.createClass({
    deleteItem: function() {
        ParseReact.Mutation.Destroy(this.props.memo).dispatch();
    },
    render: function() {
        return (
            <tr>
                <td style={{width: "180px"}}>{this.props.memo.text}</td>
                <td><input onClick={this.deleteItem} type='button' value="x"/></td>
            </tr>
        );
    }    
});

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
                 return <ListCell memo={memo} key={Math.random()}/>
             })}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = List;
