import React from 'react'
import { shallow } from 'enzyme'
import Table from '../../components/Table'

test('should render Table correctly', () => {
    const wrapper = shallow(<Table/>);
    expect(wrapper).toMatchSnapshot();
});