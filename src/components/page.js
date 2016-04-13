import React from 'react';
import { Row, Col } from 'react-flex-proto';

export class Page extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    actionBar: React.PropTypes.node,
  }

  renderTitle() {
    if (! this.props.title) {
      return null;
    }

    return (
      <Col>
        <h1 className='page-header'>{this.props.title}</h1>
      </Col>
    );
  }

  renderActionBar() {
    if (! this.props.actionBar) {
      return null;
    }

    return (
      <Col align='right'>
        {this.props.actionBar}
      </Col>
    );
  }

  render() {
    return (
      <div>
        <Row>
          {this.renderTitle()}
          {this.renderActionBar()}
        </Row>
        {this.props.children}
      </div>
    );
  }
}
