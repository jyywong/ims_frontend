import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';
import { createNewInv, deleteInv, getLabList } from '../Services/LabServices';

const generateID = () => {
	return Math.floor(Math.random() * 1000000);
};

export const updateLabState = (newState, newLabIDs) => {
	return {
		type: 'UPDATE_LABS',
		data: {
			newState,
			newLabIDs
		}
	};
};

export async function fetchLabs(dispatch, getState) {
	const response = await getLabList;
	const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
	console.log(organizedObject, newIDs);
	dispatch(updateLabState(organizedObject, newIDs));
	return newIDs;
}

export const editLabDetails = (labID, name, desc) => {
	return {
		type: 'EDIT_LAB_DETAILS',
		data: {
			labID,
			name,
			desc
		}
	};
};

export const addLabMember = (labID, newMemberID) => {
	return {
		type: 'ADD_LAB_MEMBER',
		data: {
			labID,
			newMemberID
		}
	};
};
export const removeLabMember = (labID, memberIDs) => {
	return {
		type: 'REMOVE_LAB_MEMBER',
		data: {
			labID,
			memberIDs
		}
	};
};
export const addInventory = (id, labID, name, desc) => {
	return {
		type: 'ADD_INVENTORY',
		data: {
			newInvID: id,
			labID,
			name,
			desc
		}
	};
};

export const addNewInventory = (labID, name, description, items) => {
	return async (dispatch, getState) => {
		const response = await createNewInv(labID, name, description, items);
		const { data } = response;
		dispatch(addInventory(data.id, data.labID, data.name, data.description));
	};
};

// export async function fetchLabs(dispatch, getState) {
// 	const response = await getLabList;
// 	const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
// 	console.log(organizedObject, newIDs);
// 	dispatch(updateLabState(organizedObject, newIDs));
// 	return newIDs;
// }

export const deleteInventory = (labID, invID) => {
	return {
		type: 'DELETE_INVENTORY',
		data: {
			labID,
			invID
		}
	};
};

export const deleteInventoryActual = (labID, inventoriesToDelete) => {
	return async (dispatch, getState) => {
		const responseList = [];
		for await (const inventory of inventoriesToDelete) {
			console.log(inventory);
			const response = await deleteInv(inventory);
			responseList.push(response);
		}
		// Should I put a try catch in here in case the delete is not successful?
		dispatch(deleteInventory(labID, inventoriesToDelete));
	};
};
