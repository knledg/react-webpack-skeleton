import React from 'react';
import expect from 'expect';
import Utils from 'react-addons-test-utils';

import { Page } from 'react-blur-admin';

describe('Page', () => {
  it('renders an h1', () => {
    const component = Utils.renderIntoDocument(<Page title='React Webpack Skeleton' />);
    const h1 = Utils.findRenderedDOMComponentWithTag(component, 'h1');
    expect(h1.textContent).toEqual('React Webpack Skeleton');
  });
});
