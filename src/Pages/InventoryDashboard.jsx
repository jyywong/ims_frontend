import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem, useColorMode } from '@chakra-ui/react';
import { BiPackage } from 'react-icons/bi';
import { FaExclamation } from 'react-icons/fa';
import SearchBar from '../PageComponents/Search/SearchBar';
import Header from '../PageComponents/Header';
import SimpleCard from '../PageComponents/Dashboard/SimpleCard';
import InventoryModalContainer from '../PageComponents/InventoryDash/InventoryModalContainer';
import InvBreadCrumb from '../PageComponents/InventoryDash/InvBreadCrumb';
import InventoryActivityList from '../PageComponents/InventoryDash/InventoryActivityList';
const InventoryDashboard = ({ invID }) => {
	const inventory = useSelector((state) => state.inventories.byID[invID]);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<React.Fragment>
			<Grid width="full" templateRows="5rem auto">
				<GridItem>
					<SearchBar />
				</GridItem>
				<GridItem>
					<Grid
						p="5"
						width="full"
						height="full"
						templateRows={{
							xl: '9.5vh 22vh 22vh 22vh',
							md: '10vh 15vh 30vh 1fr 1fr',
							sm: '10vh 10vh 10vh 10vh 50vh 40vh 40vh'
						}}
						templateColumns={{ xl: '1fr  1fr 1fr 1fr', md: '1fr 1fr 1fr', sm: '1fr' }}
						templateAreas={{
							xl: `
								'header header header header' 
								'card1 items items card2' 
								'notices items items activity' 
								'notices items items activity' 
								`,
							md: `
								'header header header'
								'card1 card2 card3'
								'items items items'
								'notices notices notices'
								'activity activity activity'
								`,
							sm: `
								'header'
								'card1'
								'card2'
								'card3'
								'items'
								'notices'
								'activity'
								`
						}}
						columnGap="3rem"
						rowGap="2rem"
					>
						<GridItem gridArea="header">
							<Header
								title={inventory.name}
								description={inventory.description}
								outlineButton="Edit Inventory"
								fillButton="Add new item"
							>
								<React.Fragment />
								<InvBreadCrumb inventory={inventory} />
							</Header>
						</GridItem>
						<GridItem gridArea="card1">
							<SimpleCard
								colorMode={colorMode}
								number={inventory.items.length}
								description="Total items"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'blue.100' : 'blue.700'}
							/>
						</GridItem>
						<GridItem gridArea="card2">
							<SimpleCard
								colorMode={colorMode}
								number={5}
								description="Items running low"
								icon={FaExclamation}
								iconBGcolor={colorMode === 'light' ? 'red.100' : 'red.700'}
							/>
						</GridItem>

						<GridItem gridArea="activity">
							<InventoryActivityList colorMode={colorMode} inventory={inventory} />
						</GridItem>
						<InventoryModalContainer colorMode={colorMode} inventory={inventory} invID={invID} />
					</Grid>
				</GridItem>
			</Grid>
		</React.Fragment>
	);
};

export default InventoryDashboard;
