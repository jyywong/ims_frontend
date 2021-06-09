import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Flex, Divider, Text, useColorMode } from '@chakra-ui/react';
import { GiMoon } from 'react-icons/gi';
import SideNavBarLabLink from './SideNavBarLabLink';

const SideNavBar = ({ labID, invID, itemID }) => {
	const labs = useSelector((state) => state.labs.byID);
	const inventory = useSelector((state) => state.inventories.byID[invID]);
	const item = useSelector((state) => state.items.byID[itemID]);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<React.Fragment>
			<Flex
				direction="column"
				minHeight="100vh"
				width={{ xl: '24vh', md: '12vh' }}
				bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
				shadow="md"
			>
				<Flex m="3">
					<GiMoon size={40} />
					<Text ml="2" fontSize="2xl">
						Moon MS
					</Text>
				</Flex>
				<Box p={3} borderTop="1px">
					<Text fontSize="md"> My Labs </Text>
					<Divider />
					{Object.keys(labs).map((labKey) => (
						<SideNavBarLabLink
							key={labKey}
							colorMode={colorMode}
							id={Number(labKey)}
							name={labs[labKey].name}
							labID={(() => {
								if (labID) {
									return Number(labID);
								} else if (invID) {
									return inventory.labID;
								} else if (itemID) {
									return item.labID;
								}
							})()}
						/>
					))}
				</Box>
				<Button justifySelf="flex-end" onClick={toggleColorMode}>
					Color Mode
				</Button>
			</Flex>

			{/* <Button onClick={toggleColorMode}> Toggle color mode</Button> */}
		</React.Fragment>
	);
};

export default SideNavBar;
