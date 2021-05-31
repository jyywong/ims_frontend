import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

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
		const originalRequest = error.config;
		if (error.response.status === 401 && error.config.url === baseURL + 'token/refresh/') {
			return Promise.reject(error);
		}
		if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
			const refreshToken = localStorage.getItem('refresh');
			// const history = useHistory();
			if (refreshToken) {
				const now = Math.ceil(Date.now() / 1000);
				if (jwt_decode(refreshToken).exp > now) {
					return axios
						.post(baseURL + 'token/refresh/', { refresh: refreshToken })
						.then((response) => {
							localStorage.setItem('access', response.data['access']);
							return axios(originalRequest);
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					console.log('Refresh token is expired');
					// history.push('/');
				}
			} else {
				console.log('Refresh token does not exist');
				// history.push('/');
			}
		}
	}
);

export const getLabList = axios.get(baseURL + 'labs');

export const getInvList = axios.get(baseURL + 'inventories');

export const getItemList = axios.get(baseURL + 'items');

export const createNewInv = (labID, name, description, items) => {
	return axios.post(baseURL + 'inventories', {
		labID,
		name,
		description,
		items
	});
};

export const deleteInv = (invID) => {
	return axios.delete(baseURL + `inventory/${invID}`);
};

export const deleteInvs = (inventoriesToDelete) => {
	return axios.delete(baseURL + 'inventories', {
		inventoriesToDelete
	});
};

export const createNewLabInvite = (labID, inviteeEmail) => {
	return axios.post(baseURL + 'lab_invites', {
		lab_inviter: labID,
		inviteeEmail,
		status: 'Pending'
	});
};
