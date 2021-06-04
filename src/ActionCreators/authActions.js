import jwt_decode from 'jwt-decode';
import { login, getUserDetails } from '../Services/LabServices';

export const loginSuccess = (user) => {
	return {
		type: 'LOGIN_SUCCESS',
		data: {
			user
		}
	};
};

export const loginAttemptTC = (username, password) => {
	return async (dispatch, getState) => {
		try {
			const response = await login(username, password);
			console.log('Does it get here?');
			localStorage.setItem('refresh', response.data['refresh']);
			localStorage.setItem('access', response.data['access']);
			const userID = jwt_decode(localStorage.getItem('access')).user_id;
			dispatch(getUserDetailsAttemptTC(userID));
		} catch (err) {
			return Promise.reject(err);
		}
	};
};

export const getUserDetailsAttemptTC = (userID) => {
	return async (dispatch, getState) => {
		const response = await getUserDetails(userID);
		dispatch(loginSuccess(response.data));
		return 'hello';
	};
};
