import React from 'react';

export class Switch extends React.Component {

  static propTypes = {
    isOn: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    type: React.PropTypes.string,
    className: React.PropTypes.string,
  }

  static defaultProps = {
    isOn: true,
    type: 'primary',
    className: '',
  }

  renderOn() {
    return (
      <div className="bootstrap-switch-container">
        <span className={`bootstrap-switch-handle-on bootstrap-switch-${this.props.type}`}>ON</span>
        <span className="bootstrap-switch-label">&nbsp;</span>
      </div>
    );
  }

  renderOff() {
    return (
      <div className="bootstrap-switch-container">
        <span className="bootstrap-switch-label pull-left">&nbsp;</span>
        <span className="bootstrap-switch-handle-off bootstrap-switch-default pull-right">OFF</span>
      </div>
    );
  }

  render() {
    return (
      <div className={`switch-container ${this.props.isOn ? this.props.type : ''} ${this.props.className}`} onClick={this.props.onChange}>
        <div className="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-small bootstrap-switch-animate bootstrap-switch-on">
         {this.props.isOn ? this.renderOn() : this.renderOff()}
        </div>
      </div>
    );
  }
}
