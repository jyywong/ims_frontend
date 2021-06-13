import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';
import {
	createItemBatchCall,
	updateItemBatchQuantityCall,
	createItemOrderCall,
	editItemDetailCall,
	getItemBatches,
	getItemList,
	getItemOrders
} from '../Services/LabServices';

export const updateItems = (newState, newItemIDs) => {
	return {
		type: 'UPDATE_ITEMS',
		data: {
			newState,
			newItemIDs
		}
	};
};

export const fetchItemsTC = async (dispatch, getState) => {
	try {
		const response = await getItemList();
		const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
		dispatch(updateItems(organizedObject, newIDs));
	} catch (error) {
		return Promise.reject(error);
	}
};

export const updateItemBatches = (newState, newIDs) => {
	return {
		type: 'UPDATE_ITEM_BATCHES',
		data: {
			newState,
			newIDs
		}
	};
};

export const fetchItemBatches = async (dispatch, getState) => {
	try {
		const response = await getItemBatches();
		const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
		dispatch(updateItemBatches(organizedObject, newIDs));
	} catch (error) {
		return Promise.reject(error);
	}
};

export const updateItemOrders = (newState, newIDs) => {
	return {
		type: 'UPDATE_ITEM_ORDERS',
		data: {
			newState,
			newIDs
		}
	};
};

export const fetchItemOrders = async (dispatch, getState) => {
	try {
		const response = await getItemOrders();
		const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
		dispatch(updateItemOrders(organizedObject, newIDs));
	} catch (error) {
		return Promise.reject(error);
	}
};

export const editItemDetails = (itemID, name, manufacturer, notes, quantity, minQuantity) => {
	return {
		type: 'EDIT_ITEM',
		data: {
			itemID,
			name,
			manufacturer,
			notes,
			quantity,
			minQuantity
		}
	};
};

export const editItemDetailsTC = (itemID, name, manufacturer, notes, quantity, minQuantity) => {
	return async (dispatch, getState) => {
		try {
			const response = await editItemDetailCall(itemID, name, manufacturer, notes, quantity, minQuantity);
			const { data } = response;
			dispatch(
				editItemDetails(data.id, data.name, data.manufacturer, data.notes, data.quantity, data.minQuantity)
			);
		} catch (error) {
			return Promise.reject(error);
		}
	};
};

export const addItemOrder = (id, item, orderRequester, quantityRequired, dateNeededBy, notes) => {
	return {
		type: 'ADD_ITEM_ORDER',
		data: {
			id,
			item,
			orderRequester,
			quantityRequired,
			dateNeededBy,
			notes
		}
	};
};

export const addItemOrderTC = (item, orderRequester, quantityRequired, dateNeededBy, notes) => {
	return async (dispatch, getState) => {
		try {
			const response = await createItemOrderCall(item, orderRequester, quantityRequired, dateNeededBy, notes);
			const { data } = response;
			dispatch(
				addItemOrder(
					data.id,
					data.item,
					data.orderRequester,
					data.quantityRequired,
					data.dateNeededBy,
					data.notes
				)
			);
		} catch (error) {
			return Promise.reject(error);
		}
	};
};

export const addItemBatch = (id, item, expiryDate, quantity) => {
	return {
		type: 'ADD_ITEM_BATCH',
		data: {
			id,
			item,
			expiryDate,
			quantity
		}
	};
};

export const addItemBatchTC = (item, expiryDate, quantity) => {
	return async (dispatch, getState) => {
		try {
			const response = await createItemBatchCall(item, expiryDate, quantity);
			const { data } = response;
			dispatch(addItemBatch(data.id, data.item, data.expiryDate, data.quantity));
		} catch (error) {
			return Promise.reject(error);
		}
	};
};

export const updateItemBatchQuantity = (batchID, quantity) => {
	return {
		type: 'UPDATE_ITEM_BATCH_QUANTITY',
		data: {
			batchID,
			quantity
		}
	};
};

export const updateItemBatchQuantityTC = (batchID, newQuantity) => {
	return async (dispatch, getState) => {
		try {
			const response = await updateItemBatchQuantityCall(batchID, newQuantity);
			const { data } = response;
			dispatch(updateItemBatchQuantity(data.id, data.quantity));
		} catch (error) {
			return Promise.reject(error);
		}
	};
};
