// Core
import React from 'react';
import PropTypes from 'react';
import { Link } from 'react-router';

// components
import Header from '../../components/header/Header'
import BodyText from '../../components/bodytext/BodyText'
import NavButton from '../../components/navbutton/NavButton'
import Ripple from '../../components/ripple/Ripple';
import { Button, Icon } from 'semantic-ui-react';

// styles
import './_index.scss';

// Data
import json from '../../content/text';

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className='home-container'>
        <Header />
        <BodyText />
        <NavButton visibleText='Spread the word'
          hiddenText="Let's go!"
          path='/spreadtheword'
          arrowDirection="right arrow" />
        <Ripple />
      </div>
    );
  }

});

export default HomeContainer;
