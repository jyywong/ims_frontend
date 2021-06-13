import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api/';
export const login = (username, password) =>
	axios.post(baseURL + 'token/', {
		username,
		password
	});

export const getUserDetails = (userID) => axios.get(`http://127.0.0.1:8000/api/user/${userID}`);

export const signUp = (username, email, password, password2) =>
	axios.post(baseURL + 'register/', {
		username,
		email,
		password,
		password2
	});
