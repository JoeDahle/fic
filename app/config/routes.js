var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainContainer = require('../containers/main/MainContainer');
var SpreadTheWordContainer = require('../components/spreadthewordbutton/SpreadTheWordButton');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={MainContainer} />
      <Route path='/spreadtheword' component={MainContainer} />
    </Route>
  </Router>
);

module.exports = routes;
