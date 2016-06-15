import React from 'react';

import { Page, Panel, Button, eventBus, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';
import {Row, Col} from 'react-flex-proto';

export class NotificationsDemo extends React.Component {
  render() {
    return (
      <Page actionBar={<Breadcrumbs><Link to='/'>Home</Link>Notifications Demo</Breadcrumbs>} title='Notifications Demo'>
        <Panel title='Message Notifications'>
          <Row>
            <Col grow={false}>
              <Button type='success' onClick={e => eventBus.addNotification('success', 'You have been successful')} />
            </Col>
            <Col grow={false}>
              <Button type='warning' onClick={e => eventBus.addNotification('warning', 'You have been warned')} />
            </Col>
            <Col grow={false}>
              <Button type='danger' onClick={e => eventBus.addNotification('error', 'You have been errored')} />
            </Col>
            <Col grow={false}>
              <Button type='info' onClick={e => eventBus.addNotification('info', 'You have been informed', {title: 'And titled'})} />
            </Col>
          </Row>
        </Panel>
      </Page>
    );
  }
}
