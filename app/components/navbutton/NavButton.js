var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;
var style = require('./_index.scss');

var NavButton = React.createClass({
  PropTypes: {
    text: PropTypes.string,
    path: PropTypes.string
  },
  getDefaultProps: function(){
    return {
      text: 'Go Home',
      path: '/home'
    }
  },
  render: function() {
    return (
      <Link to={this.props.path}>
        <button className="btn" type='button'>{this.props.text}</button>
      </Link>
    );
  }

});

module.exports = NavButton;
