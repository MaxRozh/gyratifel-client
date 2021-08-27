import React, { Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './i18n/config';

import SignInPage from 'pages/sign-in/SignInPage';
import HomePage from 'pages/home/HomePage';

import 'styles/normalize.css';

const history = createBrowserHistory();

const App = () => (
  <Suspense fallback={<p>Loading Translations ...</p>}>
    <Router history={history}>
      <Switch>
        <Route exact path="/:locale/sign-in" component={SignInPage} />
        <Route exact path="/:locale/" component={HomePage} />
        <Route exact path="/">
          <Redirect to="/ru/" />
        </Route>
        <Route path="/404" component={HomePage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
