import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createInventory } from '../../Reducers/LabReducer';
import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
const AddInventoryModal = ({ onClose }) => {
	const [ invName, setInvName ] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createInventory(invName, 5));
	};
	return (
		<ModalContent>
			<ModalHeader>Add an inventory</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<Input
						type="text"
						value={invName}
						onChange={(e) => setInvName(e.target.value)}
						placeholder="Inventory name"
					/>
				</ModalBody>
				<ModalFooter>
					<Button type="button" mx="1" onClick={onClose}>
						Close
					</Button>
					<Button type="submit" colorScheme="green" mx="1">
						Add
					</Button>
				</ModalFooter>
			</form>
		</ModalContent>
	);
};

export default AddInventoryModal;
