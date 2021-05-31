import jwt_decode from 'jwt-decode';
import { login, getUserDetails } from '../Services/AuthServices';

export const loginSuccess = (user) => {
	return {
		type: 'LOGIN_SUCCESS',
		data: {
			user
		}
	};
};

export const loginAttempt = (username, password) => {
	return async (dispatch, getState) => {
		const response = await login(username, password);
		localStorage.setItem('refresh', response.data['refresh']);
		localStorage.setItem('access', response.data['access']);
		const userID = jwt_decode(localStorage.getItem('access')).user_id;
		dispatch(getUserDetailsAttempt(userID));
	};
};

export const getUserDetailsAttempt = (userID) => {
	return async (dispatch, getState) => {
		const response = await getUserDetails(userID);
		dispatch(loginSuccess(response.data));
		return 'hello';
	};
};
