var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

function SpreadTheWordButton(){
  getDefaultProps: function(){
    return {
      text: 'Spread The Word'
    }
  }

  return (
    <Link to='/spreadtheword'>
      <button type='button'>{this.props.text}</button>
    </Link>
  )
}

SpreadTheWordButton.PropTypes = {
  text: PropTypes.string
}

module.exports = SpreadTheWordButton;
