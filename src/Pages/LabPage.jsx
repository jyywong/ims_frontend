import React from 'react';
import { Flex } from '@chakra-ui/react';
import LabDashboard from './LabDashboard';
import SideNavBar from './SideNavBar';

const LabPage = () => {
	return (
		<React.Fragment>
			<Flex minHeight="100vh" width="full">
				<SideNavBar />
				<LabDashboard />
			</Flex>
		</React.Fragment>
	);
};

export default LabPage;
