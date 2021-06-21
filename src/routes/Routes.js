import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Path from './Path';

const Home = lazy(() => import('../modules/Home'));
const Login = lazy(() => import('../modules/Login'));

const NotFound = () => (<div>Opps... Something went wrong. Please check your url path again.</div>);

const RouteNotFound = () => <Redirect to={{ state: { notFoundError: true } }} />;

const WaitingComponent = (Component) => (props) => (
  <Suspense fallback={<div>Module loading....</div>}>
    <Component {...props} />
  </Suspense>
);

const Routes = () => (
  <Switch>
    <Route path={Path.HOME}>{WaitingComponent(Home)}</Route>
    <Route path={Path.LOGIN}>{WaitingComponent(Login)}</Route>
    <Route path={null}>{NotFound}</Route>
    <RouteNotFound />
  </Switch>
);

export default Routes;
