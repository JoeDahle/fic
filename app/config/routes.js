// core
import React from 'react';
import { ReactRouter } from 'react-router';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { hashHistory } from 'react-router';
import { IndexRoute } from 'react-router';
import { IndexRedirect } from 'react-router';

// var React = require('react');
// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var hashHistory = ReactRouter.hashHistory;
// var IndexRoute = ReactRouter.IndexRoute;
// var IndexRedirect = ReactRouter.IndexRedirect;

// components
import MainContainer from '../containers/main/MainContainer';
import HomeContainer from '../containers/home/HomeContainer';
import ShareContainer from '../containers/share/ShareContainer';
// var MainContainer = require('../containers/main/MainContainer');
// var HomeContainer = require('../containers/home/HomeContainer');
// var ShareContainer = require('../containers/share/ShareContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRedirect to='/home' />
      <Route path='home' component={HomeContainer} />
      <Route path='spreadtheword' component={ShareContainer} />
    </Route>
  </Router>
);

export default routes;
