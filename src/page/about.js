import React from 'react';

import { Page, Panel, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';

export class About extends React.Component {
  render() {
    return (
      <Page actionBar={<Breadcrumbs><Link to='/'>Home</Link>About</Breadcrumbs>} title='About'>
        <Panel title='The Team'>
          Lorem Ipsum
        </Panel>
      </Page>
    );
  }
}
