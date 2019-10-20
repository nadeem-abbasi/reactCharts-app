import React from 'react';
import { testStore } from './config';
import { shallow, mount } from './enzyme';
import { Charts } from '../components/';

describe('Chart Component', () => {
	const store = testStore();
	it('renders without error', () => {
		const component = shallow(<Charts store={store} />);
		expect(component.length).toBe(1);
	});

	it('should render MainChart component', () => {
		const component = mount(<Charts store={store} />);
		expect(component.find('MainChart').exists()).toBe(true);
	});
});
