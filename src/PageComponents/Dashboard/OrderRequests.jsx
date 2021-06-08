import React from 'react';
import { useSelector } from 'react-redux';
import { FaExclamation } from 'react-icons/fa';
import { RiFilePaperLine } from 'react-icons/ri';
import { Flex, Icon, Box, Text, Divider } from '@chakra-ui/react';
import OrderRequestItem from './OrderRequestItem';
const OrderRequests = ({ colorMode, lab }) => {
	const labItems = useSelector((state) => {
		const items = [];
		for (const item of lab.labItems) {
			items.push(state.items.byID[item]);
		}
		return items;
	});
	console.log('labItems');
	console.log(labItems);
	const orders = useSelector((state) => {
		const allOrders = [];
		for (const item of labItems) {
			console.log(item);
			for (const order of item.itemOrders) {
				allOrders.push(state.itemOrders.byID[order]);
			}
		}
		return allOrders;
	});

	console.log(orders);
	return (
		<React.Fragment>
			<Flex
				alignItems="center"
				width="full"
				height="full"
				bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
				borderRadius="20px"
				shadow="lg"
				justifyContent="space-between"
			>
				<Flex height="full" width="40%" alignItems="center" justifyContent="space-around">
					<Icon
						p={{ xl: '5', md: '3', sm: '1' }}
						boxSize={{ xl: 75, md: 59, sm: 39 }}
						bg="red.400"
						rounded="100"
						as={FaExclamation}
					/>
					<Box>
						<Text
							mr={{ md: '2', sm: '5' }}
							display={{ xl: 'block', sm: 'inline' }}
							fontSize={{ xl: '5xl', md: '2xl', sm: '2xl' }}
						>
							5
						</Text>
						<Text
							m={{ xl: '0', sm: '2' }}
							display={{ xl: 'block', sm: 'inline' }}
							fontSize={{ xl: 'sm', md: 'xs' }}
							as="i"
						>
							Orders pending
						</Text>
					</Box>
				</Flex>
				<Divider orientation="vertical" />
				{<OrderRequestItem />}
			</Flex>
		</React.Fragment>
	);
};

export default OrderRequests;
