import React from 'react';

import { Page, Panel, Table, TableHead, TableBody, TableRow, Button, EditableText, Pagination, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';

import {Row, Col} from 'react-flex-proto';

export class TableDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chromeVisits: 1000,
      currentPage: 1,
    };
  }

  onEditableChange(key, value) {
    this.setState({[key]: value});
  }

  onSetCurrentPage(value) {
    this.setState({currentPage: value});
  }

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
          Table Types
      </Breadcrumbs>
    );
  }

  render() {
    return (
      <Page actionBar={this.renderBreadcrumbs()} title='Table Types'>
        <Panel title='Table with Hover Effect'>
          <h5>When mousing over table rows will respond</h5>
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
                <td>11.9% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
              </TableRow>
              <TableRow>
                <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/safari.svg' /></td>
                <td>1,008 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/> </td>
                <td>102 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                <td>4.22% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
              </TableRow>
              <TableRow>
                <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/firefox.svg' /></td>
                <td>1,322 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/> </td>
                <td>379 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                <td>13.5% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
              </TableRow>
            </TableBody>
          </Table>
          <Row>
            <Col align='center'>
              <Pagination currentPage={Number(this.state.currentPage)} totalPages={5} onChange={value => this.onSetCurrentPage(value)} />
            </Col>
          </Row>
        </Panel>
        <Panel title='Table Without Hover Effect'>
          <h5>When mousing over table rows will not respond</h5>
          <Table hover={false}>
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
                <td>11.9% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/></td>
              </TableRow>
              <TableRow>
                <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/safari.svg' /></td>
                <td>1,008 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_up_small.png'/> </td>
                <td>102 <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
                <td>4.22% <img src='http://g.foolcdn.com/common/img/ico/arrows/arrow_down_small.png' /></td>
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
          <Table hover={false} border={true}>
            <TableHead blackMutedBackground={true}>
              <th className='align-right'>Browser</th>
              <th className='align-right'>Visits</th>
              <th className='align-right'>Purchases</th>
              <th className='align-right'>%</th>
            </TableHead>
            <TableBody>
              <TableRow>
                <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/chrome.svg' /></td>
                <td className='align-right'>
                  <EditableText
                    value={this.state.chromeVisits}
                    onChange={value => this.onEditableChange('chromeVisits', value)}
                    onValidate={(value) => {return value > 0;}} />
                </td>
                <td className='align-right'>543 </td>
                <td className='align-right'>11.9% </td>
              </TableRow>
              <TableRow>
                <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/safari.svg' /></td>
                <td className='align-right'>1,008 </td>
                <td className='align-right'>102 </td>
                <td className='align-right'>4.22% </td>
              </TableRow>
              <TableRow>
                <td><img src='http://akveo.com/blur-admin/assets/img/app/browsers/firefox.svg' /></td>
                <td className='align-right'>1,322 </td>
                <td className='align-right'>379 </td>
                <td className='align-right'>13.5% </td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
        <Panel title='Condensed Table'>
          <h5>There will be less spacing between components</h5>
          <Table hover={false} condense={true}>
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
                <td>Ashley</td>
                <td>ashley@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='warning' title='Inactive' size='sm'/></td>
              </TableRow>
              <TableRow>
                <td>2</td>
                <td>Jason</td>
                <td>jason@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='success' title='Active' size='sm'/></td>
              </TableRow>
              <TableRow>
                <td>3</td>
                <td>Matt</td>
                <td>matt@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='danger' title='Deactivated' size='sm'/></td>
              </TableRow>
              <TableRow>
                <td>4</td>
                <td>Other Matt</td>
                <td>othermatt@email.com</td>
                <td>555-555-5555</td>
                <td><Button type='success' title='Active' size='sm'/></td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
        <Panel title='Striped Table'>
          <h5>Rows are striped</h5>
          <Table hover={false} stripe={true}>
            <TableHead blackMutedBackground={false}>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </TableHead>
            <TableBody>
              <TableRow>
                <td>1</td>
                <td>Ashley</td>
                <td>Rockoff</td>
              </TableRow>
              <TableRow>
                <td>2</td>
                <td>Matt</td>
                <td>Rosenthal</td>
              </TableRow>
              <TableRow>
                <td>3</td>
                <td>Jason</td>
                <td>Storm</td>
              </TableRow>
              <TableRow>
                <td>4</td>
                <td>Matt</td>
                <td>Marubini</td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
        <Panel title='Responsive Table'>
          <h5>Table responds to window size</h5>
          <Table>
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
                <td>Rosenthal</td>
                <td>matt@email.com</td>
                <td>555-555-5555</td>
                <td className='text-danger'>Deactivated</td>
                <td>33</td>
              </TableRow>
              <TableRow>
                <td>2</td>
                <td>Ashley</td>
                <td>Rockoff</td>
                <td>ashley@email.com</td>
                <td>555-555-5555</td>
                <td className='text-warning'>Inactive</td>
                <td>21</td>
              </TableRow>
              <TableRow>
                <td>3</td>
                <td>Jason</td>
                <td>Storm</td>
                <td>jason@email.com</td>
                <td>555-555-5555</td>
                <td className='text-success'>Active</td>
                <td>27</td>
              </TableRow>
              <TableRow>
                <td>4</td>
                <td>Matt</td>
                <td>Marubini</td>
                <td>othermatt@email.com</td>
                <td>555-555-5555</td>
                <td className='text-success'>Active</td>
                <td>26</td>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
      </Page>
    );
  }
}

