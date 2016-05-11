import React from 'react';

export class Panel extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    size: React.PropTypes.string,
  }

  defaultProps = {
    className: '',
    size: 'md',
  }

  renderHeader() {
    if (! this.props.title) {
      return null;
    }

    return (
      <div className='panel-heading clearfix'>
        <div className='panel-title'>
          {this.props.title}
        </div>
      </div>
    );
  }

  renderPanelSize() {
    switch (this.props.size) {
    case 'xs':
    case 'extra-small':
      return 'xsmall-panel';

    case 'sm':
    case 'small':
      return 'small-panel';

    case 'md':
    case 'medium':
      return 'medium-panel';

    case 'lg':
    case 'large':
      return 'large-panel';

    case 'auto':
    case 'none':
    default:
      return '';
    }
  }

  render() {
    return (
      <div className={`panel panel-blur ${this.renderPanelSize()} light-text with-scroll ${this.props.className}`}>
        {this.renderHeader()}
        <div className='panel-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
}