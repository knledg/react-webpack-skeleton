import _ from 'lodash';
import React from 'react';

export class Input extends React.Component {

  static propTypes = {
    type: React.PropTypes.string,
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    helpLabel: React.PropTypes.string,
    label: React.PropTypes.string,
    addonLeft: React.PropTypes.node,
    addonRight: React.PropTypes.node,
    hasFeedback: React.PropTypes.bool,
    hasFeedbackIcon: React.PropTypes.bool,
    onValidate: React.PropTypes.func,
    value: React.PropTypes.node.isRequired,
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    isRounded: React.PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    value: '',
    type: 'text',
    hasFeedbackIcon: true,
    hasFeedback: true,
    onValidate: function noop() { },
    disabled: false,
  }

  getValidationResult() {
    if (! this.props.onValidate) {
      return '';
    }

    const validationResult = this.props.onValidate(this.props.value);

    if (validationResult === true || validationResult === 'success') {
      return 'success';
    } else if (validationResult === false || validationResult === 'error') {
      return 'error';
    } else if (validationResult === 'warning') {
      return 'warning';
    }

    throw new Error(`Unknown validation result on Input: ${validationResult}`);
  }

  /**
   * [getFeedback - determine if we should show the feedback icon on the right]
   * @return {string}
   */
  getFeedback() {
    if (! this.props.hasFeedbackIcon) {
      return '';
    }

    return 'has-feedback';
  }

  getStatus(status) {
    return status ? `has-${status}` : '';
  }

  renderTopLabel() {
    if (! this.props.label) {
      return null;
    }

    return <label className='control-label' htmlFor={this.props.id}>{this.props.label}</label>;
  }

  renderAddonLeft() {
    if (! this.props.addonLeft) {
      return null;
    }

    return (
      <span className='input-group-addon input-group-addon-primary addon-left'>
        {this.props.addonLeft}
      </span>
    );
  }

  renderSelect() {

  }

  renderCheckbox() {

  }

  renderTextArea() {

  }

  renderSwitch() {

  }

  renderRadio() {

  }

  renderInput() {
    if (_.includes(['select', 'checkbox', 'textarea', 'switch', 'radio'], this.props.type)) {
      return this[`render${_.startCase(this.props.type)}`]();
    }

    return (
      <input
        disabled={this.props.disabled}
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={`form-control ${this.props.isRounded ? 'form-control-rounded' : ''}`}
        key={this.props.id}
        onChange={this.props.onChange}
        value={this.props.value} />
    );
  }

  renderAddonRight() {
    if (! this.props.addonRight) {
      return null;
    }

    return this.props.addonRight;
  }

  renderFeedbackIcon(status) {
    if (! (status && this.props.hasFeedbackIcon)) {
      return null;
    }

    let icon;
    if (status === 'success') {
      icon = 'checkmark-circled';
    } else if (status === 'error') {
      icon = 'android-cancel';
    } else {
      icon = 'alert-circled';
    }

    return <i className={`ion-${icon} form-control-feedback`} />;
  }

  renderInputWrapper() {
    if (! (this.props.addonLeft && this.props.addonRight)) {
      return [
        this.renderAddonLeft(),
        this.renderInput(),
        this.renderAddonRight(),
        this.renderFeedbackIcon(status),
      ];
    }

    return (
      <div className='input-group'>
        {this.renderAddonLeft()}
        {this.renderInput()}
        {this.renderAddonRight()}
        {this.renderFeedbackIcon(status)}
      </div>
    );
  }

  render() {
    const status = this.getValidationResult(); // '', warning, success, error
    return (
      <div className={`form-group ${this.props.className} ${this.getFeedback()} ${this.getStatus(status)}`}>
        {this.renderTopLabel()}
        {this.renderInputWrapper()}
      </div>
    );
  }
}
