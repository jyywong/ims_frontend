import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Flex, Spinner } from '@chakra-ui/react';
import SideNavBar from './SideNavBar';
import InventoryDashboard from './InventoryDashboard';
import { loadDataOrRedirectToLogin } from '../HelperFunctions/getAllData';
const InventoryPage = ({ match: { params: { invID } } }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [ pageIsLoading, setPageIsLoading ] = useState(true);

	useEffect(() => {
		loadDataOrRedirectToLogin(setPageIsLoading, dispatch, history);
	}, []);
	return pageIsLoading ? (
		<React.Fragment>
			<Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
				<Spinner size="xl" />
			</Flex>
		</React.Fragment>
	) : (
		<React.Fragment>
			<Flex minHeight="100vh" width="full">
				<SideNavBar invID={Number(invID)} />
				<InventoryDashboard invID={Number(invID)} />
			</Flex>
		</React.Fragment>
	);
};

export default InventoryPage;
