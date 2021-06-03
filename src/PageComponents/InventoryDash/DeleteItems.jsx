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
import { deleteItemsTC } from '../../ActionCreators/invActions';

const DeleteItems = ({ onClose, itemsToDelete, setItemsToDelete, invID }) => {
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(deleteItemsTC(invID, itemsToDelete.map((item) => item.id)));
		setItemsToDelete([]);
		onClose();
	};
	return (
		<ModalContent>
			<ModalHeader>Delete items</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<Text fontSize="xl">Are you sure you want to permanently delete these items?</Text>
					<UnorderedList>
						{itemsToDelete.map((item) => <ListItem key={item.id}>{item.name}</ListItem>)}
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

export default DeleteItems;
