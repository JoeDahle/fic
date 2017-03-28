// core
import React from 'react';
import PropTypes from  'react';
import { ReactRouter } from  'react-router';
import { Link } from 'react-router';

// styles
import style from './_index.scss';

var NavButton = React.createClass({
  PropTypes: {
    text: PropTypes.string,
    path: PropTypes.string
  },
  getDefaultProps: function(){
    return {
      text: 'Go Home',
      path: '/home'
    }
  },
  render: function() {
    return (
      <Link to={this.props.path}>
        <button className="btn" type='button'>{this.props.text}</button>
      </Link>
    );
  }

});

export default NavButton;
