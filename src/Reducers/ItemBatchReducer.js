import { combineReducers } from 'redux';

const initialState = {
	byID: {
		1: {
			id: 1,
			item: 3,
			quantity: 5,
			expiryData: new Date(),
			notes: 'Hello, I need this'
		},
		2: {
			id: 2,
			item: 3,
			quantity: 7,
			expiryDate: new Date(),
			notes: 'Hello, I need this'
		}
	},
	allIDs: [ 1, 2 ]
};

const updateItemBatches = (state, action) => {
	const { data } = action;
	return data.newState;
};

const addItemBatch = (state, action) => {
	const { data } = action;
	const { id, item, expiryDate, quantity } = data;
	return {
		...state,
		[id]: {
			id,
			item,
			expiryDate,
			quantity
		}
	};
};

const itemBatchByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'UPDATE_ITEM_BATCHES':
			return updateItemBatches(state, action);
		case 'ADD_ITEM_BATCH':
			return addItemBatch(state, action);
		default:
			return state;
	}
};

const itemBatchAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'UPDATE_ITEM_BATCHES':
			return action.data.newIDs;
		case 'ADD_ITEM_BATCH':
			return [ ...state, action.data.id ];
		default:
			return state;
	}
};

const itemBatchReducer = combineReducers({
	byID: itemBatchByIDReducer,
	allIDs: itemBatchAllIDsReducer
});

export default itemBatchReducer;
