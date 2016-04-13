import React from 'react';
import { Link } from 'react-router';

import { Row, Col } from 'react-flex-proto';

export const NotFound = React.createClass({
  render() {
    return (
      <Row alignItems='center'>
        <Col className='warning'>
          <strong>404</strong>
          <div>
            <h3>Page Not Found!</h3>
            <Link to='/'>Back To Home</Link>
          </div>
        </Col>
      </Row>
    );
  },
});
