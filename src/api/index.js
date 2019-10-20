import axios from 'axios';

const fetchData = () => {
	return axios
		.get('./data.json')
		.then((result) => {
			return { success: true, data: result.data };
		})
		.catch((error) => {
			return { success: false, data: error };
		});
};

export { fetchData };
