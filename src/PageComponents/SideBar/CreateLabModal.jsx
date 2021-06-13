import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useToast
} from '@chakra-ui/react';
import { addLabTC } from '../../ActionCreators/labActions';
const CreateLabModal = ({ showAddLabModal, setShowAddLabModal }) => {
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
		<React.Fragment>
			<Modal
				isOpen={showAddLabModal}
				onClose={() => {
					setShowAddLabModal(false);
				}}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create a new lab</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form id="New lab" onSubmit={handleSubmit}>
							<FormControl my="2">
								<FormLabel>New lab name</FormLabel>
								<Input
									type="text"
									value={formValues.name}
									onChange={(e) => {
										setFormValues({ ...formValues, name: e.target.value });
									}}
								/>
							</FormControl>
							<FormControl my="2">
								<FormLabel>New lab description</FormLabel>
								<Input
									type="text"
									value={formValues.desc}
									onChange={(e) => {
										setFormValues({ ...formValues, desc: e.target.value });
									}}
								/>
							</FormControl>
						</form>
					</ModalBody>

					<ModalFooter>
						<Button
							variant="ghost"
							mr={3}
							onClick={() => {
								setShowAddLabModal(false);
							}}
						>
							Close
						</Button>
						<Button form="New lab" type="submit" colorScheme="green">
							Create
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</React.Fragment>
	);
};

export default CreateLabModal;
