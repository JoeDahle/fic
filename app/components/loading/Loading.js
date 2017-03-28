import React from 'react';
import PropTypes from 'react';

var Loading = React.createClass({
  PropTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function(){
    return {
      text: 'Loading',
      speed: 250
    }
  },
  getInitialState: function(){
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount: function(){
    var stopPoint = 'Loading...';
    this.interval = setInterval(function(){
      if(this.state.text === stopPoint){
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  },
  componentWillUnmount: function(){
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div className='loading-container'>
        <p className='loading-text'>{this.state.text}</p>
      </div>
    );
  }
});

export default Loading;
