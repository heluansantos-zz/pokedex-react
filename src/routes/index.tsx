import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/profile/:name" component={Profile} />
    <Route />
  </Switch>
);

export default Routes;
