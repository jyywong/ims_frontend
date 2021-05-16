import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { FiBox } from 'react-icons/fi';
const InventoryListItem = () => {
	return (
		<React.Fragment>
			<Flex p="2" justifyContent="space-between" alignItems="center">
				<Flex alignItems="center">
					<Icon boxSize={10} as={FiBox} />
					<Text px="5"> Cooking </Text>
				</Flex>
				<Text px="4" color="gray.400" fontSize="sm">
					7 items
				</Text>
			</Flex>
		</React.Fragment>
	);
};

export default InventoryListItem;
