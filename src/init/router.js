import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import AppLayout from 'src/layout/app';
import Login from 'src/layout/login';

/* Demos */
import { Welcome } from 'src/page/welcome';
import { About } from 'src/page/about';
import { ProgressBars } from 'src/page/progress-bars';
import { TableDemo } from 'src/page/table-demo';
import { ButtonDemo } from 'src/page/button-demo';
import { ModalDemo } from 'src/page/modal-demo';
import { TabsDemo } from 'src/page/tabs-demo';
import { InputDemo } from 'src/page/input-demo';
import { NotificationsDemo } from 'src/page/notifications-demo';
/* End Demos */

import { NotFound } from 'src/page/not-found';

export const AppRouter = (
  <Router history={browserHistory}>

    <Redirect from="/react-webpack-skeleton" to="/" />

    <Route path='/login' component={Login} />
    <Route component={AppLayout}>
      <Route path='/' component={Welcome} />
      <Route path='/about' component={About} />
      <Route path='/progress-bars' component={ProgressBars} />
      <Route path='/button-demo' component={ButtonDemo} />
      <Route path='/modal-demo' component={ModalDemo} />
      <Route path='/table-demo' component={TableDemo} />
      <Route path='/tabs-demo' component={TabsDemo} />
      <Route path='/input-demo' component={InputDemo} />
      <Route path='/notifications-demo' component={NotificationsDemo} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);
