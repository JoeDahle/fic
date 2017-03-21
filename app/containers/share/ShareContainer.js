// core
var React = require('react');
var PropTypes = React.PropTypes;

// components
var Header = require('../../components/header/Header');
var Twitter = require('../../components/twitter/Twitter');
// styles
var style = require('./_index.scss');

var ShareContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      place: 1
    }
  },
  render: function() {
    return (
      <div className="share-container">
        <Header text={"Let's do this!"} />
        <Twitter />
      </div>
    );
  }

});

module.exports = ShareContainer;
