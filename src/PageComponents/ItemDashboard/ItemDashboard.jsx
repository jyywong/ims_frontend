import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem, useColorMode } from '@chakra-ui/react';
import { BiPackage } from 'react-icons/bi';
import { FaExclamation } from 'react-icons/fa';
import SearchBar from '.././Search/SearchBar';
import SimpleCard from '../Dashboard/SimpleCard';
import ItemInformation from './ItemInformation';
import ListComponent from '../ListComponent';
import ActivityItem from '../InventoryDash/ActivityItem';
import ItemStats from './ItemStats';
import StockList from './StockList';
import DrawerContainer from './DrawerContainer';
import ActivityList from './ActivityList';
const ItemDashboard = ({ invID, itemID }) => {
	const item = useSelector((state) => state.items.byID[itemID]);
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
							xl: '0.3fr  0.8fr 1fr 2fr',
							md: '10vh 15vh 30vh 15vh 1fr',
							sm: '10vh 10vh 10vh 10vh 10vh 10vh 40vh 40vh'
						}}
						templateColumns={{ xl: '1fr  1fr 1fr 1fr', md: '1fr 1fr 1fr', sm: '1fr' }}
						templateAreas={{
							xl: `
								'header header header header' 
								'cardinfo card1 card2 card3' 
								'stocks stats stats stats' 
                                'notices stats stats stats' 
								`,
							md: `
								'header header header'
								'cardinfo cardinfo cardinfo'
								'stocks stocks stocks'
								'card1 card2 card3'
								'notices notices notices'
								'stats stats stats'
								`,
							sm: `
								'header'
								'cardinfo'
								'stocks'
								'card1'
								'card2'
								'card3'
								'notices'
								'stats'
								`
						}}
						columnGap="3rem"
						rowGap="2rem"
					>
						<DrawerContainer colorMode={colorMode} item={item} />
						<GridItem gridArea="card1">
							<SimpleCard
								colorMode={colorMode}
								number={item.quantity}
								description="Total stock"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'blue.100' : 'blue.700'}
							/>
						</GridItem>
						<GridItem gridArea="card2">
							<SimpleCard
								colorMode={colorMode}
								number={item.minQuantity}
								description="Minimum"
								icon={FaExclamation}
								iconBGcolor={colorMode === 'light' ? 'red.100' : 'red.700'}
							/>
						</GridItem>
						<GridItem gridArea="card3">
							<SimpleCard
								colorMode={colorMode}
								number={item.itemOrders && item.itemOrders.length}
								description="Orders pending"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'yellow.100' : 'yellow.700'}
							/>
						</GridItem>
						<GridItem gridArea="cardinfo">
							<ItemInformation colorMode={colorMode} item={item} />
						</GridItem>
						<GridItem gridArea="stocks">
							<StockList colorMode={colorMode} item={item} />
						</GridItem>
						<GridItem gridArea="notices">
							<ActivityList colorMode={colorMode} item={item} />
						</GridItem>
						<GridItem gridArea="stats">
							<ItemStats colorMode={colorMode} item={item} />
						</GridItem>
					</Grid>
				</GridItem>
			</Grid>
		</React.Fragment>
	);
};

export default ItemDashboard;
