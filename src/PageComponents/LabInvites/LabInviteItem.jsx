import React from 'react';
import { FcInvite } from 'react-icons/fc';
import { Flex, Button, Text, Icon } from '@chakra-ui/react';
const LabInviteItem = () => {
	return (
		<React.Fragment>
			<Flex
				p="2"
				borderRadius="20px"
				alignItems="center"
				justifyContent="space-between"
				overflow="auto"
				_hover={{ bg: 'gray.600' }}
			>
				<Flex alignItems="center">
					<Icon m="5" boxSize="10" as={FcInvite} />
					<Text> Someone has invited you to join: A lab</Text>s
				</Flex>
				<Flex>
					<Button m="5" colorScheme="green">
						Accept
					</Button>
					<Button m="5" justifySelf="right" colorScheme="red">
						Decline
					</Button>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default LabInviteItem;
