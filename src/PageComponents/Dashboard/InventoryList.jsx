import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Flex, Button } from '@chakra-ui/react';
import ListComponent from '../ListComponent';
import InventoryListItem from './InventoryListItem';
const InventoryList = ({ colorMode, openModal, inventoriesToDelete, setInventoriesToDelete, lab }) => {
	const inventories = useSelector((state) => lab.inventories.map((invID) => state.inventories.byID[invID]));
	const [ deleteInventory, setDeleteInventory ] = useState(false);
	const handleCancel = () => {
		setDeleteInventory(false);
		setInventoriesToDelete([]);
	};
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title="Inventories">
				{deleteInventory ? (
					<Flex>
						<Button
							mx="2"
							id="Cancel"
							bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
							shadow="lg"
							onClick={handleCancel}
						>
							Cancel
						</Button>
						<Button
							mx="2"
							id="Delete Inventories"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={openModal}
						>
							Remove Selected Items
						</Button>
					</Flex>
				) : (
					<Flex>
						<Button
							mx="2"
							id="Add Inventory"
							bg={colorMode === 'light' ? 'green.200' : 'green.600'}
							shadow="lg"
							onClick={openModal}
						>
							Add inventory
						</Button>
						<Button
							mx="2"
							id="Inventory"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={() => setDeleteInventory(true)}
						>
							Remove Inventory
						</Button>
					</Flex>
				)}

				{inventories.map((inventory) => (
					<InventoryListItem
						key={inventory.id}
						inventory={inventory}
						id={inventory.id}
						name={inventory.name}
						itemQuantity={inventory.itemCount}
						deleteInventory={deleteInventory}
						inventoriesToDelete={inventoriesToDelete}
						setInventoriesToDelete={setInventoriesToDelete}
					/>
				))}
			</ListComponent>
		</React.Fragment>
	);
};

export default InventoryList;
