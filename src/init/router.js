import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { AppLayout } from 'src/layout/app';

import { Welcome } from 'src/page/welcome';
import { About } from 'src/page/about';
import { TableDemo } from 'src/page/table-demo';
import { NotFound } from 'src/page/not-found';

export const AppRouter = (
  <Router history={browserHistory}>
    <Route component={AppLayout}>
      <Route path='/' component={Welcome} />
      <Route path='/about' component={About} />
      <Route path='/table-demo' component={TableDemo} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);
