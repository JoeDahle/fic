// Core
import React from 'react';
import PropTypes from 'react';

// components

// styles
import './_index.scss';

// Data
import json from '../../content/text';

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

export default BodyText;
