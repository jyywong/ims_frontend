import React from 'react';
import { FiBox } from 'react-icons/fi';
import { Flex, Text, Icon } from '@chakra-ui/react';
const ListItem = () => {
	return (
		<React.Fragment>
			<Flex
				p="2"
				justifyContent="space-between"
				alignItems="center"
				borderRadius="20px"
				_hover={{ bg: 'gray.600' }}
			>
				<Flex alignItems="center">
					<Icon boxSize={10} as={FiBox} />
					<Text px="5"> Sugar </Text>
				</Flex>
				<Text px="4" color="gray.400" fontSize="sm">
					7 in stock
				</Text>
			</Flex>
		</React.Fragment>
	);
};

export default ListItem;
