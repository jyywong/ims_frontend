import React from 'react';
import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

const MembersList = ({ colorMode }) => {
	return (
		<React.Fragment>
			<Flex
				direction="column"
				alignItems="center"
				height="full"
				borderRadius="20px"
				shadow="lg"
				bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
			>
				<Flex
					p="5"
					width="full"
					height="15%"
					borderBottom="1px"
					borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
					alignItems="center"
				>
					<Text fontSize="lg">Members</Text>
				</Flex>
				<Box p="4" width="full" height="85%" overflow="auto">
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
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default MembersList;
