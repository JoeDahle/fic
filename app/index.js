import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

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
