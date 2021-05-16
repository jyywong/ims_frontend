import React from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { EditIcon, AddIcon } from '@chakra-ui/icons';
const Header = ({ title, description, outlineButton, fillButton }) => {
	return (
		<React.Fragment>
			<Flex px="5" alignItems="center" justifyContent="space-between">
				<Box>
					<Text fontSize="3xl">{title}</Text>
					<Text fontSize="md">{description}</Text>
				</Box>
				<Box>
					<Button mx="2" variant="outline" leftIcon={<EditIcon />}>
						{outlineButton}
					</Button>
					<Button mx="2" leftIcon={<AddIcon boxSize={3} />}>
						{fillButton}
					</Button>
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default Header;
