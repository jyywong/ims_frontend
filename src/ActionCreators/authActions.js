export const loginSuccess = (user) => {
	return {
		type: 'LOGIN_SUCCESS',
		data: {
			user
		}
	};
};
