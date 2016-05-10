import React from 'react';

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
        <Panel>
          <Input
            onChange={(e) => this.onTextChange('success', e)}
            onValidate={() => true}
            label='Success'
            value={this.state.success} />
          <Input
            onChange={(e) => this.onTextChange('success')}
            onValidate={() => true}
            label='Success No Icon'
            hasFeedbackIcon={false}
            value={this.state.success} />

          <Input
            onChange={(e) => this.onTextChange('fail', e)}
            onValidate={() => false}
            label='Error'
            value={this.state.error} />

          <Input
            onChange={(e) => this.onTextChange('warning', e)}
            onValidate={() => 'warning'}
            label='Warning'
            value={this.state.warning} />

          <Input
            onValidate={() => true}
            label='Addon Left'
            addonLeft={<i className='fa fa-check' />}
            value={this.state.addonLeft}
            onChange={() => {}} />

        </Panel>
      </Page>
    );
  }
}

