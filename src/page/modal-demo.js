import React from 'react';

import { Page, Panel, Modal, Button } from 'src/components';

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

        <Modal type='success' title='Woot' isOpen={this.state.successModal} onClose={() => this.onCloseModal('successModal')}>
          You did a thing!
        </Modal>

        <Modal type='danger' title='Aw' isOpen={this.state.dangerModal} onClose={() => this.onCloseModal('dangerModal')}>
          You did a bad thing!
        </Modal>

        <Modal type='info' title='Hey' isOpen={this.state.infoModal} onClose={() => this.onCloseModal('infoModal')}>
          Listen!
        </Modal>

        <Modal type='warning' title='Whoa' isOpen={this.state.warningModal} onClose={() => this.onCloseModal('warningModal')}>
          You're about to do a thing!
        </Modal>

        <Row>
          <Col>
            <Panel title='Message Modals' size='md'>
              <Button type='success' onClick={() => this.onRenderModal('successModal')} />
              <Button type='warning' onClick={() => this.onRenderModal('warningModal')} />
              <Button type='danger' onClick={() => this.onRenderModal('dangerModal')} />
              <Button type='info' onClick={() => this.onRenderModal('infoModal')} />
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

