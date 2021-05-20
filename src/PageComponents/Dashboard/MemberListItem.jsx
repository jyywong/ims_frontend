import React from 'react';
import { FiBox } from 'react-icons/fi';
import { Flex, Avatar, Text } from '@chakra-ui/react';
const MemberListItem = ({ name }) => {
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
					<Avatar name={name} />
					<Text px="5"> {name} </Text>
				</Flex>
				<Text px="4" color="gray.400" fontSize="sm">
					Role
				</Text>
			</Flex>
		</React.Fragment>
	);
};

export default MemberListItem;
