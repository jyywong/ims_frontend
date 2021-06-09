import jwt_decode from 'jwt-decode';
import { fetchLabsTC } from '../ActionCreators/labActions';
import { getUserDetailsAttemptTC, loginAttemptTC } from '../ActionCreators/authActions';
import { fetchInventoriesTC } from '../ActionCreators/invActions';
import { fetchItemBatches, fetchItemOrders, fetchItemsTC } from '../ActionCreators/itemActions';
import { updateUsersTC } from '../ActionCreators/userActions';
import { getUserDetails, testIfRefreshTokenValid } from '../Services/LabServices';

const getAllData = async (dispatch) => {
	console.log('getalldata');
	try {
		const response = await Promise.all([
			dispatch(fetchLabsTC),
			dispatch(fetchInventoriesTC),
			dispatch(fetchItemsTC),
			dispatch(updateUsersTC),
			dispatch(fetchItemBatches),
			dispatch(fetchItemOrders)
		]);
	} catch (error) {
		return Promise.reject(error);
		console.log(error);
	}
};

export const loadDataOrRedirectToLogin = async (setPageIsLoading, dispatch, history) => {
	if (localStorage.getItem('refresh')) {
		try {
			const response = await testIfRefreshTokenValid();
			localStorage.setItem('access', response.data['access']);
			const userID = jwt_decode(localStorage.getItem('access')).user_id;
			await dispatch(getUserDetailsAttemptTC(userID));
			await getAllData(dispatch);
			setPageIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	} else {
		history.push('/');
	}
};

export default getAllData;
