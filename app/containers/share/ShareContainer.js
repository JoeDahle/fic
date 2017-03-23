// core
var React = require('react');
var PropTypes = React.PropTypes;

// components
var Header = require('../../components/header/Header');
var Twitter = require('../../components/twitter/Twitter');
var FBGraph = require('../../components/fbgraph/FBGraph');
var Loading = require('../../components/loading/Loading');
var NavButton = require('../../components/navbutton/NavButton');
// styles
var style = require('./_index.scss');

var ShareContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true
    }
  },
  render: function() {
    return (
      <div className="share-container">
        <Header text={"Let's do this!"} />
        <Twitter />
        <NavButton path={'home'}
          text={'Go Home'} />
        <FBGraph />
      </div>
    )
  }

});

module.exports = ShareContainer;
