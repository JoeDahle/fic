var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../../containers/main/MainContainer');
var Header = require('../../components/Header/Header');
var style = require('./_index.scss');
var json = require('../../content/text');

function Main(){
  return (
    <MainContainer>
      <div className="main">
        <Header />
        <p className="main-about">{json.index.about}</p>
          <Link to='/spreadtheword'>
            <button className="btn" type='button'>Spread the Word</button>
          </Link>
      </div>
    </MainContainer>
  )
}

module.exports = Main;
