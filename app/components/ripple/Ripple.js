import React, { PropTypes } from 'react'
import { Container, Button } from 'semantic-ui-react';
import ReactCSSTransition from 'react-addons-css-transition-group';
import './_index.scss';

const Ripple = React.createClass({
  render () {
    return (
      <ReactCSSTransition
        transitionName={{
          ripple-container: 'ripple-container',
          ripple-ripple-enter: 'ripple-ripple-enter',
          ripple-ripple-leave: 'ripple-ripple-leave',
          ripple-content-enter: 'ripple-content-enter',
          ripple-content-leave: 'ripple-content-leave',
          button-open: 'button-active',
          button-close: 'button-close'
        }}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <div className='ripple-container'>
          <div className='ripple-ripple'>
            <div className='ripple-content'>
              <Button icon='plus'></Button>
            </div>
          </div>
        </div>
      </ReactCSSTransition>
    )
  }
})

export default Ripple;
