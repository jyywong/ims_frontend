import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
const AddMemberModal = ({ onClose }) => {
	const [ email, setEmail ] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(newMember(email));
		onClose();
	};
	return (
		<ModalContent>
			<ModalHeader>Add a member</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<Input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Invitee's Email"
					/>
				</ModalBody>
				<ModalFooter>
					<Button type="button" mx="1" onClick={onClose}>
						Close
					</Button>
					<Button type="submit" colorScheme="green" mx="1">
						Send
					</Button>
				</ModalFooter>
			</form>
		</ModalContent>
	);
};

export default AddMemberModal;
