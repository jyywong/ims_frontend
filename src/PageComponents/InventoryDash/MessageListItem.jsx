import React from 'react';
import { Flex, Avatar, Text } from '@chakra-ui/react';
const MessageListItem = ({ username, message }) => {
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
					<Avatar size="xs" name={username} />
					<Text fontSize="sm" px="5">
						{' '}
						{username}{' '}
					</Text>
				</Flex>
				<Text px="4" my="2" color="gray.400" fontSize="sm" textAlign="right">
					{message}
				</Text>
			</Flex>
		</React.Fragment>
	);
};

export default MessageListItem;
