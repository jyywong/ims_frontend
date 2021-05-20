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
		{ id: 1, name: 'TestInventory 1', itemCount: 4 },
		{ id: 2, name: 'TestInventory 2', itemCount: 9 },
		{ id: 3, name: 'TestInventory 3', itemCount: 1 }
	]
};

const labReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_INVENTORY':
			return { ...state, inventories: [ ...state.inventories, action.data ] };
		case 'NEW_MEMBER':
			return { ...state, members: [ ...state.members, action.data ] };
		default:
			return state;
	}
};

const generateID = () => {
	return Math.floor(Math.random() * 1000000);
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

export default labReducer;
