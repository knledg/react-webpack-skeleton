import React from 'react';

import { Page, Panel, Button } from 'src/components';

import eventBus from 'src/lib/event-bus';

export class NotificationsDemo extends React.Component {
  render() {
    return (
      <Page title='Notifications'>
        <Panel title='Message Notifications' size='md'>
          <Button type='success' onClick={e => eventBus.addNotification('success', 'You have been successful')} />
          <Button type='warning' onClick={e => eventBus.addNotification('warning', 'You have been warned')} />
          <Button type='danger' onClick={e => eventBus.addNotification('error', 'You have been errored')} />
          <Button type='info' onClick={e => eventBus.addNotification('info', 'You have been informed', {title: 'And titled'})} />
        </Panel>
      </Page>
    );
  }
}
