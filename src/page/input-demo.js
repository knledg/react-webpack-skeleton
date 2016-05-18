import React from 'react';
import { Row, Col } from 'react-flex-proto';

import { Page, Panel, Input, Select } from 'src/components';

export class InputDemo extends React.Component {

  state = {}

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
                onChange={e => this.onTextChange('success2', e)}
                onValidate={() => true}
                label='Success No Icon'
                hasFeedbackIcon={false}
                value={this.state.success2} />

              <Input
                onChange={e => this.onTextChange('fail', e)}
                onValidate={() => false}
                label='Error'
                value={this.state.fail} />

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
                onChange={e => this.onTextChange('addonLeft', e)} />

              <Input
                onValidate={() => true}
                label='Addon Right'
                addonRight={<i className='fa fa-check' />}
                value={this.state.addonRight}
                onChange={e => this.onTextChange('addonRight', e)} />

              <Input
                label='Disabled'
                disabled={true}
                value='Disabled'
                onChange={() => {}} />

              <Input
                label='Placeholder'
                placeholder='Enter Address'
                onChange={e => this.onTextChange('address', e)}
                value={this.state.address} />

              <Input
                label='With Help Block'
                placeholder='Enter Credit Card'
                helpLabel='Do not enter spaces.'
                onChange={e => this.onTextChange('creditCard', e)}
                value={this.state.creditCard} />
            </Panel>
          </Col>
          <Col>
            <Panel title='Select Dropdowns'>
              <Select
                placeholder='Standard Select'
                options={[ { value: 1, label: 'One' } ]} />

              <Select
                placeholder='With Search'
                isSearchable={true}
                options={[ { value: 1, label: 'One' }, { value: 2, label: 'Two' } ]} />
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

              <Input
                type='checkbox'
                label='No validation'
                onChange={() => {}} />

              <Input
                type='checkbox'
                disabled={true}
                label='Disabled'
                onChange={() => {}} />
            </Panel>
          </Col>
          <Col>
            <Panel title='Radio Buttons'>
              <Input
                type='radio'
                name='firstSet'
                label='Option 1'
                onChange={() => {}} />

              <Input
                type='radio'
                name='firstSet'
                label='Option 2'
                onChange={() => {}} />

              <Input
                type='radio'
                name='firstSet'
                label='Option 3'
                onChange={() => {}} />

              <Input
                type='radio'
                name='firstSet'
                disabled={true}
                label='Option 4'
                onChange={() => {}} />
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

