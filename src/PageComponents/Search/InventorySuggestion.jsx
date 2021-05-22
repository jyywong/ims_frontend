import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
const InventorySuggestion = ({ inventory, closePopover }) => {
	return (
		<React.Fragment>
			<Link to={`/inventory/${inventory.id}`} onClick={closePopover}>
				<Flex width="full" justifyContent="space-between" alignContent="flex-end">
					<Text fontSize="lg">{inventory.name}</Text>
					<Text colorScheme="gray">Items: {inventory.itemCount}</Text>
				</Flex>
			</Link>
		</React.Fragment>
	);
};

export default InventorySuggestion;
