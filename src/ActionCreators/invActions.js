const generateID = () => {
	return Math.floor(Math.random() * 1000000);
};

export const addItem = (invID, name, desc, manu, notes) => {
	return {
		type: 'ADD_ITEM',
		data: {
			invID,
			newItemID: generateID(),
			name,
			desc,
			manu,
			notes,
			notices: []
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
