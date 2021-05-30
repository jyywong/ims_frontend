import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`;

const baseURL = 'http://127.0.0.1:8000/api/';
axios.interceptors.request.use((request) => {
	if (localStorage.getItem('access')) {
		request.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
	}
	return request;
});

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		console.log(error.config.url);
		console.log(error.response);
		console.log(error.response.status);
		if (error.response.status === 401 && error.config.url === baseURL + 'token/refresh/') {
			return Promise.reject(error);
		}
		if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
			console.log('Heyo');
		}
	}
);

export const getLabList = axios.get('http://127.0.0.1:8000/api/labs');

export const getInvList = axios.get('http://127.0.0.1:8000/api/inventories');

export const getItemList = axios.get('http://127.0.0.1:8000/api/items');
