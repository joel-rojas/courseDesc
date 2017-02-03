import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Body from './body';

describe('Body component', () => {
  it('should render default text', () => {
    const body = TestUtils.renderIntoDocument(<Body/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(body, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
