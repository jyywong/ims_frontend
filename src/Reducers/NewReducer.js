const entireState = {
	users: {
		byID: {
			1: {
				id: 1,
				name: 'TestUser 1',
				email: 'email'
			},
			2: {
				id: 2,
				name: 'TestUser 2',
				email: 'email'
			},
			3: {
				id: 3,
				name: 'TestUser 3',
				email: 'email'
			}
		},
		allIDs: [ 1, 2, 3 ]
	},
	labs: {
		byID: {
			1: {
				id: 1,
				name: 'Test Lab 1',
				description: 'This is test lab 1',
				members: [ 1, 2 ],
				inventories: [ 1, 2 ]
			},
			2: {
				id: 2,
				name: 'Test Lab 2',
				description: 'This is test lab 2',
				members: [ 2, 3 ],
				inventories: [ 3, 4 ]
			}
		},
		allIDs: [ 1, 2 ]
	},
	inventories: {
		byID: {
			1: {
				id: 1,
				labID: 1,
				name: 'TestInventory 1',
				description: 'this is testinv 1',
				items: [ 1, 2, 3 ]
			},
			2: {
				id: 2,
				labID: 1,
				name: 'TestInventory 2',
				description: 'this is testinv 2',
				items: [ 4, 5 ]
			},
			3: {
				id: 3,
				labID: 2,
				name: 'TestInventory 3',
				description: 'this is testinv 3',
				items: [ 6, 7 ]
			},
			4: {
				id: 4,
				labID: 2,
				name: 'TestInventory 4',
				description: 'this is testinv 4',
				items: [ 8 ]
			}
		},
		allIDs: [ 1, 2, 3, 4 ]
	},
	items: {
		byID: {
			1: {
				id: 1,
				invID: 1,
				name: 'Sugar',
				desc: 'Its sugar',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: [ 1, 2 ]
			},
			2: {
				id: 2,
				invID: 1,
				name: 'Wood',
				desc: 'Its wood',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: [ 1, 2 ]
			},
			3: {
				id: 3,
				invID: 1,
				name: 'Coal',
				desc: 'Its coal',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: [ 1 ]
			},
			4: {
				id: 4,
				invID: 2,
				name: 'String',
				desc: 'Its string',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: [ 3 ]
			},
			5: {
				id: 5,
				invID: 2,
				name: 'Wool',
				desc: 'Its wool',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: []
			},
			6: {
				id: 6,
				invID: 3,
				name: 'Water',
				desc: 'Its water',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: [ 2, 3 ]
			},
			7: {
				id: 7,
				invID: 3,
				name: 'Metal',
				desc: 'Its metal',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: [ 1, 3 ]
			},
			8: {
				id: 8,
				invID: 4,
				name: 'Plastic',
				desc: 'Its plastic',
				manu: 'Thermofisher',
				notes: 'Misc notes',
				notices: [ 1 ]
			}
		},
		allIDs: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
	},
	notices: {
		byID: {
			1: {
				id: 1,
				userID: 1,
				username: 'Testuser 1',
				message: 'This is a test message.'
			},
			2: {
				id: 2,
				user: 2,
				username: 'Testuser 2',
				message: 'This is another test message.'
			},
			3: {
				id: 3,
				user: 3,
				username: 'Testuser 3',
				message: 'This is the other test message.'
			}
		}
	},
	auth: {}
};
const initialState = entireState.labs;
const newLabReducer = (state = entireState, action) => {
	// labs: {
	// 	byID: {
	// 		1: {
	// 			id: 1,
	// 			name: 'Test Lab 1',
	// 			description: 'This is test lab 1',
	// 			members: [ 1, 2 ],
	// 			inventories: [ 1, 2 ]
	// 		},
	// 		2: {
	// 			id: 2,
	// 			name: 'Test Lab 2',
	// 			description: 'This is test lab 2',
	// 			members: [ 2, 3 ],
	// 			inventories: [ 3, 4 ]
	// 		}
	// 	},
	// 	allIDs: [ 1, 2 ]
	// }
	switch (action.type) {
		case 'EDIT_LAB_DETAILS':
			return {
				...state,
				labs: {
					...state.labs,
					byID: {
						...state.labs.byID,
						[action.data.id]: {
							...state.labs.byID[action.data.id],
							name: action.data.name,
							description: action.data.desc
						}
					}
				}
			};
		default:
			return state;
	}
};
export const editLabDetails = (id, name, desc, admin) => {
	return {
		type: 'EDIT_LAB_DETAILS',
		data: {
			id,
			name,
			desc,
			admin
		}
	};
};
export default newLabReducer;
