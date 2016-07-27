import React from 'react';

import { Page, Panel, Button, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';
import {Row, Col} from 'react-flex-proto';

export class ButtonDemo extends React.Component {

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
          Buttons
      </Breadcrumbs>
    );
  }

  render() {
    return (
      <Page actionBar={this.renderBreadcrumbs()} title='Buttons'>
        <Row>
          <Col>
            <Panel title='Large Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' size='lg' />
                </Col>
                <Col grow={false}>
                  <Button type='add' size='lg' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' size='lg' />
                </Col>
                <Col grow={false}>
                  <Button type='info' size='lg' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' size='lg' />
                </Col>
                <Col grow={false}>
                  <Button type='success' size='lg' />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col>
            <Panel title='Extra Medium Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' size='xm' />
                </Col>
                <Col grow={false}>
                  <Button type='add' size='xm' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' size='xm' />
                </Col>
                <Col grow={false}>
                  <Button type='info' size='xm' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' size='xm' />
                </Col>
                <Col grow={false}>
                  <Button type='success' size='xm' />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col>
            <Panel title='Medium Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' />
                </Col>
                <Col grow={false}>
                  <Button type='add' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' />
                </Col>
                <Col grow={false}>
                  <Button type='info' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' />
                </Col>
                <Col grow={false}>
                  <Button type='success' />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col>
            <Panel title='Mini Medium Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' size='mm' />
                </Col>
                <Col grow={false}>
                  <Button type='add' size='mm' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' size='mm' />
                </Col>
                <Col grow={false}>
                  <Button type='info' size='mm' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' size='mm' />
                </Col>
                <Col grow={false}>
                  <Button type='success' size='mm' />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col>
            <Panel title='Small Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' size='sm' />
                </Col>
                <Col grow={false}>
                  <Button type='add' size='sm' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' size='sm' />
                </Col>
                <Col grow={false}>
                  <Button type='info' size='sm' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' size='sm' />
                </Col>
                <Col grow={false}>
                  <Button type='success' size='sm' />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col>
            <Panel title='XS Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='add' size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='info' size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='success' size='xs' />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col>
            <Panel title='Disabled Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' disabled={true} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='add' disabled={true} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' disabled={true} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='info' disabled={true} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' disabled={true} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='success' disabled={true} size='xs' />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col>
            <Panel title='Custom Icons Buttons'>
              <Row>
                <Col grow={false}>
                  <Button type='default' icon={<i className='fa fa-chevron-circle-down' />} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='add' icon={<i className='fa fa-chevron-circle-left' />} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='remove' icon={<i className='fa fa-chevron-circle-right' />} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='info' icon={<i className='fa fa-chevron-circle-up' />} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='warning' icon={<i className='fa fa-chevron-down' />} size='xs' />
                </Col>
                <Col grow={false}>
                  <Button type='success' icon={<i className='fa fa-chevron-up' />} size='xs' />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

