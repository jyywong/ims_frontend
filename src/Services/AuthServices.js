import axios from 'axios';

export const login = (username, password) =>
	axios.post('http://127.0.0.1:8000/api/token/', {
		username,
		password
	});

export const getUserDetails = (userID) => axios.get(`http://127.0.0.1:8000/api/user/${userID}`);
