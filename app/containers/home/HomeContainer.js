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
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSpreadClick: function(e){
    e.preventDefault();
    if(this.props.routeParams.spreadtheword){
      this.context.router.push({
        pathname: '/spreadtheword'
      })
    } else {
      console.warn('error in HomeContainer handleSpreadClick: ' + e);
    }
  },
  render: function() {
    return (
      <div className='home-container'>
        <Header />
        <BodyText />
        <SpreadTheWordButton onSpreadClick={this.handleSpreadClick}/>
      </div>
    );
  }

});

module.exports = HomeContainer;
