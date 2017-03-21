var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;
var style = require('./_index.scss');

var SpreadTheWordButton = React.createClass({
  PropTypes: {
    text: PropTypes.string
  },
  getDefaultProps: function(){
    return {
      text: 'Spread The Word!'
    }
  },
  render: function() {
    return (
      <Link to='/spreadtheword'>
        <button className="btn" type='button'>{this.props.text}</button>
      </Link>
    );
  }

});

module.exports = SpreadTheWordButton;
