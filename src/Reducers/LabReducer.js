import invReducer from './InvReducer';

const initialState = {
	id: 1,
	name: 'Test Lab 1',
	description: 'This is test lab 1',
	members: [
		{
			id: 1,
			name: 'TestUser 1',
			email: 'email'
		},
		{
			id: 2,
			name: 'TestUser 2',
			email: 'email'
		},
		{
			id: 3,
			name: 'TestUser 3',
			email: 'email'
		}
	],
	inventories: [
		{
			id: 1,
			name: 'TestInventory 1',
			description: 'this is testinv 1',
			itemCount: 3,
			items: [
				{
					id: 1,
					labID: 1,
					name: 'Sugar',
					desc: 'Its sugar',
					manu: 'Thermofisher',
					notes: 'Misc notes',
					stock: [
						{
							id: 1,
							quantity: 5,
							expiryDate: 'Some day'
						},
						{
							id: 2,
							quantity: 3,
							expiryDate: 'Some other day'
						}
					],
					orders: []
				},
				{
					id: 2,
					labID: 1,
					name: 'Wood',
					desc: 'Its wood'
				},
				{
					id: 3,
					labID: 1,
					name: 'Coal',
					desc: 'Its coal'
				}
			],
			notices: [
				{
					id: 1,
					user: 1,
					username: 'Testuser 1',
					role: 'testrole1',
					message: 'This is a test message.'
				},
				{
					id: 2,
					user: 2,
					username: 'Testuser 2',
					role: 'testrole2',
					message: 'This is another test message.'
				}
			]
		},
		{
			id: 2,
			name: 'TestInventory 2',
			description: 'this is testinv 2',
			itemCount: 3,
			items: [
				{
					id: 4,
					labID: 2,
					name: 'String',
					desc: 'Its string'
				},
				{
					id: 5,
					labID: 2,
					name: 'Wool',
					desc: 'Its wool'
				},
				{
					id: 6,
					labID: 2,
					name: 'Water',
					desc: 'Its water'
				}
			]
		},
		{
			id: 3,
			name: 'TestInventory 3',
			description: 'this is testinv 3',
			itemCount: 3,
			items: [
				{
					id: 7,
					labID: 3,
					name: 'Metal',
					desc: 'Its metal'
				},
				{
					id: 8,
					labID: 3,
					name: 'Plastic',
					desc: 'Its plastic'
				},
				{
					id: 9,
					labID: 3,
					name: 'Beef',
					desc: 'Its beef'
				}
			]
		}
	]
};

const labReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'EDIT_LAB_DETAILS':
			return { ...state, name: action.data.name, description: action.data.desc };
		case 'NEW_INVENTORY':
			return { ...state, inventories: [ ...state.inventories, action.data ] };
		case 'NEW_MEMBER':
			return { ...state, members: [ ...state.members, action.data ] };
		case 'DELETE_INVENTORIES':
			return {
				...state,
				inventories: state.inventories.filter((inventory) => !action.data.ids.includes(inventory.id))
			};
		case 'DELETE_MEMBERS':
			return {
				...state,
				members: state.members.filter((member) => !action.data.ids.includes(member.id))
			};
		case 'ADD_ITEM':
			return {
				...state,
				inventories: invReducer(state.inventories, action)
			};
		case 'DELETE_ITEMS':
			return {
				...state,
				inventories: invReducer(state.inventories, action)
			};
		case 'ADD_INV_NOTICE':
			return {
				...state,
				inventories: invReducer(state.inventories, action)
			};
		case 'EDIT_INV_DETAILS':
			return {
				...state,
				inventories: invReducer(state.inventories, action)
			};
		case 'EDIT_ITEM_DETAILS':
			return {
				...state,
				inventories: invReducer(state.inventories, action)
			};
		case 'ADD_ITEM_ORDER':
			return {
				...state,
				inventories: invReducer(state.inventories, action)
			};
		case 'LOG_RESTOCK':
			return {
				...state,
				inventories: invReducer(state.inventories, action)
			};
		default:
			return state;
	}
};

const generateID = () => {
	return Math.floor(Math.random() * 1000000);
};
export const editLabDetails = (name, desc, admin) => {
	return {
		type: 'EDIT_LAB_DETAILS',
		data: {
			name,
			desc,
			admin
		}
	};
};
export const createInventory = (name, itemCount) => {
	return {
		type: 'NEW_INVENTORY',
		data: {
			id: generateID(),
			name,
			itemCount
		}
	};
};
export const newMember = (email) => {
	const id = generateID();
	return {
		type: 'NEW_MEMBER',
		data: {
			id,
			name: `TestUser ${id}`,
			email
		}
	};
};

export const deleteInventory = (ids) => {
	return {
		type: 'DELETE_INVENTORIES',
		data: {
			ids
		}
	};
};
export const removeMember = (ids) => {
	return {
		type: 'DELETE_MEMBERS',
		data: {
			ids
		}
	};
};

export const editInv = (invID, name, desc) => {
	return {
		type: 'EDIT_INV_DETAILS',
		data: {
			invID,
			name,
			desc
		}
	};
};
export const addItem = (invID, newItem) => {
	return {
		type: 'ADD_ITEM',
		data: {
			invID,
			newItem: {
				id: generateID(),
				name: newItem.name,
				desc: newItem.desc
			}
		}
	};
};
export const deleteItems = (invID, itemIDs) => {
	return {
		type: 'DELETE_ITEMS',
		data: {
			invID,
			itemIDs
		}
	};
};
export const addInvNotice = (invID, message) => {
	return {
		type: 'ADD_INV_NOTICE',
		data: {
			invID,
			newNotice: {
				id: generateID(),
				user: generateID(),
				username: 'Testuser',
				role: 'testrole1',
				message
			}
		}
	};
};
export const editItem = (invID, itemID, name, manu, notes) => {
	return {
		type: 'EDIT_ITEM_DETAILS',
		data: {
			invID,
			itemID,
			name,
			manu,
			notes
		}
	};
};
export const addItemOrder = (invID, itemID, newOrder) => {
	return {
		type: 'ADD_ITEM_ORDER',
		data: {
			invID,
			itemID,
			newOrder
		}
	};
};
export const logRestock = (invID, itemID, newStock) => {
	return {
		type: 'LOG_RESTOCK',
		data: {
			invID,
			itemID,
			newStock
		}
	};
};
export default labReducer;
