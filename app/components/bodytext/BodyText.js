// Core
var React = require('react');
var PropTypes = React.PropTypes;

// components

// styles
var style = require('./_index.scss');

// Data
var json = require('../../content/text').index.about;


var BodyText = React.createClass({
  PropTypes: {
    text: PropTypes.string
  },
  getDefaultProps: function(){
    return {
      text: json
    }
  },
  getInitialState: function(){
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  render: function() {
    return (
      <div className="body-text">
        <p className="body-text-text">{this.props.text}</p>
      </div>
    );
  }

});

module.exports = BodyText;
