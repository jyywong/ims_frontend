import { combineReducers } from 'redux';
import { updateUsersCall } from '../Services/LabServices';

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

const updateUsers = (state, action) => {
	const { data } = action;
	return data.newState;
};

const usersByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'UPDATE_USERS':
			return updateUsers(state, action);
		default:
			return state;
	}
};
const usersAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'UPDATE_USERS':
			return action.data.newUserIDs;
		default:
			return state;
	}
};

const usersReducer = combineReducers({
	byID: usersByIDReducer,
	allIDs: usersAllIDsReducer
});

export default usersReducer;
