var React = require('react');
var ReactDOM = require('react-dom');
var Memo = require('../memo');
var ParseReact = require('parse-react');

var Form = React.createClass({
  addItem: function(e) {
    e.preventDefault();
    var kind = ReactDOM.findDOMNode(this.refs.itemKind).value;
    var text = ReactDOM.findDOMNode(this.refs.itemText).value.trim();
    if (!kind || !text) {
      return;
    }

    ParseReact.Mutation.Create("Retrospective", {
      kind: parseInt(kind),
      text: text
    })
    .dispatch();

    ReactDOM.findDOMNode(this.refs.itemKind).value = 0;
    ReactDOM.findDOMNode(this.refs.itemText).value = '';
  },
  renderComponent: function(field) {
    return (
      <div>
        {field}
      </div>
    );
  },
  renderField: function(id, label, field) {
      return this.renderComponent(
          <div>
              <label htmlFor={id}>{label}</label>
              {field}
          </div>
      );
  },
  renderSelect: function(id, label) {
      return this.renderField(id, label,
                              <select id = {id} ref = {id}>
                                  <option value="0">keep</option>
                                  <option value="1">problem</option>
                                  <option value="2">try</option>
                              </select>
      );
  },
  render: function() {
    return (
      <div className="float-table-item pure-form pure-form-stacked">
        <h2>{this.props.formtitle}</h2>
        <form className="newItem" onSubmit={this.addItem}>
          {this.renderSelect("itemKind", "Kind")}
          {this.renderField("itemText", "Text", <textarea name="itemText" ref="itemText"></textarea>
          )}
          {this.renderComponent(<input className="pure-button pure-button-primary" type="submit" value="add"/>)}
        </form>
      </div>
    );
  }
});

module.exports = Form;
