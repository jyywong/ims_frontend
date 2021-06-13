import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';
import { getInvList, createNewItemCall, deleteItemCall } from '../Services/LabServices';
const generateID = () => {
	return Math.floor(Math.random() * 1000000);
};
export const updateInventories = (newState, newInvIDs) => {
	return {
		type: 'UPDATE_INVS',
		data: {
			newState,
			newInvIDs
		}
	};
};

export const fetchInventoriesTC = async (dispatch, getState) => {
	try {
		const response = await getInvList();
		const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
		dispatch(updateInventories(organizedObject, newIDs));
	} catch (error) {
		return Promise.reject(error);
	}
};

export const addItem = (
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
) => {
	return {
		type: 'ADD_ITEM',
		data: {
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
		}
	};
};

export const addItemTC = (invID, name, manufacturer, notes, initialQuantity, minQuantity) => {
	return async (dispatch, getState) => {
		try {
			const response = await createNewItemCall(invID, name, manufacturer, notes, initialQuantity, minQuantity);
			console.log(response);
			const { data } = response;
			dispatch(
				addItem(
					data.invID,
					data.id,
					data.name,
					data.manufacturer,
					data.notes,
					data.quantity,
					data.minQuantity,
					data.notices,
					data.itemBatches,
					data.itemOrders
				)
			);
		} catch (error) {
			return Promise.reject(error);
		}
	};
};

export const deleteItems = (invID, itemIDs) => {
	return {
		type: 'DELETE_ITEM',
		data: {
			invID,
			itemIDs
		}
	};
};

export const deleteItemsTC = (invID, itemIDs) => {
	return async (dispatch, getState) => {
		try {
			const listOfAPICalls = itemIDs.map((itemID) => deleteItemCall(itemID));
			await Promise.all(listOfAPICalls);
			dispatch(deleteItems(invID, itemIDs));
		} catch (error) {
			return Promise.reject(error);
		}
	};
};
