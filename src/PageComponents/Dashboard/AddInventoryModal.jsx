import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Input,
	useToast
} from '@chakra-ui/react';
import { addInventory, addNewInventoryTC } from '../../ActionCreators/labActions';
const AddInventoryModal = ({ onClose, lab }) => {
	const [ invName, setInvName ] = useState('');
	const toast = useToast();
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				await dispatch(addNewInventoryTC(lab.id, invName, 'test description', []));
				toast({
					title: 'Successfully added new inventory',
					description: 'Inventory name',
					status: 'success',
					isClosable: true
				});
			} catch (error) {
				toast({
					title: 'Unable to add new inventory',
					description: error.message,
					status: 'error',
					isClosable: true
				});
			}
		})();
		onClose();
	};
	return (
		<ModalContent>
			<ModalHeader>Add an inventory</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<Input
						data-testid="Inventory name input"
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
