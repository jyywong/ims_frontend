import React, { useState } from 'react';
import { GridItem } from '@chakra-ui/react';
import Header from '../Header';
import DrawerComp from '../DrawerComp';
import EditItemForm from './EditItemForm';
import RequestOrderForm from './RequestOrderForm';
import RestockForm from './RestockForm';
import ItemHeaderButtons from './ItemHeaderButtons';
const DrawerContainer = ({ colorMode, item }) => {
	const [ showDrawer, setShowDrawer ] = useState();
	const [ drawerContent, setDrawerContent ] = useState();
	const openDrawer = (e) => {
		setDrawerContent(e.target.id);
		setShowDrawer(true);
	};
	return (
		<React.Fragment>
			<GridItem gridArea="header">
				<Header title={item.name} description={item.desc} outlineButton="Edit item" fillButton="Add new stock">
					<ItemHeaderButtons openDrawer={openDrawer} />
				</Header>
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
						return <EditItemForm setShowDrawer={setShowDrawer} item={item} />;
					} else if (drawerContent === 'Request Order') {
						return <RequestOrderForm setShowDrawer={setShowDrawer} />;
					} else if (drawerContent === 'Add restock') {
						return <RestockForm setShowDrawer={setShowDrawer} />;
					}
				})()}
			</DrawerComp>
		</React.Fragment>
	);
};

export default DrawerContainer;
