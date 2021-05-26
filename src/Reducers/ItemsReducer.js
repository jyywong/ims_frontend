import { combineReducers } from 'redux';

const initialState = {
	byID: {
		1: {
			id: 1,
			invID: 1,
			name: 'Sugar',
			desc: 'Its sugar',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: [ 1, 2 ]
		},
		2: {
			id: 2,
			invID: 1,
			name: 'Wood',
			desc: 'Its wood',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: [ 1, 2 ]
		},
		3: {
			id: 3,
			invID: 1,
			name: 'Coal',
			desc: 'Its coal',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: [ 1 ]
		},
		4: {
			id: 4,
			invID: 2,
			name: 'String',
			desc: 'Its string',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: [ 3 ]
		},
		5: {
			id: 5,
			invID: 2,
			name: 'Wool',
			desc: 'Its wool',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: []
		},
		6: {
			id: 6,
			invID: 3,
			name: 'Water',
			desc: 'Its water',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: [ 2, 3 ]
		},
		7: {
			id: 7,
			invID: 3,
			name: 'Metal',
			desc: 'Its metal',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: [ 1, 3 ]
		},
		8: {
			id: 8,
			invID: 4,
			name: 'Plastic',
			desc: 'Its plastic',
			manu: 'Thermofisher',
			notes: 'Misc notes',
			notices: [ 1 ]
		}
	},
	allIDs: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
};

const addItem = (state, action) => {
	const { data } = action;
	const { invID, newItemID, name, desc, manu, notes } = data;
	return {
		...state,
		[data.newItemID]: {
			id: newItemID,
			invID,
			name,
			desc,
			manu,
			notes
		}
	};
};

const deleteItem = (state, action) => {
	const { data } = action;
	const resultState = {};
	for (const [ key, value ] of Object.entries(state)) {
		if (!data.itemIDs.includes(Number(key))) {
			resultState[key] = value;
		}
	}
	return resultState;
};

const editItem = (state, action) => {
	const { data } = action;
	const { itemID, name, desc, manu, notes } = data;
	return {
		...state,
		[itemID]: {
			...state[itemID],
			name,
			desc,
			manu,
			notes
		}
	};
};

const itemsByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return addItem(state, action);
		case 'DELETE_ITEM':
			return deleteItem(state, action);
		case 'EDIT_ITEM':
			return editItem(state, action);
		default:
			return state;
	}
};
const itemsAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [ ...state, action.data.newItemID ];
		case 'DELETE_ITEM':
			return state.filter((item) => !action.data.itemIDs.includes(item));
		default:
			return state;
	}
};

const itemsReducer = combineReducers({
	byID: itemsByIDReducer,
	allIDs: itemsAllIDsReducer
});

export default itemsReducer;
