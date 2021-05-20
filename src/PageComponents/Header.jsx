import React from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';

const Header = ({ title, description, children }) => {
	return (
		<React.Fragment>
			<Flex px="5" alignItems="center" justifyContent="space-between">
				<Box>
					<Text fontSize="3xl">{title}</Text>
					<Text fontSize="md">{description}</Text>
				</Box>
				<Box>{children}</Box>
			</Flex>
		</React.Fragment>
	);
};

export default Header;
