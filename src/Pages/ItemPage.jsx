import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';
import SideNavBar from './SideNavBar';
import ItemDashboard from '../PageComponents/ItemDashboard/ItemDashboard';
import { loadDataOrRedirectToLogin } from '../HelperFunctions/getAllData';
const ItemPage = ({ match: { params: { invID, itemID } } }) => {
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
				<SideNavBar itemID={Number(itemID)} />
				<ItemDashboard itemID={Number(itemID)} invID={Number(invID)} />
			</Flex>
		</React.Fragment>
	);
};

export default ItemPage;
