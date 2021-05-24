import React from 'react';
import { Flex } from '@chakra-ui/react';
import LabDashboard from './LabDashboard';
import SideNavBar from './SideNavBar';

const LabPage = ({ match: { params: { labID } } }) => {
	return (
		<React.Fragment>
			<Flex minHeight="100vh" width="full">
				<SideNavBar labID={labID} />
				<LabDashboard labID={Number(labID)} />
			</Flex>
		</React.Fragment>
	);
};

export default LabPage;
