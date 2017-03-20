var React = require('react');
var style = require('./_index.scss');

function MainContainer(props) {
    return (
      <div className='main-container'>
        {props.children}
      </div>
    );
  }

module.exports = MainContainer;
