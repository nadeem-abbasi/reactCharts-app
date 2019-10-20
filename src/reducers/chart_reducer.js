import { GET_CHART_DATA, DATA_ERROR } from '../actions/types';

const chartReducer = (state = [], action) => {
	switch (action.type) {
		case GET_CHART_DATA:
			return { ...state, chartData: action.payload, dataError: false };
		case DATA_ERROR:
			return { ...state, dataError: action.payload };
		default:
			return state;
	}
};
export default chartReducer;
