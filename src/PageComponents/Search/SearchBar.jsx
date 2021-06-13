import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BellIcon } from '@chakra-ui/icons';
import { FiLogOut } from 'react-icons/fi';
import { Flex, Divider, Icon, Tooltip, useColorMode } from '@chakra-ui/react';
import Dropdown from '../Dashboard/Dropdown';
import SearchComp from './SearchComp';
import { signOut } from '../../ActionCreators/authActions';
const SearchBar = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { colorMode, toggleColorMode } = useColorMode();
	const handleSignOut = () => {
		localStorage.removeItem('access');
		localStorage.removeItem('refresh');
		dispatch(signOut());
		history.push('/');
	};
	return (
		<React.Fragment>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}
				width="full"
				height="5rem"
				alignItems="center"
			>
				<Flex mx="6" width="80%">
					{/* <InputLeftElement pointerEvents="none" children={<SearchIcon boxSize={7} />} /> */}
					<SearchComp />
				</Flex>
				<Dropdown />
				<Divider mx="4" orientation="vertical" />
				<Tooltip label="Log out" borderRadius="20px">
					<span>
						<Icon
							p="2"
							mx="7"
							borderRadius="10px"
							boxSize={10}
							as={FiLogOut}
							onClick={handleSignOut}
							_hover={{ bg: 'gray.600' }}
							cursor="pointer"
						/>
					</span>
				</Tooltip>
			</Flex>
		</React.Fragment>
	);
};

export default SearchBar;
