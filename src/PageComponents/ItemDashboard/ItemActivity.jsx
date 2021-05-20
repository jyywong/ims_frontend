import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
const ItemActivity = ({ colorMode }) => {
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
					<Text fontSize="lg">Recent Activity</Text>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default ItemActivity;
