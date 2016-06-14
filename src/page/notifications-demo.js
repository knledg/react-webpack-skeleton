import React from 'react';

import { Page, Panel, Button, eventBus, Alert } from 'react-blur-admin';
import {Row, Col} from 'react-flex-proto';

export class NotificationsDemo extends React.Component {
  render() {
    return (
      <Page title='Notifications'>
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
              <Alert type='success'>Yay! You did the thing! <img src='http://www.hey.fr/tools/emoji/ios_emoji_smiling_face_with_open_mouth_and_smiling_eyes.png' height='23px'/></Alert>
              <Alert type='info'>This alert is informative! <img src='http://emojipedia-us.s3.amazonaws.com/cache/4a/bc/4abc340cf5d893ff4bf6ebc17b29c221.png' height='20px'/></Alert>
              <Alert type='warning'>Oh no, you're about to do a bad thing! <img src='http://emojipop.net/data/images/emoji_set_21.png' height='22px'/></Alert>
              <Alert type='danger'>*gasp*! You did a bad thing! <img src='http://www.emoji-quiz-answers.com/wp-content/uploads/2014/11/face_screaming_in_fear-small.png' height='25px'/></Alert>
            </Panel>
          </Col>
          <Col>
            <Panel title='Alert Bar Notifications (Closable)'>
              <Alert isDismissible={true} type='success'>Yay! You did the thing! <img src='http://www.hey.fr/tools/emoji/ios_emoji_smiling_face_with_open_mouth_and_smiling_eyes.png' height='23px'/></Alert>
              <Alert isDismissible={true} type='info'>This alert is informative! <img src='http://emojipedia-us.s3.amazonaws.com/cache/4a/bc/4abc340cf5d893ff4bf6ebc17b29c221.png' height='20px'/></Alert>
              <Alert isDismissible={true} type='warning'>Oh no, you're about to do a bad thing! <img src='http://emojipop.net/data/images/emoji_set_21.png' height='22px'/></Alert>
              <Alert isDismissible={true} type='danger'>*gasp*! You did a bad thing! <img src='http://www.emoji-quiz-answers.com/wp-content/uploads/2014/11/face_screaming_in_fear-small.png' height='25px'/></Alert>
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}
