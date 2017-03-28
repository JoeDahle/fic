// Core
import React from 'react';
import PropTypes from 'react';

// components
import Header from '../../components/header/Header'
import BodyText from '../../components/bodytext/BodyText'
import NavButton from '../../components/navbutton/NavButton'

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
        <NavButton
          path={'/spreadtheword'}
          text={'Spread the Word!'}/>
      </div>
    );
  }

});

export default HomeContainer;
