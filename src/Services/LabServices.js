import axios from 'axios';
import jwt_decode from 'jwt-decode';

const baseURL = 'https://nameless-chamber-50852.herokuapp.com/api/';
axios.interceptors.request.use((request) => {
	if (localStorage.getItem('access')) {
		request.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
	}
	console.log(request);
	return request;
});

const responseWhenInvalidLogin = 'No active account found with the given credentials';
axios.interceptors.response.use(
	(response) => response,
	(error) => {
		console.log('This is the error.reponse');
		console.log(error.response);
		const originalRequest = error.config;
		if (error.response.status === 401 && error.config.url === baseURL + 'token/refresh/') {
			return Promise.reject(error);
		}
		if (
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized' &&
			error.response.data.detail === responseWhenInvalidLogin
		) {
			throw new Error(error.response.data.detail);
		} else if (
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized' &&
			(error.response.data === 'Authentication credentials were not provided.' ||
				error.response.data.detail === 'Given token not valid for any token type')
		) {
			console.log('I am there');
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

export const isRefreshTokenValid = () => {
	const refreshToken = localStorage.getItem('refresh');
	if (refreshToken) {
		const now = Math.ceil(Date.now() / 1000);
		if (jwt_decode(refreshToken).exp > now) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

export const login = (username, password) =>
	axios.post(baseURL + 'token/', {
		username,
		password
	});

export const testIfRefreshTokenValid = () =>
	axios.post(baseURL + 'token/refresh/', { refresh: localStorage.getItem('refresh') });

export const getUserDetails = (userID) => axios.get(baseURL + `user/${userID}`);

export const getLabList = () => axios.get(baseURL + 'labs');

export const getInvList = () => axios.get(baseURL + 'inventories');

export const getItemList = () => axios.get(baseURL + 'items');

export const updateUsersCall = () => axios.get(baseURL + 'users');

export const getItemBatches = () => axios.get(baseURL + 'item_batches');

export const getItemOrders = () => axios.get(baseURL + 'item_orders');

export const getLabInvites = () => axios.get(baseURL + 'lab_invites');

export const createNewLab = (name, description, userID) => {
	return axios.post(baseURL + 'labs', {
		name,
		description,
		members: [ Number(userID) ],
		inventories: []
	});
};

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

export const removeMemberCall = (labID, newMemberList) => {
	return axios.patch(baseURL + `lab/${labID}`, {
		members: newMemberList
	});
};

export const editLabDetailsCall = (labID, name, description) => {
	return axios.patch(baseURL + `lab/${labID}`, {
		name,
		description
	});
};

export const createNewItemCall = (invID, name, manufacturer, notes, initialQuantity, minQuantity) => {
	return axios.post(baseURL + 'items', {
		invID,
		name,
		manufacturer,
		notes,
		quantity: initialQuantity,
		minQuantity,
		notices: [],
		itemBatches: [],
		itemOrders: []
	});
};

export const deleteItemCall = (itemID) => {
	return axios.delete(baseURL + `item/${itemID}`);
};

export const editItemDetailCall = (itemID, name, manufacturer, notes, quantity, minQuantity) => {
	return axios.patch(baseURL + `item/${itemID}`, {
		name,
		manufacturer,
		notes,
		quantity,
		minQuantity
	});
};

export const createItemOrderCall = (item, orderRequester, quantityRequired, dateNeededBy, notes) => {
	return axios.post(baseURL + `item_orders`, {
		item,
		orderRequester,
		quantityRequired,
		dateNeededBy,
		notes
	});
};

export const createItemBatchCall = (item, expiryDate, quantity) => {
	return axios.post(baseURL + `item_batches`, {
		item,
		expiryDate,
		quantity
	});
};

export const updateItemBatchQuantityCall = (batchID, newQuantity) => {
	return axios.patch(baseURL + `item_batch/${batchID}`, {
		quantity: newQuantity
	});
};

export const getItemBatchHistory = (itemID) => {
	return axios.get(baseURL + `item_batch_history/${itemID}`);
};

export const getItemHistory = (itemID) => {
	return axios.get(baseURL + `item_history/${itemID}`);
};

export const acceptLabInvite = (inviteID) => {
	return axios.patch(baseURL + `lab_invite/${inviteID}`, {
		status: 'Accepted'
	});
};
