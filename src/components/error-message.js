import React from 'react';

export class ErrorMessage extends React.Component {
  static propTypes = {
    error: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className='red-text'>
        {this.props.error}
      </div>
    );
  }
}
