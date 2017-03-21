//  core
var React = require('react');
var PropTypes = React.PropTypes;

// components
var Loading = require('../../components/loading/Loading');

// data
var TwitterHashSearch = require('react-twitter-widgets').Timeline;

// styles
var style = require('./_index.scss');

var Twitter = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true
    }
  },
  componentWillMount: function(){
    this.setState({
      isLoading: true
    })
  },
  componentDidMount: function(){
    this.setState({
      isLoading: false
    })
  },
  render: function(){
    if(this.state.isLoading === true){
      return (
        <Loading />
      )
    } else {
      return (
        <div className='twitter-container'>
          <TwitterHashSearch className='twitter-component' dataSource={{
              sourceType: 'widget',
              widgetId: '844245316706566144'
            }} />
        </div>
      )
    }
  }

});

module.exports = Twitter;
