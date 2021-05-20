import React from 'react';
import {
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Textarea,
	FormControl
} from '@chakra-ui/react';
const AddInvNotice = ({ onClose }) => {
	return (
		<ModalContent>
			<ModalHeader>New notice</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				<form>
					<FormControl>
						<Textarea placeholder="Your notice" />
					</FormControl>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button mx="1" onClick={onClose}>
					Close
				</Button>
				<Button colorScheme="green" mx="1">
					Post
				</Button>
			</ModalFooter>
		</ModalContent>
	);
};

export default AddInvNotice;
