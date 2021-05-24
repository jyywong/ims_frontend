import { combineReducers } from 'redux';

const initialState = {
	byID: {
		1: {
			id: 1,
			name: 'TestUser 1',
			email: 'email'
		},
		2: {
			id: 2,
			name: 'TestUser 2',
			email: 'email'
		},
		3: {
			id: 3,
			name: 'TestUser 3',
			email: 'email'
		}
	},
	allIDs: [ 1, 2, 3 ]
};

const usersByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
const usersAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const usersReducer = combineReducers({
	byID: usersByIDReducer,
	allIDs: usersAllIDsReducer
});

export default usersReducer;
