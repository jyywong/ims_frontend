import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Header = ({ title, description, children }) => {
	return (
		<React.Fragment>
			<Flex px="5" alignItems="center" justifyContent="space-between">
				<Flex direction="column">
					<Box>
						{children[1]}
						<Text fontSize="3xl">{title}</Text>
						<Text fontSize="md">{description}</Text>
					</Box>
				</Flex>
				<Box>{children[0]}</Box>
			</Flex>
		</React.Fragment>
	);
};

export default Header;
