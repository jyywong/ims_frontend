import React, { useEffect, useState } from 'react';
import { Flex, Avatar, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ListComponent from '../ListComponent';
import ItemActivityItem from '../InventoryDash/ItemActivityItem';
import { getItemHistory } from '../../Services/LabServices';
const ActivityList = ({ colorMode, item }) => {
	const [ historyItems, setHistoryItems ] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await getItemHistory(item.id);
			const listOfHistories = response.data;
			console.log(listOfHistories);
			setHistoryItems([ ...listOfHistories ]);
		})();
	}, []);
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title="Recent Activity">
				<React.Fragment />
				{/* <Flex
					p="2"
					borderRadius="20px"
					justifyContent="space-between"
					alignItems="center"
					_hover={{ bg: 'gray.600' }}
				>
					<Flex alignItems="center">
						<Avatar name="John Doe" />
						<Text px="5"> John Doe </Text>
					</Flex>
					<Flex alignItems="center">
						<AddIcon boxSize={3} color="green.600" />
						<Text px="4" fontSize="3xl">
							5
						</Text>
					</Flex>
				</Flex> */}
				{historyItems.map((item) => <ItemActivityItem key={item.history_id} item={item} />)}
			</ListComponent>
		</React.Fragment>
	);
};

export default ActivityList;
