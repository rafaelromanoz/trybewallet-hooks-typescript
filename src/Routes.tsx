import React, { ReactElement, FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

const Routes: FunctionComponent = (): ReactElement => (
  <div>
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  </div>
);

export default Routes;
