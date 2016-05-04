import React from 'react';

import { Page, Panel, Table, TableHead, TableBody, TableRow } from 'src/components';

export const TableDemo = React.createClass({
  render() {
    return (
      <Page title='Table'>
        <Panel title='Sample Table'>
          <Table>
            <TableHead>
              <th>Header One</th>
              <th>Header Two</th>
              <th>%</th>
            </TableHead>
            <TableBody>
              <TableRow>
                <td>Cell One</td>
                <td>Cell Two</td>
                <td>40%</td>
              </TableRow>
              <TableRow>
                <td>Cell Three</td>
                <td>Cell Four</td>
                <td>30%</td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
      </Page>
    );
  },
});
