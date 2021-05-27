import axios from 'axios';

export const login = (username, password) =>
	axios.post('http://127.0.0.1:8000/api/token/', {
		username,
		password
	});
