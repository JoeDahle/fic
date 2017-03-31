import React, { PropTypes } from 'react'
import { Container, Button } from 'semantic-ui-react';
import ReactCSSTransition from 'react-addons-css-transition-group';
import './_index.scss';

const Ripple = React.createClass({
  render () {
    return (
      <ReactCSSTransition
        transitionName={{
          rippleContainer: 'ripple-container',
          rippleRippleEnter: 'ripple-ripple-enter',
          rippleRippleLeave: 'ripple-ripple-leave',
          rippleContentEnter: 'ripple-content-enter',
          rippleContentLeave: 'ripple-content-leave',
          buttonOpen: 'button-active',
          buttonClose: 'button-close'
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
