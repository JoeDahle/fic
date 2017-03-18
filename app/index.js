var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

/*
* Keep FIRST in mind when creating components
* Focused
* Independent
* Reusable
* Small
* Testable
*/


ReactDOM.render(
  routes,
  document.getElementById('app')
)
