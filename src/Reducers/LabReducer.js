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
					name: 'Sugar',
					desc: 'Its sugar'
				},
				{
					id: 2,
					name: 'Wood',
					desc: 'Its wood'
				},
				{
					id: 3,
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
					name: 'String',
					desc: 'Its string'
				},
				{
					id: 5,
					name: 'Wool',
					desc: 'Its wool'
				},
				{
					id: 6,
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
					name: 'Metal',
					desc: 'Its metal'
				},
				{
					id: 8,
					name: 'Plastic',
					desc: 'Its plastic'
				},
				{
					id: 9,
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
				inventories: [
					...state.inventories.filter((inventory) => inventory.id !== action.data.labID),
					{
						...state.inventories.find((inventory) => inventory.id === action.data.labID),
						items: [
							...state.inventories.find((inventory) => inventory.id === action.data.labID).items,
							action.data.newItem
						]
					}
				]
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
export const addItem = (labID, newItem) => {
	return {
		type: 'ADD_ITEM',
		data: {
			labID,
			newItem: {
				id: generateID(),
				name: newItem.name,
				desc: newItem.desc
			}
		}
	};
};
export default labReducer;
