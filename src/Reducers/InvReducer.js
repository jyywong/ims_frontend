import itemReducer from './ItemReducer';
const invReducer = (state, action) => {
	// State refers to the state tree starting from inventories.
	const otherInvs = state.filter((inventory) => inventory.id !== action.data.invID);
	const targetInv = state.find((inventory) => inventory.id === action.data.invID);
	switch (action.type) {
		case 'EDIT_INV_DETAILS':
			return [ ...otherInvs, { ...targetInv, name: action.data.name, description: action.data.desc } ];
		case 'ADD_ITEM':
			return [ ...otherInvs, { ...targetInv, items: [ ...targetInv.items, action.data.newItem ] } ];
		case 'ADD_INV_NOTICE':
			return [ ...otherInvs, { ...targetInv, notices: [ ...targetInv.notices, action.data.newNotice ] } ];
		case 'DELETE_ITEMS':
			return [
				...otherInvs,
				{ ...targetInv, items: targetInv.items.filter((item) => !action.data.itemIDs.includes(item.id)) }
			];
		case 'EDIT_ITEM_DETAILS':
			return [ ...otherInvs, { ...targetInv, items: itemReducer(targetInv.items, action) } ];
		case 'ADD_ITEM_ORDER':
			return [ ...otherInvs, { ...targetInv, items: itemReducer(targetInv.items, action) } ];
		case 'LOG_RESTOCK':
			return [ ...otherInvs, { ...targetInv, items: itemReducer(targetInv.items, action) } ];
		default:
			return state;
	}
};

export default invReducer;
