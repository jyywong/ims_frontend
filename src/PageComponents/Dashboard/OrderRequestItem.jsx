import React from 'react';
import { FaExclamation } from 'react-icons/fa';
import { RiFilePaperLine } from 'react-icons/ri';
import { Flex, Icon, Box, Text, Divider } from '@chakra-ui/react';
const OrderRequestItem = () => {
	return (
		<React.Fragment>
			<Flex p="3" direction="column" justifyContent="flex-start" overflow="auto" width="60%" height="full">
				<Flex
					p="2"
					borderRadius="20px"
					alignItems="center"
					justifyContent="space-around"
					_hover={{ bg: 'gray.600' }}
				>
					<Icon boxSize="8" as={RiFilePaperLine} />
					<Text fontSize="lg">Item name</Text>
					<Text> Needed by: {new Date().toDateString()}</Text>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default OrderRequestItem;
