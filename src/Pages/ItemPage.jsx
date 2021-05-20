import React from 'react';
import { Flex } from '@chakra-ui/react';

import SideNavBar from './SideNavBar';
import ItemDashboard from '../PageComponents/ItemDashboard/ItemDashboard';
const ItemPage = () => {
	return (
		<React.Fragment>
			<Flex minHeight="100vh" width="full">
				<SideNavBar />
				<ItemDashboard />
			</Flex>
		</React.Fragment>
	);
};

export default ItemPage;
