import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { AppLayout } from 'src/layout/app';

/* Demos */
import { Welcome } from 'src/page/welcome';
import { About } from 'src/page/about';
import { TableDemo } from 'src/page/table-demo';
import { ButtonDemo } from 'src/page/button-demo';
import { ModalDemo } from 'src/page/modal-demo';
import { InputDemo } from 'src/page/input-demo';
/* End Demos */

import { NotFound } from 'src/page/not-found';

export const AppRouter = (
  <Router history={browserHistory}>
    <Route component={AppLayout}>

      <Route path='/' component={Welcome} />
      <Route path='/about' component={About} />
      <Route path='/table-demo' component={TableDemo} />
      <Route path='/button-demo' component={ButtonDemo} />
      <Route path='/modal-demo' component={ModalDemo} />
      <Route path='/input-demo' component={InputDemo} />

      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);
