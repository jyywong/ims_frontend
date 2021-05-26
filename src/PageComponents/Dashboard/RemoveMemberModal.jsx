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
import { removeLabMember } from '../../ActionCreators/labActions';
const RemoveMemberModal = ({ onClose, lab, membersToRemove }) => {
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(removeLabMember(lab.id, membersToRemove.map((member) => member.id)));
		onClose();
		console.log('hello');
	};
	return (
		<ModalContent>
			<ModalHeader>Remove members</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<Text fontSize="xl">Are you sure you want to permanently remove these members?</Text>
					<UnorderedList>
						{membersToRemove.map((member) => <ListItem key={member.id}>{member.name}</ListItem>)}
					</UnorderedList>
				</ModalBody>
				<ModalFooter>
					<Button type="button" mx="1" onClick={onClose}>
						Close
					</Button>
					<Button data-testid="Confirm remove members" type="submit" colorScheme="red" mx="1">
						Yes
					</Button>
				</ModalFooter>
			</form>
		</ModalContent>
	);
};

export default RemoveMemberModal;
