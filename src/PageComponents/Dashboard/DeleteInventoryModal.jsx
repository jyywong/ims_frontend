import React from 'react';
import { useDispatch } from 'react-redux';
import {
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Text,
	UnorderedList,
	ListItem
} from '@chakra-ui/react';
import { deleteInvs } from '../../Services/LabServices';
import { deleteInventory, deleteInventoryActual } from '../../ActionCreators/labActions';
const DeleteInventoryModal = ({ onClose, lab, inventoriesToDelete }) => {
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inventoriesToDelete.map((inv) => inv.id));
		dispatch(deleteInventoryActual(lab.id, inventoriesToDelete.map((inv) => inv.id)));
		onClose();
	};
	return (
		<ModalContent>
			<ModalHeader>Delete inventories</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<Text fontSize="xl">Are you sure you want to permanently delete these labs?</Text>
					<UnorderedList>
						{inventoriesToDelete.map((inventory) => (
							<ListItem key={inventory.id}>{inventory.name}</ListItem>
						))}
					</UnorderedList>
				</ModalBody>
				<ModalFooter>
					<Button type="button" mx="1" onClick={onClose}>
						Close
					</Button>
					<Button type="submit" colorScheme="red" mx="1">
						Yes
					</Button>
				</ModalFooter>
			</form>
		</ModalContent>
	);
};

export default DeleteInventoryModal;
