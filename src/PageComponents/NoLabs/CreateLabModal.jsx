import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Flex,
	Button,
	Text,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	useToast,
	useColorMode
} from '@chakra-ui/react';
import { addLabTC } from '../../ActionCreators/labActions';
const CreateLabModal = ({ closeModal }) => {
	const toast = useToast();
	const userID = useSelector((state) => state.auth.user.id);
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({ name: '', desc: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				const response = await dispatch(addLabTC(formValues.name, formValues.desc, userID));
				toast({
					title: 'Successfully created a new lab',
					status: 'success',
					isClosable: true
				});
				console.log('success');
			} catch (error) {
				console.log(error.message);
				toast({
					title: 'Unable to create a new lab',
					description: error.message,
					status: 'error',
					isClosable: true
				});
			}
		})();
	};
	return (
		<ModalContent>
			<ModalHeader>Create a lab</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<FormControl my="2">
						<FormLabel>New Lab Name</FormLabel>
						<Input
							type="text"
							value={formValues.name}
							onChange={(e) => {
								setFormValues({ ...formValues, name: e.target.value });
							}}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Lab Description</FormLabel>
						<Input
							type="text"
							value={formValues.desc}
							onChange={(e) => {
								setFormValues({ ...formValues, desc: e.target.value });
							}}
						/>
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button variant="outline" colorScheme="blue" mr={3} onClick={closeModal}>
						Close
					</Button>
					<Button type="submit" colorScheme="green">
						Create
					</Button>
				</ModalFooter>
			</form>
		</ModalContent>
	);
};

export default CreateLabModal;
