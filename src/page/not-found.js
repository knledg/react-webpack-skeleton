import React from 'react';

import { Page, Panel, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';

export class NotFound extends React.Component {
  render() {
    return (
      <Page actionBar={<Breadcrumbs><Link to='/'>Home</Link>You're lost!</Breadcrumbs>} title='404 Not Found'>
        <Panel title='Page Not Found'>
          The page you were looking for wasn't found!
        </Panel>
      </Page>
    );
  }
}

