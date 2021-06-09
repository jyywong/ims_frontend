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
			localStorage.setItem('refresh', response.data['refresh']);
			localStorage.setItem('access', response.data['access']);
			const userID = jwt_decode(localStorage.getItem('access')).user_id;
			await dispatch(getUserDetailsAttemptTC(userID));
		} catch (err) {
			return Promise.reject(err);
		}
	};
};

export const getUserDetailsAttemptTC = (userID) => {
	return async (dispatch, getState) => {
		try {
			const response = await getUserDetails(userID);
			await dispatch(loginSuccess(response.data));
		} catch (error) {
			return Promise.reject(error);
		}
	};
};
