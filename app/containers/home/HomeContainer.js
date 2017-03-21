// Home Container
// Core
var React = require('react');
var PropTypes = React.PropTypes;

// components
var Header = require('../../components/header/Header');
var BodyText = require('../../components/bodytext/BodyText');
var SpreadTheWordButton = require('../../components/spreadthewordbutton/SpreadTheWordButton');

// styles
var style = require('./_index.scss');

// Data
var json = require('../../content/text');

var HomeContainer = React.createClass({

  render: function() {
    return (
      <div className='home-container'>
        <Header />
        <BodyText />
        <SpreadTheWordButton />
      </div>
    );
  }

});

module.exports = HomeContainer;
