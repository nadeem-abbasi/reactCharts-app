import moxios from 'moxios';
import { testStore } from './config';
import { sendData } from '../actions';

describe('fetchPosts action', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('Store is updated correctly', () => {
		const expectedState = {
			data: [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]],
			signal: [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]]
		};
		const store = testStore();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			});
		});

		return store.dispatch(sendData()).then(() => {
			const newState = store.getState();
			expect(newState.chartReducer.chartData).toBe(expectedState);
		});
	});
});
