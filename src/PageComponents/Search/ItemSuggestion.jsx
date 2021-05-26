import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
const ItemSuggestion = ({ item, closePopover }) => {
	return (
		<React.Fragment>
			<Link data-testid="Link" to={`/${item.labID}/item/${item.id}`} onClick={closePopover}>
				<Flex width="full" justifyContent="space-between" alignContent="flex-end">
					<Text fontSize="lg">{item.name}</Text>
					<Text colorScheme="gray">Stock: 5</Text>
				</Flex>
			</Link>
		</React.Fragment>
	);
};

export default ItemSuggestion;
