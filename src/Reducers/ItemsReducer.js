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
	const {
		invID,
		id,
		name,
		manufacturer,
		notes,
		initialQuantity,
		minQuantity,
		notices,
		itemBatches,
		itemOrders
	} = data;
	return {
		...state,
		[data.id]: {
			id,
			invID,
			name,
			manufacturer,
			notes,
			initialQuantity,
			minQuantity,
			notices,
			itemBatches,
			itemOrders
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
	const { itemID, name, manufacturer, notes, quantity, minQuantity } = data;
	return {
		...state,
		[itemID]: {
			...state[itemID],
			name,
			manufacturer,
			notes,
			quantity,
			minQuantity
		}
	};
};
const updateItems = (state, action) => {
	const { data } = action;
	return data.newState;
};

const addItemOrder = (state, action) => {
	const { data } = action;
	return {
		...state,
		[data.item]: {
			...state[data.item],
			itemOrders: [ ...state[data.item].itemOrders, data.id ]
		}
	};
};

const addItemBatch = (state, action) => {
	const { data } = action;
	return {
		...state,
		[data.item]: {
			...state[data.item],
			itemBatches: [ ...state[data.item].itemBatches, data.id ]
		}
	};
};

const itemsByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'UPDATE_ITEMS':
			return updateItems(state, action);
		case 'ADD_ITEM':
			return addItem(state, action);
		case 'DELETE_ITEM':
			return deleteItem(state, action);
		case 'EDIT_ITEM':
			return editItem(state, action);
		case 'ADD_ITEM_ORDER':
			return addItemOrder(state, action);
		case 'ADD_ITEM_BATCH':
			return addItemBatch(state, action);
		default:
			return state;
	}
};
const itemsAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'UPDATE_ITEMS':
			return action.data.newItemIDs;
		case 'ADD_ITEM':
			return [ ...state, action.data.id ];
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
