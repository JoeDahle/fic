// core
import React from 'react';
import PropTypes from  'react';
import { ReactRouter } from  'react-router';
import { Link } from 'react-router';
import { Button, Icon } from 'semantic-ui-react';

// styles
import style from './_index.scss';

var NavButton = React.createClass({
  PropTypes: {
    color: PropTypes.string,
    visibleText: PropTypes.string,
    hiddenText: PropTypes.string,
    path: PropTypes.string,
    arrowDirection: PropTypes.string
  },
  getDefaultProps: function(){
    return {
      color: 'violet',
      visibleText: 'Go Home',
      hiddenText: 'Pack it up',
      path: '/home',
      arrowDirection: 'left arrow'
    }
  },
  render: function() {
    return (
      <div className="NavButton-Wrapper">
        <Link to={this.props.path}>
          <Button animated color={this.props.color} className='btn'>
            <Button.Content visible>{this.props.visibleText}</Button.Content>
            <Button.Content hidden>
              <Icon name={this.props.arrowDirection} />
              <span>{this.props.hiddenText}</span>
            </Button.Content>
          </Button>
        </Link>
      </div>
    );
  }

});

export default NavButton;
