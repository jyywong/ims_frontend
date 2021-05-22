import React from 'react';
import { Flex } from '@chakra-ui/react';
import SideNavBar from './SideNavBar';
import InventoryDashboard from './InventoryDashboard';
const InventoryPage = ({ match: { params: { invID } } }) => {
	return (
		<React.Fragment>
			<Flex minHeight="100vh" width="full">
				<SideNavBar />
				<InventoryDashboard invID={Number(invID)} />
			</Flex>
		</React.Fragment>
	);
};

export default InventoryPage;
