import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiBox } from 'react-icons/fi';
import { Flex, Text, Icon, Checkbox } from '@chakra-ui/react';
const ListItem = ({ id, name, inventory, deleteItems, itemsToDelete, setItemsToDelete, item }) => {
	const [ isChecked, setIsChecked ] = useState(false);
	useEffect(
		() => {
			setIsChecked(false);
		},
		[ deleteItems ]
	);

	const handleChange = () => {
		!isChecked
			? setItemsToDelete([ ...itemsToDelete, { id, name } ])
			: setItemsToDelete(itemsToDelete.filter((item) => item.id !== id));
		setIsChecked(!isChecked);
	};
	return (
		<React.Fragment>
			{deleteItems ? (
				<Flex
					p="2"
					justifyContent="space-between"
					alignItems="center"
					borderRadius="20px"
					_hover={{ bg: 'gray.600' }}
				>
					<Flex alignItems="center">
						<Icon boxSize={10} as={FiBox} />
						<Text px="5"> {name} </Text>
					</Flex>
					<Text px="4" color="gray.400" fontSize="sm">
						7 in stock
					</Text>
					<Checkbox data-testid={`Checkbox ${id}`} isChecked={isChecked} onChange={handleChange} />
				</Flex>
			) : (
				<Link data-testid="Link" to={`/${inventory.id}/item/${id}`}>
					<Flex
						p="2"
						justifyContent="space-between"
						alignItems="center"
						borderRadius="20px"
						_hover={{ bg: 'gray.600' }}
					>
						<Flex alignItems="center">
							<Icon boxSize={10} as={FiBox} />
							<Text px="5"> {name} </Text>
						</Flex>
						<Text px="4" color="gray.400" fontSize="sm">
							{item.quantity} in stock
						</Text>
					</Flex>
				</Link>
			)}
		</React.Fragment>
	);
};

export default ListItem;
