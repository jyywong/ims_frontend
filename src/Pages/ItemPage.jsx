import React from 'react';
import { Flex } from '@chakra-ui/react';

import SideNavBar from './SideNavBar';
import ItemDashboard from '../PageComponents/ItemDashboard/ItemDashboard';
const ItemPage = ({ match: { params: { invID, itemID } } }) => {
	return (
		<React.Fragment>
			<Flex minHeight="100vh" width="full">
				<SideNavBar />
				<ItemDashboard itemID={Number(itemID)} invID={Number(invID)} />
			</Flex>
		</React.Fragment>
	);
};

export default ItemPage;
