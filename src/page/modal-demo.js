import React from 'react';

import { Page, Panel, Modal, Button, Breadcrumbs, Input, Select, Switch } from 'react-blur-admin';
import { Link } from 'react-router';
import _ from 'lodash';

import {Row, Col} from 'react-flex-proto';

export class ModalDemo extends React.Component {

  state = {
    successModal: false,
    warningModal: false,
    dangerModal: false,
    infoModal: false,
    primaryModal: false,
    switches: [true, false],
  }

  onCloseModal(modalName) {
    this.setState({ [modalName]: false });
  }

  onRenderModal(modalName) {
    this.setState({ [modalName]: true });
  }

  onSwitchChange(index) {
    let switches = _.assign({}, this.state.switches);
    switches[index] = !switches[index];
    this.setState({ switches });
  }

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
          Modals
      </Breadcrumbs>
    );
  }

  renderCustomizedModals() {
    return (
      <div>
        <Modal type='info' title='Add Link' buttonText='Save Changes' isOpen={this.state.customizedModal2} onClose={e => this.onCloseModal('customizedModal2')}>
          <Row>
            <Col>
              Paste a link into the box below
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                onChange={e => this.onTextChange('link', e)}
                placeholder='https://'
                hasFeedbackIcon={false}
                value={this.state.link}
              />
            </Col>
          </Row>
        </Modal>

        <Modal type='success' title='Selectable Options' buttonText='Submit' isOpen={this.state.customizedModal3} onClose={e => this.onCloseModal('customizedModal3')}>
          <Row>
            <Col>
              Select an option
            </Col>
          </Row>
          <Row>
            <Col>
              <Select
                placeholder='Options'
                value={this.state.selectOne}
                options={[ { value: 1, label: 'Example One' }, { value: 2, label: 'Example Two'}, { value: 3, label: 'Example Three'} ]}
                onChange={value => this.setState({ selectOne: value })} />
            </Col>
          </Row>
        </Modal>

        <Modal type='danger' title='With Checkboxes' buttonText='Close' isOpen={this.state.customizedModal4} onClose={e => this.onCloseModal('customizedModal4')}>
          <Row>
            <Col>
              True or False
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                type='radio'
                name='firstSet'
                label='True'
                onChange={e => {}} />
              <Input
                type='radio'
                name='firstSet'
                label='False'
                onChange={e => {}} />
            </Col>
          </Row>
        </Modal>

        <Modal type='warning' title='With Switches' buttonText='Save' isOpen={this.state.customizedModal5} onClose={e => this.onCloseModal('customizedModal5')}>
          <Row>
            <Col>
              Notify me when...
            </Col>
          </Row>
          <Row>
            <Col grow={false}>
              <Switch type='info' isOn={this.state.switches[0]} onChange={e => this.onSwitchChange(0)}/>
            </Col>
            <Col grow={false}>
              <Switch type='danger' isOn={this.state.switches[1]} onChange={e => this.onSwitchChange(1)}/>
            </Col>
          </Row>
        </Modal>

        <Modal type='info' buttonText='Save' title='Update Profile' isOpen={this.state.customizedModal1} onClose={e => this.onCloseModal('customizedModal1')}>
          <Row>
            <Col align='center'>
              Update your information below
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='col-md-6'>
                <Input
                  onChange={e => this.onTextChange('firstName', e)}
                  label='First Name'
                  value={this.state.firstName} />
              </div>
              <div className='col-md-6'>
                <Input
                  onChange={e => this.onTextChange('lastName', e)}
                  label='Last Name'
                  value={this.state.lastName} />
              </div>
            </Col>
          </Row>
        </Modal>

      </div>
    );
  }

  render() {
    return (
      <Page actionBar={this.renderBreadcrumbs()} title='Modals'>
        <Modal type='success' title='Woot' isOpen={this.state.successModal} onClose={e => this.onCloseModal('successModal')}>
          You did a thing!
        </Modal>

        <Modal type='danger' title='Aw' isOpen={this.state.dangerModal} onClose={e => this.onCloseModal('dangerModal')}>
          You did a bad thing!
        </Modal>

        <Modal type='info' title='Hey' isOpen={this.state.infoModal} onClose={e => this.onCloseModal('infoModal')}>
          Listen!
        </Modal>

        <Modal type='primary' title='Hello' isOpen={this.state.primaryModal} onClose={e => this.onCloseModal('primaryModal')}>
          This is a modal!
        </Modal>

        <Modal type='warning' title='Whoa' isOpen={this.state.warningModal} onClose={e => this.onCloseModal('warningModal')}>
          You're about to do a thing!
        </Modal>

        {this.renderCustomizedModals()}

        <Row>
          <Col>
            <Panel title='Message Modals'>
              <Row>
                <Col grow={false}>
                  <Button type='primary' onClick={e => this.onRenderModal('primaryModal')} />
                </Col>
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
        <Row>
          <Col>
            <Panel title='Customized Modals'>
              <Row>
                <Col grow={false}>
                  <Button type='primary' title='Add a Link' icon='fa fa-group' onClick={e => this.onRenderModal('customizedModal2')} />
                </Col>
                <Col grow={false}>
                  <Button type='success' title='Selectable Options' isIconHidden={true} onClick={e => this.onRenderModal('customizedModal3')} />
                </Col>
                <Col grow={false}>
                  <Button type='warning' title='With Switches' icon='fa fa-magic' onClick={e => this.onRenderModal('customizedModal5')} />
                </Col>
                <Col grow={false}>
                  <Button type='danger' title='With Checkboxes' isIconHidden={true} onClick={e => this.onRenderModal('customizedModal4')} />
                </Col>
                <Col grow={false}>
                  <Button type='info' title='Update Profile' icon='fa fa-wrench' onClick={e => this.onRenderModal('customizedModal1')} />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

