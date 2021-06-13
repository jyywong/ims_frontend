import axios from 'axios';
const baseURL = 'https://nameless-chamber-50852.herokuapp.com/api/';
export const login = (username, password) =>
	axios.post(baseURL + 'token/', {
		username,
		password
	});

export const getUserDetails = (userID) => axios.get(baseURL + `user/${userID}/`);

export const signUp = (username, email, password, password2) =>
	axios.post(baseURL + 'register', {
		username,
		email,
		password,
		password2
	});
