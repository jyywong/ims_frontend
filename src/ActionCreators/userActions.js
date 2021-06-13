import { updateUsersCall } from '../Services/LabServices';
import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';

const updateUsers = (newState, newUserIDs) => {
	return {
		type: 'UPDATE_USERS',
		data: {
			newState,
			newUserIDs
		}
	};
};

export const updateUsersTC = async (dispatch, getState) => {
	try {
		const response = await updateUsersCall();
		const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
		console.log(organizedObject, newIDs);
		dispatch(updateUsers(organizedObject, newIDs));
	} catch (error) {
		return Promise.reject(error);
	}
};
