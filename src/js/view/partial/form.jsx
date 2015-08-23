var React = require('react');

var Form = React.createClass({
  render: function() {
    return (
      <form className="newItem">
        <div>
          <select>
            <option value="0">keep</option>
            <option value="1">problem</option>
            <option value="2">try</option>
          </select>
        </div>
        <div>
          <textarea>
          </textarea>
        </div>
      </form>
    );
  }
});

module.exports = Form;
