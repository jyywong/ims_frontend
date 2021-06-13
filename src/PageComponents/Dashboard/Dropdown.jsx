import React from 'react';
import { Flex, Avatar, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
const Dropdown = () => {
	return (
		<React.Fragment>
			<Menu>
				<MenuButton as={Button} bg="whiteAlpha.0">
					<Flex alignItems="center" justifyContent="space-between">
						<Text>John Doe</Text>
						<Avatar size="sm" mx="3" name="John Doe" />
					</Flex>
				</MenuButton>
				<MenuList>
					<MenuItem>Action</MenuItem>
					<MenuItem>Other Action</MenuItem>
					<MenuItem>Another Action</MenuItem>
				</MenuList>
			</Menu>
		</React.Fragment>
	);
};

export default Dropdown;
