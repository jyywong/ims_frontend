import React, { useState } from 'react';
import { Box, Button, Flex, Divider, Text, Grid, GridItem, Icon, useColorMode, Avatar } from '@chakra-ui/react';

import { GiMoon } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';
import { BiPackage } from 'react-icons/bi';

import LabDashboard from './LabDashboard';

const SideNavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<React.Fragment>
			<Box minHeight="100vh" width="24vh" bg={colorMode === 'light' ? 'gray.200' : 'gray.600'} shadow="md">
				<Flex m="3">
					<GiMoon size={40} />
					<Text ml="2" fontSize="2xl">
						Moon MS
					</Text>
				</Flex>

				<Box p={3} borderTop="1px">
					<Text fontSize="md"> My Labs </Text>
					<Divider />
					<Flex m="2">
						<ImLab size={16} />
						<Text ml="2" fontSize="sm">
							Lab test 1
						</Text>
					</Flex>
					<Flex m="2">
						<ImLab size={16} />
						<Text ml="2" fontSize="sm">
							Lab test 2
						</Text>
					</Flex>
					<Text fontSize="md"> Orders </Text>
					<Divider />
					<Flex m="2">
						<BiPackage size={20} />
						<Text ml="2" fontSize="sm">
							Lab test 2
						</Text>
					</Flex>
				</Box>
			</Box>

			{/* <Button onClick={toggleColorMode}> Toggle color mode</Button> */}
		</React.Fragment>
	);
};

export default SideNavBar;
