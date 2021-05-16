import React from 'react';
import { Flex, Avatar, Text } from '@chakra-ui/react';
const MessageListItem = () => {
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
				<Text px="4" color="gray.400" fontSize="sm">
					Role
				</Text>
			</Flex>
		</React.Fragment>
	);
};

export default MessageListItem;
