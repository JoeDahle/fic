// Core
var React = require('react');

// components
var HomeContainer = require('../../containers/home/HomeContainer');

// styles
var style = require('./_index.scss');

function MainContainer(props) {
    return (
      <div className='main-container'>
        <HomeContainer />
      </div>
    );
  }

module.exports = MainContainer;
