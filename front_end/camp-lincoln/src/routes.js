import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import Account from './Account/account';
import Landing from './LandingPage/landing';


const Routes = () => {
    return (
      <Switch>
        <Redirect
          component={Landing}
          exact
          from="/"
          to="/Landing"
        />
        <Route
          component={Account}
          exact
          path="/account"
        />
      </Switch>
    );
  };
  
  export default Routes;

