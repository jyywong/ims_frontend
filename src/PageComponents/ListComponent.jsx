import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
const ListComponent = ({ colorMode, title, children }) => {
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
					justifyContent="space-between"
				>
					<Text fontSize="lg">{title}</Text>
					{children[0]}
				</Flex>
				<Box p="4" width="full" height="85%" overflow="auto">
					{children[1]}
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default ListComponent;
