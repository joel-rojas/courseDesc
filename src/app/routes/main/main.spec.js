import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Main from './main';

describe('Main component', () => {
  it('should render default text', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(main, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
