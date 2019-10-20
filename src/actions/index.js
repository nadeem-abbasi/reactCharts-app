import { GET_CHART_DATA, DATA_ERROR } from './types';
import { fetchData } from '../api';

const sendData = () => async (dispatch) => {
	const chartData = await fetchData();
	if (chartData.success) {
		dispatch({ type: GET_CHART_DATA, payload: chartData.data });
	} else {
		dispatch({ type: DATA_ERROR, payload: true });
	}
};

export { sendData };
