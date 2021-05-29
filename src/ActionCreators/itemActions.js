export const updateItems = (newState, newItemIDs) => {
	return {
		type: 'UPDATE_ITEMS',
		data: {
			newState,
			newItemIDs
		}
	};
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
