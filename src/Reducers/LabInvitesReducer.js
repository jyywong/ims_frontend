import { combineReducers } from 'redux';

const initialState = {
	byID: {
		1: {
			id: 1,
			invitee: 4,
			lab_inviter: 6,
			created_at: '2021-05-30',
			status: 'Pending'
		}
	},
	allIDs: [ 1 ]
};

const updateLabInvites = (state, action) => {
	const { data } = action;
	return data.newState;
};

const labInvitesByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'UPDATE_LAB_INVITES':
			return updateLabInvites(state, action);
		default:
			return state;
	}
};

const labInvitesAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'UPDATE_LAB_INVITES':
			return action.data.newIDs;
		default:
			return state;
	}
};

const labInvitesReducer = combineReducers({
	byID: labInvitesByIDReducer,
	allIDs: labInvitesAllIDsReducer
});

export default labInvitesReducer;
