// core
import React from 'react';
import { ReactRouter } from 'react-router';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { hashHistory } from 'react-router';
import { IndexRoute } from 'react-router';
import { IndexRedirect } from 'react-router';

// components
import MainContainer from '../containers/main/MainContainer';
import HomeContainer from '../containers/home/HomeContainer';
import ShareContainer from '../containers/share/ShareContainer';

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
