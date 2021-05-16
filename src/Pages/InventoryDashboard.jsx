import React from 'react';
import { Grid, GridItem, Flex, Box, Text, Icon, useColorMode } from '@chakra-ui/react';
import { BiPackage } from 'react-icons/bi';
import { FaExclamation } from 'react-icons/fa';
import SearchBar from '../PageComponents/SearchBar';
import Header from '../PageComponents/Header';
import SimpleCard from '../PageComponents/Dashboard/SimpleCard';
import ListComponent from '../PageComponents/ListComponent';
import ListItem from '../PageComponents/InventoryDash/ListItem';
import MessageListItem from '../PageComponents/InventoryDash/MessageListItem';
import ActivityItem from '../PageComponents/InventoryDash/ActivityItem';
const InventoryDashboard = () => {
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
						border="1px"
						width="full"
						height="full"
						// templateRows="0.5fr  1fr 1fr 1fr"
						// templateColumns="1fr 1fr 1fr 1fr"
						templateRows={{
							xl: '0.3fr  1fr 1fr 2fr ',
							md: '10vh 15vh 30vh 1fr 1fr',
							sm: '10vh 10vh 10vh 10vh 50vh 40vh 40vh'
						}}
						templateColumns={{ xl: '1fr  1fr 1fr 1fr', md: '1fr 1fr 1fr', sm: '1fr' }}
						templateAreas={{
							xl: `
								'header header header header' 
								'card1 items items card2' 
								'notices items items card3' 
								'notices items items activity' 
								`,
							md: `
								'header header header'
								'card1 card2 card3'
								'chart chart chart'
								'inv inv inv'
								'members members members'
								`,
							sm: `
								'header'
								'card1'
								'card2'
								'card3'
								'chart'
								'inv'
								'members'
								`
						}}
						columnGap="3rem"
						rowGap="2rem"
					>
						<GridItem gridArea="header">
							<Header
								title="Test Inventory 1"
								description="Lorem ipsum"
								outlineButton="Edit Inventory"
								fillButton="Add new item"
							/>
						</GridItem>
						<GridItem gridArea="card1">
							<SimpleCard
								colorMode={colorMode}
								number={7}
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
						<GridItem gridArea="card3">
							<SimpleCard
								colorMode={colorMode}
								number={7}
								description="Something something"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'green.100' : 'green.700'}
							/>
						</GridItem>
						<GridItem gridArea="items">
							<ListComponent title="Items" listitem={ListItem} />
						</GridItem>
						<GridItem gridArea="notices">
							<ListComponent title="Inventory information" listitem={MessageListItem} />
						</GridItem>
						<GridItem gridArea="activity">
							<ListComponent title="Recent Activity" listitem={ActivityItem} />
						</GridItem>
					</Grid>
				</GridItem>
			</Grid>
		</React.Fragment>
	);
};

export default InventoryDashboard;
