import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SignInPage from 'pages/sign-in/SignInPage';
import HomePage from 'pages/home/HomePage';

import 'styles/normalize.css';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/" component={HomePage} />
      {/*<Route path="/404" component={NotFoundPage} />*/}
      {/*<Redirect to="/404" />*/}
    </Switch>
  </Router>
);

export default App;
