import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Avatar, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
const Dropdown = () => {
	return (
		<React.Fragment>
			<Menu>
				<MenuButton as={Button} bg="whiteAlpha.0">
					<Flex alignItems="center">
						<Text>John Doe</Text>
						<Avatar size="sm" marginLeft="3" name="John Doe" />
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
