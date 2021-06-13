import { combineReducers } from 'redux';

const initialState = {
	byID: {
		1: {
			id: 1,
			userID: 1,
			username: 'Testuser 1',
			message: 'This is a test message.'
		},
		2: {
			id: 2,
			user: 2,
			username: 'Testuser 2',
			message: 'This is another test message.'
		},
		3: {
			id: 3,
			user: 3,
			username: 'Testuser 3',
			message: 'This is the other test message.'
		}
	},
	allIDs: [ 1, 2, 3 ]
};

const noticesByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
const noticesAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const noticesReducer = combineReducers({
	byID: noticesByIDReducer,
	allIDs: noticesAllIDsReducer
});

export default noticesReducer;
