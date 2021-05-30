import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';
import { getLabList } from '../Services/LabServices';

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
export const addInventory = (labID, name, desc) => {
	return {
		type: 'ADD_INVENTORY',
		data: {
			newInvID: generateID(),
			labID,
			name,
			desc
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
