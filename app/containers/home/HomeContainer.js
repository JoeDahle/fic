// Home Container
// Core
var React = require('react');
var PropTypes = React.PropTypes;

// components
var Header = require('../../components/header/Header');
var BodyText = require('../../components/bodytext/BodyText');
var NavButton = require('../../components/navbutton/NavButton');

// styles
var style = require('./_index.scss');

// Data
var json = require('../../content/text');

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

module.exports = HomeContainer;
