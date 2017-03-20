var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/main/Main');
var SpreadTheWordContainer = require('../containers/SpreadTheWord/SpreadTheWordContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Main} />
      <Route path='spreadtheword' component={SpreadTheWordContainer} />
    </Route>
  </Router>
);

module.exports = routes;
