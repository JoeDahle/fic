import React from 'react';
import PropTypes from  'react';

var SignInButton = React.createClass({
  PropTypes: {
    text: PropTypes.string,
    active: PropTypes.boolean
  },
  getDefaultProps: function(){
    return {
      text: 'Sign in',
      active: true
    }
  },
  render: function() {
    return (
      <button className="signin-button">{this.props.text}</button>
    );
  }

});

export default SignInButton;
