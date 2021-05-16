import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
const ListComponent = ({ colorMode, title, listitem: ListItem }) => {
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
					<Text fontSize="lg">{title}</Text>
				</Flex>
				<Box p="4" width="full" height="85%" overflow="auto">
					<ListItem />
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default ListComponent;
