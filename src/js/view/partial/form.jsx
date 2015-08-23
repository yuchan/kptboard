var React = require('react');

var Form = React.createClass({
  addItem: function(e) {
    console.log("form is submitted.");
    console.log(this.refs);
    e.preventDefault();
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
    return this.renderField(id, label, <select id={id}>
        <option value="0">keep</option>
        <option value="1">problem</option>
        <option value="2">try</option>
      </select>);
  },
  render: function() {
    return (
      <div className="float-table-item pure-form pure-form-stacked">
        <h2>{this.props.formtitle}</h2>
        <form className="newItem" onSubmit={this.addItem}>
          {this.renderSelect("itemKind", "Kind")}
          {this.renderField("itemText", "Text", <textarea name="itemText"></textarea>)}
          {this.renderComponent(<input type="submit" className="pure-button pure-button-primary" value="add"/>)}
        </form>
      </div>
    );
  }
});

module.exports = Form;
