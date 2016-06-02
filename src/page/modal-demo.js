import React from 'react';

import { Page, Panel, Modal, Button } from 'react-blur-admin';

import {Row, Col} from 'react-flex-proto';

export class ModalDemo extends React.Component {

  state = {
    successModal: false,
    warningModal: false,
    dangerModal: false,
    infoModal: false,
  }

  onCloseModal(modalName) {
    this.setState({ [modalName]: false });
  }

  onRenderModal(modalName) {
    this.setState({ [modalName]: true });
  }

  render() {
    return (
      <Page title='Modals'>
        <Modal type='success' title='Woot' isOpen={this.state.successModal} onClose={e => this.onCloseModal('successModal')}>
          You did a thing!
        </Modal>

        <Modal type='danger' title='Aw' isOpen={this.state.dangerModal} onClose={e => this.onCloseModal('dangerModal')}>
          You did a bad thing!
        </Modal>

        <Modal type='info' title='Hey' isOpen={this.state.infoModal} onClose={e => this.onCloseModal('infoModal')}>
          Listen!
        </Modal>

        <Modal type='warning' title='Whoa' isOpen={this.state.warningModal} onClose={e => this.onCloseModal('warningModal')}>
          You're about to do a thing!
        </Modal>

        <Row>
          <Col>
            <Panel title='Message Modals'>
              <Row>
                <Col grow={false}>
                  <Button type='success' onClick={e => this.onRenderModal('successModal')} />
                </Col>
                <Col grow={false}>
                  <Button type='warning' onClick={e => this.onRenderModal('warningModal')} />
                </Col>
                <Col grow={false}>
                  <Button type='danger' onClick={e => this.onRenderModal('dangerModal')} />
                </Col>
                <Col grow={false}>
                  <Button type='info' onClick={e => this.onRenderModal('infoModal')} />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

