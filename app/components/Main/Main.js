var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('../../containers/MainContainer');
var Link = ReactRouter.Link;
var json = require('../../content/text');
var style = require('./index.scss');

function Main(){
  return (
    <MainContainer>
      <h1>{json.index.head}</h1>
      <p>{json.index.about}</p>
        <Link to='/spreadtheword'>
          <button type='button'>Spread the Word</button>
        </Link>
      </MainContainer>
  )
}

module.exports = Main;
