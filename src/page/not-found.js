import React from 'react';

import { Page, Panel } from 'react-blur-admin';

export class NotFound extends React.Component {
  render() {
    return (
      <Page title='404 Not Found'>
        <Panel title='Page Not Found'>
          The page you were looking for wasn't found!
        </Panel>
      </Page>
    );
  }
}

