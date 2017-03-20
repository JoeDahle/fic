var React = require('react');
// var style = require('../components/Main/index.scss');

function MainContainer(props) {
    return (
      <div className='Main-Container'>
        {props.children}
      </div>
    );
  }

module.exports = MainContainer;
