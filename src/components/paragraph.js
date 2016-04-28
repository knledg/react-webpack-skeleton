import React from 'react';

export class Paragraph extends React.Component {

  render() {
    return (
      <div className='panel panel-blur xsmall-panel light-text'>
        {this.props.children}
      </div>
    );
  }
}
