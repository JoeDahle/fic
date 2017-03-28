// Core
import React from 'react';
import PropTypes from 'react';
import { Link } from 'react-router';

// components
import Header from '../../components/header/Header'
import BodyText from '../../components/bodytext/BodyText'
import NavButton from '../../components/navbutton/NavButton'
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
        <Link to={'/spreadtheword'}>
          <Button animated color="violet" className='btn'>
            <Button.Content visible>Spread The Word</Button.Content>
            <Button.Content hidden>
              <span>Let's Go!</span>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </Link>
      </div>
    );
  }

});

export default HomeContainer;
