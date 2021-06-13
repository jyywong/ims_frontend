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
	ListItem,
	useToast
} from '@chakra-ui/react';
import { deleteInventory, deleteInventoryTC } from '../../ActionCreators/labActions';
const DeleteInventoryModal = ({ onClose, lab, inventoriesToDelete }) => {
	const toast = useToast();
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				await dispatch(deleteInventoryTC(lab.id, inventoriesToDelete.map((inv) => inv.id)));
				toast({
					title: 'Successfully deleted inventory',
					description: 'Inventory name',
					status: 'success',
					isClosable: true
				});
			} catch (error) {
				toast({
					title: 'Unable to delete inventory',
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
