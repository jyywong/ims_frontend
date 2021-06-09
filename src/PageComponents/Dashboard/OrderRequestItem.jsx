import React from 'react';
import { useSelector } from 'react-redux';
import { FaExclamation } from 'react-icons/fa';
import { RiFilePaperLine } from 'react-icons/ri';
import { Flex, Icon, Box, Text, Divider } from '@chakra-ui/react';
const OrderRequestItem = ({ order }) => {
	const item = useSelector((state) => state.items.byID[order.item]);
	return (
		<React.Fragment>
			<Flex
				p="2"
				borderRadius="20px"
				alignItems="center"
				justifyContent="space-around"
				_hover={{ bg: 'gray.600' }}
			>
				<Icon justifySelf="left" boxSize="8" as={RiFilePaperLine} />
				<Text fontSize="lg" width="60%">
					{item.name}
				</Text>
				<Text justifySelf="right"> Needed by: {order.dateNeededBy} </Text>
			</Flex>
		</React.Fragment>
	);
};

export default OrderRequestItem;
