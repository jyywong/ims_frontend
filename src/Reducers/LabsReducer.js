import { prettyDOM } from '@testing-library/dom';
import { combineReducers } from 'redux';
import AddInventoryModal from '../PageComponents/Dashboard/AddInventoryModal';
import DeleteInventoryModal from '../PageComponents/Dashboard/DeleteInventoryModal';

const initialState = {
	byID: {
		1: {
			id: 1,
			name: 'Test Lab 1',
			description: 'This is test lab 1',
			members: [ 1, 2 ],
			inventories: [ 1, 2 ]
		},
		2: {
			id: 2,
			name: 'Test Lab 2',
			description: 'This is test lab 2',
			members: [ 2, 3 ],
			inventories: [ 3, 4 ]
		}
	},
	allIDs: [ 1, 2 ]
};

const addLabMember = (state, action) => {
	const { data } = action;
	const lab = state[data.labID];
	// This action would wait on new member accepting invite, so I will
	// leave this for when I have a backend
	return {
		...state,
		[data.labID]: {
			...lab,
			members: [ ...lab.members, data.newMemberID ]
		}
	};
};
const removeLabMember = (state, action) => {
	const { data } = action;
	const lab = state[data.labID];
	return {
		...state,
		[data.labID]: {
			...lab,
			members: lab.members.filter((member) => !data.memberIDs.includes(member))
		}
	};
};
const addInventory = (state, action) => {
	const { data } = action;
	const lab = state[data.labID];

	return {
		...state,
		[data.labID]: {
			...lab,
			inventories: [ ...lab.inventories, data.newInvID ]
		}
	};
};
const deleteInventory = (state, action) => {
	const { data } = action;
	const lab = state[data.labID];
	return {
		...state,
		[data.labID]: {
			...lab,
			inventories: lab.inventories.filter((id) => !action.data.invID.includes(id))
		}
	};
};

const updateLabs = (state, action) => {
	const { data } = action;
	console.log(data.newState);
	return data.newState;
};

const labsByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'UPDATE_LABS':
			return updateLabs(state, action);
		case 'EDIT_LAB_DETAILS':
			return {
				...state,
				[action.data.labID]: {
					...state[action.data.labID],
					name: action.data.name,
					description: action.data.desc
				}
			};
		case 'ADD_LAB_MEMBER':
			return addLabMember(state, action);
		case 'REMOVE_LAB_MEMBER':
			return removeLabMember(state, action);
		case 'ADD_INVENTORY':
			return addInventory(state, action);
		case 'DELETE_INVENTORY':
			return deleteInventory(state, action);
		default:
			return state;
	}
};

const labsAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'UPDATE_LABS':
			return action.data.newLabIDs;
		default:
			return state;
	}
};

const labsReducer = combineReducers({
	byID: labsByIDReducer,
	allIDs: labsAllIDsReducer
});

export default labsReducer;
