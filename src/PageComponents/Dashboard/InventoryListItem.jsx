import React, { useState, useEffect } from 'react';
import { Flex, Icon, Text, Checkbox } from '@chakra-ui/react';
import { FiBox } from 'react-icons/fi';
const InventoryListItem = ({
	id,
	name,
	itemQuantity,
	deleteInventory,
	inventoriesToDelete,
	setInventoriesToDelete
}) => {
	const [ isChecked, setIsChecked ] = useState(false);
	useEffect(
		() => {
			setIsChecked(false);
		},
		[ deleteInventory ]
	);
	const handleChange = () => {
		!isChecked
			? setInventoriesToDelete([ ...inventoriesToDelete, { id, name } ])
			: setInventoriesToDelete(inventoriesToDelete.filter((inventory) => inventory.id !== id));

		setIsChecked(!isChecked);
	};
	return (
		<React.Fragment>
			<Flex p="2" justifyContent="space-between" alignItems="center">
				<Flex alignItems="center">
					<Icon boxSize={10} as={FiBox} />
					<Text px="5"> {name} </Text>
				</Flex>
				<Text px="4" color="gray.400" fontSize="sm">
					{itemQuantity} items
				</Text>
				{deleteInventory && <Checkbox isChecked={isChecked} onChange={handleChange} />}
			</Flex>
		</React.Fragment>
	);
};

export default InventoryListItem;
