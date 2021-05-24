import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Flex } from '@chakra-ui/react';
import ListComponent from '../ListComponent';
import ListItem from './ListItem';
const ItemList = ({ colorMode, openModal, itemsToDelete, setItemsToDelete, inventory }) => {
	const [ deleteItems, setDeleteItems ] = useState(false);
	const items = useSelector((state) => inventory.items.map((item) => state.items.byID[item]));

	const handleCancel = () => {
		setDeleteItems(false);
		setItemsToDelete([]);
	};
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title="Items" listitem={ListItem}>
				{deleteItems ? (
					<Flex>
						<Button
							mx="2"
							id="Items"
							bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
							shadow="lg"
							onClick={handleCancel}
						>
							Cancel
						</Button>
						<Button
							mx="2"
							id="Delete Items"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={openModal}
						>
							Remove selected items
						</Button>
					</Flex>
				) : (
					<Flex>
						<Button
							mx="2"
							id="Items"
							bg={colorMode === 'light' ? 'green.200' : 'green.600'}
							shadow="lg"
							onClick={openModal}
						>
							Add items
						</Button>
						<Button
							mx="2"
							id="Items"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={() => setDeleteItems(true)}
						>
							Delete items
						</Button>
					</Flex>
				)}

				{items.map((item) => (
					<ListItem
						key={item.id}
						id={item.id}
						inventory={inventory}
						name={item.name}
						deleteItems={deleteItems}
						itemsToDelete={itemsToDelete}
						setItemsToDelete={setItemsToDelete}
					/>
				))}
			</ListComponent>
		</React.Fragment>
	);
};

export default ItemList;
