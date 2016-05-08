import React from 'react';

export class Panel extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
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

  render() {
    return (
      <div className='panel panel-blur xsmall-panel light-text with-scroll'>
        {this.renderHeader()}
        <div className='panel-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
