// core
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.IndexRedirect;

// components
var MainContainer = require('../containers/main/MainContainer');
var HomeContainer = require('../containers/home/HomeContainer');
var ShareContainer = require('../containers/share/ShareContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRedirect to='/home' />
      <Route path='home' component={HomeContainer} />
      <Route path='spreadtheword' component={ShareContainer} />
    </Route>
  </Router>
);

module.exports = routes;
