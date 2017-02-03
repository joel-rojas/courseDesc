import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Page from './page';

describe('Page component', () => {
  it('should render default text', () => {
    const page = TestUtils.renderIntoDocument(<Page/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(page, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
