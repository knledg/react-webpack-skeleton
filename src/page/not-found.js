import React from 'react';
import { Link } from 'react-router';

import { Flex, Item } from 'react-flex';

export const NotFound = React.createClass({
  render() {
    return (
      <Flex alignItems='center'>
        <Item className='warning'>
          <strong>404</strong>
          <div>
            <h3>Page Not Found!</h3>
            <Link to='/'>Back To Home</Link>
          </div>
        </Item>
      </Flex>
    );
  },
});
