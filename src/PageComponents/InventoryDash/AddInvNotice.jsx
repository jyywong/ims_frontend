import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(addInvNotice(1, formValues));
	};
	return (
		<ModalContent>
			<ModalHeader>New notice</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				<form id="New Notice" onSubmit={handleSubmit}>
					<FormControl>
						<Textarea
							placeholder="Your notice"
							value={formValues}
							onChange={(e) => setFormValues(e.target.value)}
						/>
					</FormControl>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button mx="1" onClick={onClose}>
					Close
				</Button>
				<Button type="submit" form="New Notice" colorScheme="green" mx="1">
					Post
				</Button>
			</ModalFooter>
		</ModalContent>
	);
};

export default AddInvNotice;
