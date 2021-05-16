import React from 'react';
import { Flex, Avatar, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
const ActivityItem = () => {
	return (
		<React.Fragment>
			<Flex
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
				<AddIcon boxSize={3} />
				<Text fontSize="xl">5</Text>
			</Flex>
		</React.Fragment>
	);
};

export default ActivityItem;
