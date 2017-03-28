//  core
import React from 'react';
import PropTypes from  'react';

// components
import Loading from '../../components/loading/Loading';

// styles
var style = require('./_index.scss');

// data
var Timeline = require('react-twitter-widgets').Timeline;


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
          <Timeline className='twitter-component' dataSource={{
              sourceType: 'widget',
              widgetId: '844245316706566144'
            }} />
        </div>
      )
    }
  }

});

export default Twitter;
