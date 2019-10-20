import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

export const testStore = () => {
	const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(
		createStore
	);
	return createStoreWithMiddleware(rootReducer);
};
