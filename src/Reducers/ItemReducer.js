const itemReducer = (state, action) => {
	// State refers to the state tree starting from items.
	const otherItems = state.filter((item) => item.id !== action.data.itemID);
	const targetItem = state.find((item) => item.id === action.data.itemID);
	switch (action.type) {
		case 'EDIT_ITEM_DETAILS':
			return [
				...otherItems,
				{ ...targetItem, name: action.data.name, manu: action.data.manu, notes: action.data.notes }
			];
		case 'ADD_ITEM_ORDER':
			return [ ...otherItems, { ...targetItem, orders: [ ...targetItem.orders, action.data.newOrder ] } ];
		case 'LOG_RESTOCK':
			return [ ...otherItems, { ...targetItem, stock: [ ...targetItem.stock, action.data.newStock ] } ];
	}
};

export default itemReducer;
