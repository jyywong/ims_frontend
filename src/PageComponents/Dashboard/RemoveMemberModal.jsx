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
import { removeMember } from '../../Reducers/LabReducer';

const RemoveMemberModal = ({ onClose, membersToRemove }) => {
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(removeMember(membersToRemove.map((member) => member.id)));
		onClose();
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
					<Button type="submit" colorScheme="red" mx="1">
						Yes
					</Button>
				</ModalFooter>
			</form>
		</ModalContent>
	);
};

export default RemoveMemberModal;
