import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { BiPackage, BiTrendingUp } from 'react-icons/bi';
const StockItem = () => {
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
					<Text px="5">Expires: {new Date().toDateString()} </Text>
				</Flex>
				<Flex alignItems="center">
					<Text px="4" fontSize="3xl">
						5
					</Text>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default StockItem;
