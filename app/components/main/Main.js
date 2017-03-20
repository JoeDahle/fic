var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('../../containers/main/MainContainer');
var Link = ReactRouter.Link;
var json = require('../../content/text');
var style = require('./_index.scss');

function Main(){
  return (
    <MainContainer>
      <div className="main">
        <h1 className="main-header">{json.index.head}</h1>
        <p className="main-about">{json.index.about}</p>
          <Link to='/spreadtheword'>
            <button className="btn" type='button'>Spread the Word</button>
          </Link>
      </div>
    </MainContainer>
  )
}

module.exports = Main;
