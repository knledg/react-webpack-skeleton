import React from 'react';

import { Page, Panel, Button } from 'src/components';
import {Row, Col} from 'react-flex-proto';

import eventBus from 'src/lib/event-bus';

export class NotificationsDemo extends React.Component {

  render() {
    return (
      <Page title='Notifications'>

        <Row>
          <Col>
            <Panel title='Message Notifications' size='md'>
              <Button type='success' onClick={() => eventBus.addNotification('success', 'You have been successful')} />
              <Button type='warning' onClick={() => eventBus.addNotification('warning', 'You have been warned')} />
              <Button type='danger' onClick={() => eventBus.addNotification('error', 'You have been errored')} />
              <Button type='info' onClick={() => eventBus.addNotification('info', 'You have been informed', {title: 'And titled'})} />
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

