import React from 'react';
import { useSelector } from 'react-redux';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Avatar, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
const Dropdown = () => {
	const user = useSelector((state) => {
		return state.auth.user;
	});
	return (
		<React.Fragment>
			<Menu>
				<MenuButton as={Button} bg="whiteAlpha.0">
					<Flex alignItems="center" justifyContent="space-between">
						<Text>{user.username}</Text>
						<Avatar size="sm" mx="3" name={user.username} />
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
