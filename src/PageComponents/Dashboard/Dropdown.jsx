import React from 'react';
<<<<<<< HEAD
=======
import { useSelector } from 'react-redux';
import { ChevronDownIcon } from '@chakra-ui/icons';
>>>>>>> 28dc643e34930052ecd908522afa8395f095d414
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
