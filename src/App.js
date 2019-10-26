import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import PublicRoute from 'routes/PublicRoute';

import Drawer from 'components/Drawer';
import Header from 'components/Header';

import Home from 'containers/Home';
import NotFound from 'containers/NotFound';

const App = (props) => (
  <SnackbarProvider maxSnack={3}>
    <Drawer />

    <Header />

    <div className="app-container">
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={Home}
          props={props}
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  </SnackbarProvider>
);

export default withRouter(App);
