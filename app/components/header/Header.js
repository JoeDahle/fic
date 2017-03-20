var React = require('react');
var PropTypes = React.PropTypes;
var json = require('../../content/text').index.head;
var style = require('./_index.scss');

var Header = React.createClass({
  PropTypes: {
    text: PropTypes.string,
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
      <h1 className="header-component">{this.props.text}</h1>
    );
  }

});

module.exports = Header;
