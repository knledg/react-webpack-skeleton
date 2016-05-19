import _ from 'lodash';
import React from 'react';

export class Textarea extends React.Component {

  static propTypes = {
    type: React.PropTypes.string,
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    isRounded: React.PropTypes.bool,
    value: React.PropTypes.node.isRequired,
  }

  static defaultProps = {
    name: '',
    className: '',
    value: '',
    disabled: false,
  }

  renderTextarea() {
    return (
      <div>
        <label className="">{this.props.label}</label>
        <textarea
          className="form-control"
          disabled={this.props.disabled}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          ></textarea>
      </div>
    );
  }

  render() {
    return (
      <div className={`form-group ${this.props.className}`}>
        {this.renderTextarea()}
      </div>
    );
  }
}
