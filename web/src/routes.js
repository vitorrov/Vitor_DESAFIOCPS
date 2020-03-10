import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contacts from './pages/List';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contactus" component={Main} />
        <Route path="/listcontacts" component={Contacts} />
        <Route path="/adminlogin" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
