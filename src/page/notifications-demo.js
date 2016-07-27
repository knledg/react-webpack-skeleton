import React from 'react';

import { Page, Panel, Button, eventBus, Alert, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';
import {Row, Col} from 'react-flex-proto';

export class NotificationsDemo extends React.Component {

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
          Notifications Demo
      </Breadcrumbs>
    );
  }

  render() {
    return (
      <Page actionBar={this.renderBreadcrumbs()} title='Notifications Demo'>
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
        <Row>
          <Col>
            <Panel title='Alert Bar Notifications (Non-closable)'>
              <Alert type='success'>Yay! You did the thing!</Alert>
              <Alert type='info'>This alert is informative!</Alert>
              <Alert type='warning'>Oh no, you're about to do a bad thing!</Alert>
              <Alert type='danger'>*gasp*! You did a bad thing!</Alert>
            </Panel>
          </Col>
          <Col>
            <Panel title='Alert Bar Notifications (Closable)'>
              <Alert isDismissible={true} type='success'>Yay! You did the thing!</Alert>
              <Alert isDismissible={true} type='info'>This alert is informative!</Alert>
              <Alert isDismissible={true} type='warning'>Oh no, you're about to do a bad thing!</Alert>
              <Alert isDismissible={true} type='danger'>*gasp*! You did a bad thing!</Alert>
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}
