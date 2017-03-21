//  core
var React = require('react');
var PropTypes = React.PropTypes;

// data
var TwitterHashSearch = require('react-twitter-widgets').Timeline;

// styles
var style = require('./_index.scss');

var Twitter = React.createClass({
  render: function() {
    return (
      <div className='twitter-container'>
        <TwitterHashSearch className='twitter-component' dataSource={{
            sourceType: 'widget',
            widgetId: '844245316706566144'
          }} />
      </div>
    );
  }

});

module.exports = Twitter;
