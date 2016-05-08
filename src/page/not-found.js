import React from 'react';

import { Page, Panel } from 'src/components';

export const NotFound = React.createClass({
  render() {
    return (
      <Page title='404 Not Found'>
        <Panel title='Page Not Found'>
          The page you were looking for wasn't found!
        </Panel>
      </Page>
    );
  },
});
