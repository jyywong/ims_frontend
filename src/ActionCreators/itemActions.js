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
