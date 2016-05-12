import React from 'react';
import { Row, Col } from 'react-flex-proto';

import { Page, Panel, Input } from 'src/components';

export class InputDemo extends React.Component {

  state = {
    success: '',
    fail: '',
    warning: '',
  }

  onCloseModal(modalName) {
    this.setState({ [modalName]: false });
  }

  onRenderModal(modalName) {
    this.setState({ [modalName]: true });
  }

  onTextChange(key, event) {
    this.setState({ [key]: event.currentTarget.value });
  }

  render() {
    return (
      <Page title='Inputs'>
        <Row>
          <Col>
            <Panel title='Text Inputs'>
              <Input
                onChange={e => this.onTextChange('success', e)}
                onValidate={() => true}
                label='Success'
                value={this.state.success} />

              <Input
                onChange={e => this.onTextChange('success')}
                onValidate={() => true}
                label='Success No Icon'
                hasFeedbackIcon={false}
                value={this.state.success} />

              <Input
                onChange={e => this.onTextChange('fail', e)}
                onValidate={() => false}
                label='Error'
                value={this.state.error} />

              <Input
                onChange={e => this.onTextChange('warning', e)}
                onValidate={() => 'warning'}
                label='Warning'
                value={this.state.warning} />

              <Input
                onValidate={() => true}
                label='Addon Left'
                addonLeft={<i className='fa fa-check' />}
                value={this.state.addonLeft}
                onChange={() => {}} />

              <Input
                onValidate={() => true}
                label='Addon Right'
                addonRight={<i className='fa fa-check' />}
                value={this.state.addonLeft}
                onChange={() => {}} />

              <Input
                label='Disabled'
                disabled={true}
                value='Disabled'
                onChange={() => {}} />

              <Input
                label='Placeholder'
                placeholder='Enter Address'
                onChange={() => {}} />

              <Input
                label='With Help Block'
                placeholder='Enter Credit Card'
                helpLabel='Do not enter spaces.'
                onChange={() => {}} />
            </Panel>
          </Col>
          <Col>
            <Panel title='Checkboxes'>
              <Input
                type='checkbox'
                onValidate={() => 'warning'}
                label='Warning'
                onChange={() => {}} />

              <Input
                type='checkbox'
                onValidate={() => true}
                label='Success'
                onChange={() => {}} />

              <Input
                type='checkbox'
                onValidate={() => false}
                label='Error'
                onChange={() => {}} />
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

