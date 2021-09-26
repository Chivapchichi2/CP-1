import React, { Suspense, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Navar from './components/navBar';
import MyLoader from './components/myLoader';

const MainPage = lazy(() =>
  import('./layouts/mainPage' /* webpackChunkName: "mainPage" */),
);
const LoginPage = lazy(() =>
  import('./layouts/loginPage' /* webpackChunkName: "loginPage" */),
);
const UsersPage = lazy(() =>
  import('./layouts/usersPage' /* webpackChunkName: "usersPage" */),
);

const App = () => (
  <>
    <Navar />
    <Suspense fallback={<MyLoader />}>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/users/:userId?" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
