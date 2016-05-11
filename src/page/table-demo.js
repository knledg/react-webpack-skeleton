import React from 'react';

import { Page, Panel, Table, TableHead, TableBody, TableRow, Button } from 'src/components';

export const TableDemo = React.createClass({
  render() {
    return (
      <Page title='Table'>
        <Panel title='Table with Hover Effect'>
        <h5>When mousing over table it will respond</h5>
          <Table>
            <TableHead>
              <th>Browser</th>
              <th>Visits</th>
              <th>Purchases</th>
              <th>%</th>
              </TableHead>
              <TableBody>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/chrome.svg' /></td>
                  <td>2,014 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
                  <td>543 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
                  <td>11% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
                </TableRow>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/safari.svg' /></td>
                  <td>890 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/> </td>
                  <td>102 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                  <td>4.2% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                </TableRow>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/firefox.svg' /></td>
                  <td>1,322 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/> </td>
                  <td>379 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                  <td>13.5% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                </TableRow>
              </TableBody>
          </Table>
        </Panel>
        <Panel title='Table Without Hover Effect'>
        <h5>When mousing over table it will not respond</h5>
          <Table tableHover={false}>
            <TableHead blackMutedBackground={true}>
              <th>Browser</th>
              <th>Visits</th>
              <th>Purchases</th>
              <th>%</th>
              </TableHead>
              <TableBody>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/chrome.svg' /></td>
                  <td>2,014 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
                  <td>543 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
                  <td>11% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
                </TableRow>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/safari.svg' /></td>
                  <td>890 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/> </td>
                  <td>102 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                  <td>4.2% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                </TableRow>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/firefox.svg' /></td>
                  <td>1,322 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/> </td>
                  <td>379 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                  <td>13.5% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                </TableRow>
              </TableBody>
              </Table>
        </Panel>
        <Panel title='Table With Borders'>
          <Table tableHover={false} tableBordered={true}>
            <TableHead blackMutedBackground={true}>
              <th>Browser</th>
              <th>Visits</th>
              <th>Purchases</th>
              <th>%</th>
              </TableHead>
              <TableBody>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/chrome.svg' /></td>
                  <td>2,014 </td>
                  <td>543 </td>
                  <td>11% </td>
                </TableRow>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/safari.svg' /></td>
                  <td>890 </td>
                  <td>102 </td>
                  <td>4.2% </td>
                </TableRow>
                <TableRow>
                  <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/firefox.svg' /></td>
                  <td>1,322 </td>
                  <td>379 </td>
                  <td>13.5% </td>
                </TableRow>
              </TableBody>
              </Table>
        </Panel>
        <Panel title='Condensed Table'>
        <h5>There will be less spacing between components</h5>
          <Table tableHover={false} tableCondensed={true}>
            <TableHead blackMutedBackground={false}>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
            </TableHead>
            <TableBody>
              <TableRow>
                <td>1</td>
                <td>Ashley Fogarty</td>
                <td>ashley@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='warning' title='Inactive' size='sm'></Button></td>
              </TableRow>
              <TableRow>
                <td>2</td>
                <td>Jason Walsh</td>
                <td>jasonwalsh@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='success' title='Active' size='sm'></Button></td>
              </TableRow>
              <TableRow>
                <td>3</td>
                <td>Matt Lorey</td>
                <td>mattlorey@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='danger' title='Deactivated' size='sm'></Button></td>
              </TableRow>
              <TableRow>
                <td>4</td>
                <td>Matt Ludwigs</td>
                <td>mattl@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='success' title='Active' size='sm'></Button></td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
         <Panel size='xs' title='Striped Table'>
          <Table tableHover={false} tableStriped={true}>
          <h5>Rows are striped</h5>
            <TableHead blackMutedBackground={false}>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </TableHead>
            <TableBody>
              <TableRow>
                <td>1</td>
                <td>Ashley</td>
                <td>Fogarty</td>
              </TableRow>
              <TableRow>
                <td>2</td>
                <td>Matt</td>
                <td>Lorey</td>
              </TableRow>
               <TableRow>
                <td>3</td>
                <td>Jason</td>
                <td>Walsh</td>
              </TableRow>
               <TableRow>
                <td>4</td>
                <td>Matt</td>
                <td>Ludwigs</td>
              </TableRow>
              <TableRow>
                <td>5</td>
                <td>Richard</td>
                <td>Dobson</td>
              </TableRow>
              <TableRow>
                <td>6</td>
                <td>Mcgregor</td>
                <td>Crowley</td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
          <Panel title='Responsive Table'>
          <Table tableResponsive={true}>
          <h5>Table responds to window size</h5>
            <TableHead blackMutedBackground={false}>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Age</th>
            </TableHead>
            <TableBody>
              <TableRow>
                <td>1</td>
                <td>Matt</td>
                <td>Lorey</td>
                <td>mattlorey@email.com</td>
                <td>555-555-5555</td>
                <td>Deactivated</td>
                <td>33</td>
              </TableRow>
              <TableRow>
                <td>2</td>
                <td>Ashley</td>
                <td>Fogarty</td>
                <td>ashley@email.com</td>
                <td>555-555-5555</td>
                <td>Inactive</td>
                <td>21</td>
              </TableRow>
              <TableRow>
                <td>3</td>
                <td>Jason</td>
                <td>Walsh</td>
                <td>jason@email.com</td>
                <td>555-555-5555</td>
                <td>Active</td>
                <td>27</td>
              </TableRow>
                <TableRow>
                <td>4</td>
                <td>Matt</td>
                <td>Ludwigs</td>
                <td>mattludwigs@email.com</td>
                <td>555-555-5555</td>
                <td>Active</td>
                <td>26</td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
      </Page>
    );
  },
});
