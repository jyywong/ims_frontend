import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Flex, Spinner } from '@chakra-ui/react';
import LabDashboard from './LabDashboard';
import SideNavBar from './SideNavBar';
import { loadDataOrRedirectToLogin } from '../HelperFunctions/getAllData';

const LabPage = ({ match: { params: { labID } } }) => {
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
				<SideNavBar labID={labID} />
				<LabDashboard labID={Number(labID)} />
			</Flex>
		</React.Fragment>
	);
};

export default LabPage;
