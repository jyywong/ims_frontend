import React from 'react';
import { BellIcon } from '@chakra-ui/icons';
import { FiLogOut } from 'react-icons/fi';
import { Flex, Divider, Text, Box, Input, InputLeftElement, Avatar, Icon, useColorMode } from '@chakra-ui/react';
import Dropdown from './Dashboard/Dropdown';
const SearchBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
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
					<Input placeholder="Search" />
				</Flex>
				<Dropdown />
				<Divider mx="4" orientation="vertical" />
				<BellIcon boxSize={6} />
				<Icon mx="7" boxSize={6} as={FiLogOut} />
			</Flex>
		</React.Fragment>
	);
};

export default SearchBar;
