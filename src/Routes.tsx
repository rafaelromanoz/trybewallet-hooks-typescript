import React, { ReactElement, FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const Routes: FunctionComponent = (): ReactElement => (
  <div>
    <Switch>
      <Route path="/carteira" component={Wallet} />
      <Route path="/" component={Login} />
    </Switch>
  </div>
);

export default Routes;
