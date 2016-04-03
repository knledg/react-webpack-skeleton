import React from 'react';
import expect from 'expect';
import Utils from 'react-addons-test-utils';

import { Welcome } from 'src/page/welcome';

describe('Welcome', () => {
  it('renders an h1', () => {
    const component = Utils.renderIntoDocument(<Welcome />);

    const h1 = Utils.findRenderedDOMComponentWithTag(component, 'h1');

    expect(h1.getDOMNode().textContent).toEqual('React Webpack Skeleton');
  });
});
