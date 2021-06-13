const initialState = {
	loggedIn: false,
	user: {
		id: '',
		username: '',
		labs: []
	}
};

const loginSuccess = (state, action) => {
	const { data } = action;
	return {
		loggedIn: true,
		user: data.user
	};
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return loginSuccess(state, action);
		default:
			return state;
	}
};

export default authReducer;
