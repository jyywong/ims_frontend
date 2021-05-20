import React, { useState } from 'react';
import { Grid, GridItem, useColorMode } from '@chakra-ui/react';
import { BiPackage } from 'react-icons/bi';
import { FaExclamation } from 'react-icons/fa';
import SearchBar from '../SearchBar';
import Header from '../Header';
import SimpleCard from '../Dashboard/SimpleCard';
import ItemInformation from './ItemInformation';
import ListComponent from '../ListComponent';
import ActivityItem from '../InventoryDash/ActivityItem';
import ItemStats from './ItemStats';
import ItemHeaderButtons from './ItemHeaderButtons';
import DrawerComp from '../DrawerComp';
import EditItemForm from './EditItemForm';
import RequestOrderForm from './RequestOrderForm';
import RestockForm from './RestockForm';
import StockItem from './StockItem';
const ItemDashboard = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [ showDrawer, setShowDrawer ] = useState();
	const [ drawerContent, setDrawerContent ] = useState();

	const openDrawer = (e) => {
		setDrawerContent(e.target.id);
		setShowDrawer(true);
	};
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
							md: '10vh 15vh 30vh 1fr 1fr',
							sm: '10vh 10vh 10vh 10vh 50vh 40vh 40vh'
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
								'card1 card2 card3'
								'notices notices notices'
								'stats stats stats'
								`,
							sm: `
								'header'
								'cardinfo'
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
						<GridItem gridArea="header">
							<Header
								title="Sugar"
								description="Lorem ipsum"
								outlineButton="Edit item"
								fillButton="Add new stock"
							>
								<ItemHeaderButtons openDrawer={openDrawer} />
							</Header>
						</GridItem>
						<GridItem gridArea="card1">
							<SimpleCard
								colorMode={colorMode}
								number={20}
								description="Total stock"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'blue.100' : 'blue.700'}
							/>
						</GridItem>
						<GridItem gridArea="card2">
							<SimpleCard
								colorMode={colorMode}
								number={5}
								description="Minimum"
								icon={FaExclamation}
								iconBGcolor={colorMode === 'light' ? 'red.100' : 'red.700'}
							/>
						</GridItem>
						<GridItem gridArea="card3">
							<SimpleCard
								colorMode={colorMode}
								number={0}
								description="Orders pending"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'yellow.100' : 'yellow.700'}
							/>
						</GridItem>
						<GridItem gridArea="cardinfo">
							<ItemInformation colorMode={colorMode} />
						</GridItem>
						<GridItem gridArea="stocks">
							<ListComponent colorMode={colorMode} title="Stock list" listitem={StockItem} />
						</GridItem>
						<GridItem gridArea="notices">
							<ListComponent colorMode={colorMode} title="Recent Activity" listitem={ActivityItem} />
						</GridItem>
						<GridItem gridArea="stats">
							<ItemStats colorMode={colorMode} />
						</GridItem>
						<DrawerComp
							title={(() => {
								if (drawerContent === 'Edit Item') {
									return 'Edit this item';
								} else if (drawerContent === 'Request Order') {
									return 'Request an order';
								} else if (drawerContent === 'Add restock') {
									return 'Log a restock';
								}
							})()}
							isOpen={showDrawer}
							onClose={() => setShowDrawer(false)}
						>
							{(() => {
								if (drawerContent === 'Edit Item') {
									return <EditItemForm />;
								} else if (drawerContent === 'Request Order') {
									return <RequestOrderForm />;
								} else if (drawerContent === 'Add restock') {
									return <RestockForm />;
								}
							})()}
						</DrawerComp>
					</Grid>
				</GridItem>
			</Grid>
		</React.Fragment>
	);
};

export default ItemDashboard;
