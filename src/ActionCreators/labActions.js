import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';
import axios from 'axios';
import { getLabInvites } from '../Services/LabServices';
import {
	createNewInv,
	createNewLab,
	createNewLabInvite,
	deleteInv,
	editLabDetailsCall,
	getLabList,
	removeMemberCall
} from '../Services/LabServices';

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

export const fetchLabsTC = async (dispatch, getState) => {
	try {
		const response = await getLabList();
		const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
		dispatch(updateLabState(organizedObject, newIDs));
		return newIDs;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const updateLabInvites = (newState, newIDs) => {
	return {
		type: 'UPDATE_LAB_INVITES',
		data: {
			newState,
			newIDs
		}
	};
};

export const fetchLabInvitesTC = async (dispatch, getState) => {
	try {
		const response = await getLabInvites();
		const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
		await dispatch(updateLabInvites(organizedObject, newIDs));
	} catch (error) {
		return Promise.reject(error);
	}
};

export const addLab = (id, name, description, members, inventories, labItems) => {
	return {
		type: 'ADD_LAB',
		data: {
			newLab: {
				id,
				name,
				description,
				members,
				inventories,
				labItems
			}
		}
	};
};

export const addLabTC = (name, description, userID) => {
	return async (dispatch, getState) => {
		try {
			const response = await createNewLab(name, description, userID);
			const { data } = response;
			await dispatch(addLab(data.id, data.name, data.description, data.members, data.inventories, data.labItems));
			console.log('What youre looking for ');
			console.log(response);
		} catch (error) {
			return Promise.reject(error);
		}
	};
};

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

export const editLabDetailsTC = (labID, name, desc) => {
	return async (dispatch, getState) => {
		try {
			const response = await editLabDetailsCall(labID, name, desc);
			const { data } = response;
			console.log(response);
			dispatch(editLabDetails(data.id, data.name, data.description));
		} catch (error) {
			return Promise.reject(error);
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

// export const addLabMemberTC = (labID, newMemberEmail) => {
// 	return async (dispatch, getState) => {
// 		const response = await createNewLabInvite

// 	}
// }
export const removeLabMember = (labID, memberIDs) => {
	return {
		type: 'REMOVE_LAB_MEMBER',
		data: {
			labID,
			memberIDs
		}
	};
};

export const removeLabMemberTC = (labID, membersToDelete) => {
	return async (dispatch, getState) => {
		const state = getState();
		const newMemberList = state.labs.byID[labID].members.filter((memberID) => !membersToDelete.includes(memberID));
		const newLab = await removeMemberCall(labID, newMemberList);
		console.log(newLab);
		// Consider updating lab member state rather than deleting state
		// This would allow me to use the returned response to ensure synchronicity with backend
		dispatch(removeLabMember(labID, membersToDelete));
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

export const addNewInventoryTC = (labID, name, description, items) => {
	return async (dispatch, getState) => {
		try {
			const response = await createNewInv(labID, name, description, items);
			const { data } = response;
			dispatch(addInventory(data.id, data.labID, data.name, data.description));
		} catch (error) {
			return Promise.reject(error);
		}
	};
};

export const deleteInventory = (labID, invID) => {
	return {
		type: 'DELETE_INVENTORY',
		data: {
			labID,
			invID
		}
	};
};

export const deleteInventoryTC = (labID, inventoriesToDelete) => {
	return async (dispatch, getState) => {
		try {
			const responseList = [];
			for await (const inventory of inventoriesToDelete) {
				console.log(inventory);
				const response = await deleteInv(inventory);
				responseList.push(response);
			}
			dispatch(deleteInventory(labID, inventoriesToDelete));
		} catch (error) {
			return Promise.reject(error);
		}
	};
};
