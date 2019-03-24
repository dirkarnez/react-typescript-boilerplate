import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const history = createBrowserHistory(); 

const HotApp = hot(module)(() => (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
));

ReactDOM.render(
  <Router history={history}>
    <HotApp/>
  </Router>,
  document.getElementById('root')
);
