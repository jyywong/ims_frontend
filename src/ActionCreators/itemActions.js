import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';
import { getItemList } from '../Services/LabServices';

export const updateItems = (newState, newItemIDs) => {
	return {
		type: 'UPDATE_ITEMS',
		data: {
			newState,
			newItemIDs
		}
	};
};

export const fetchItems = async (dispatch, getState) => {
	const response = await getItemList;
	const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
	dispatch(updateItems(organizedObject, newIDs));
};

export const editItemDetails = (itemID, name, desc, manu, notes) => {
	return {
		type: 'EDIT_ITEM',
		data: {
			itemID,
			name,
			desc,
			manu,
			notes
		}
	};
};
