import { shallow } from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import HorizontalLine from '.'

describe('HorizontalLine', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HorizontalLine />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});