import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { BiPackage } from 'react-icons/bi';
const StockItem = ({ date, quantity }) => {
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
					<Icon boxSize={8} as={BiPackage} />
					<Text px="5">Expires: {date} </Text>
				</Flex>
				<Flex alignItems="center">
					<Text px="4" fontSize="3xl">
						{quantity}
					</Text>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default StockItem;
