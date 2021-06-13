import { combineReducers } from 'redux';

const initialState = {
	byID: {
		1: {
			item: 1,
			orderRequester: 1,
			quantityRequested: 5,
			dateNeededBy: new Date(),
			notes: 'Hello, I need this'
		},
		2: {
			item: 2,
			orderRequester: 2,
			quantityRequested: 5,
			dateNeededBy: new Date(),
			notes: 'Hello, I need this'
		}
	},
	allIDs: [ 1, 2 ]
};

const updateItemOrders = (state, action) => {
	const { data } = action;
	return data.newState;
};

const addItemOrder = (state, action) => {
	const { data } = action;
	const { id, itemID, orderRequester, quantityRequested, dateNeededBy, notes } = { data };
	return {
		...state,
		[id]: {
			id,
			itemID,
			orderRequester,
			quantityRequested,
			dateNeededBy,
			notes
		}
	};
};

const itemOrderByIDReducer = (state = initialState.byID, action) => {
	switch (action.type) {
		case 'UPDATE_ITEM_ORDERS':
			return updateItemOrders(state, action);
		case 'ADD_ITEM_ORDER':
			return addItemOrder(state, action);
		default:
			return state;
	}
};

const itemOrderAllIDsReducer = (state = initialState.allIDs, action) => {
	switch (action.type) {
		case 'UPDATE_ITEM_ORDERS':
			return action.data.newIDs;
		case 'ADD_ITEM_ORDER':
			return [ ...state, action.data.id ];
		default:
			return state;
	}
};

const itemOrderReducer = combineReducers({
	byID: itemOrderByIDReducer,
	allIDs: itemOrderAllIDsReducer
});

export default itemOrderReducer;
