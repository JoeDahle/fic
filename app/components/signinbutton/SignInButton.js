var React = require('react');
var PropTypes = React.PropTypes;

var SignInButton = React.createClass({
  PropTypes: {
    text: PropTypes.string,
    active: PropTypes.boolean
  },
  getDefaultProps: function(){
    return {
      text: 'Sign in',
      active: true
    }
  },
  render: function() {
    return (
      <button className="signin-button">{this.props.text}</button>
    );
  }

});

module.exports = SignInButton;
