import React from 'react';
import PropTypes from 'react';

// styles
import './_index.scss';

// data
import json from '../../content/text';

var Header = React.createClass({
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
      <div className="header">
        <h1 className="header-text">{this.props.text}</h1>
      </div>
    );
  }

});

export default Header;
