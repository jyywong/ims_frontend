import { combineReducers } from 'redux';
import DeleteInventoryModal from '../PageComponents/Dashboard/DeleteInventoryModal';
import AddItem from '../PageComponents/InventoryDash/AddItem';

const initialState = {
	byID: {
		1: {
			id: 1,
			labID: 1,
			name: 'TestInventory 1',
			description: 'this is testinv 1',
			items: [ 1, 2, 3 ]
		},
		2: {
			id: 2,
			labID: 1,
			name: 'TestInventory 2',
			description: 'this is testinv 2',
			items: [ 4, 5 ]
		},
		3: {
			id: 3,
			labID: 2,
			name: 'TestInventory 3',
			description: 'this is testinv 3',
			items: [ 6, 7 ]
		},
		4: {
			id: 4,
			labID: 2,
			name: 'TestInventory 4',
			description: 'this is testinv 4',
			items: [ 8 ]
		}
	},
	allIDs: [ 1, 2, 3, 4 ]
};
// HELPER FUNCTIONS START
const addInventory = (state, action) => {
	const { data } = action;

	return {
		...state,
		[data.newInvID]: {
			id: data.newInvID,
			labID: data.labID,
			name: data.name,
			description: data.desc,
			items: []
		}
	};
};
const deleteInventory = (state, action) => {
	const { data } = action;
	const resultState = {};
	for (const [ key, value ] of Object.entries(state)) {
		if (!data.invID.includes(Number(key))) {
			resultState[key] = value;
		}
	}
	return resultState;
};

const addItem = (state, action) => {
	const { data } = action;
	const inv = state[data.invID];
	return {
		...state,
		[data.invID]: {
			...inv,
			items: [ ...inv.items, data.newItemID ]
		}
	};
};
const deleteItem = (state, action) => {
	const { data } = action;
	const inv = state[data.invID];
	return {
		...state,
		[data.invID]: {
			...inv,
			items: inv.items.filter((item) => !data.itemIDs.includes(item))
		}
	};
};
// HELPER FUNCTIONS END

// REDUCERS START
const invsByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'ADD_INVENTORY':
			return addInventory(state, action);
		case 'DELETE_INVENTORY':
			return deleteInventory(state, action);
		case 'ADD_ITEM':
			return addItem(state, action);
		case 'DELETE_ITEM':
			return deleteItem(state, action);
		default:
			return state;
	}
};
const invsAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'ADD_INVENTORY':
			return [ ...state, action.data.newInvID ];
		case 'DELETE_INVENTORY':
			return state.filter((id) => !action.data.invID.includes(id));
		default:
			return state;
	}
};

// REDUCERS END

const invsReducer = combineReducers({
	byID: invsByIDReducer,
	allIDs: invsAllIDsReducer
});

export default invsReducer;
