import React from 'react';
import cx from 'classnames';

export class Switch extends React.Component {

  static propTypes = {
    isOn: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    type: React.PropTypes.string,
  }

  static defaultProps = {
    isOn: true,
    type: 'primary',
  }


  render() {
    const widthOffset = this.props.isOn ? '0' : '-50%';

    return (
      <div className={`switch-container ${this.props.isOn ? this.props.type : ''}`} style={{marginRight: '10px'}} onClick={this.props.onChange}>
        <div className="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-small bootstrap-switch-animate bootstrap-switch-on" style={{width: '84px'}}>
          <div className="bootstrap-switch-container" style={{width: '143px', marginLeft: widthOffset}}>
            <span className={`bootstrap-switch-handle-on bootstrap-switch-${this.props.type}`} style={{width: '41px'}}>ON</span>
            <span className="bootstrap-switch-label" style={{width: '41px'}}>&nbsp;</span>
            <span className="bootstrap-switch-handle-off bootstrap-switch-default" style={{width: '41px'}}>OFF</span>
          </div>
        </div>
      </div>
    );
  }
}
