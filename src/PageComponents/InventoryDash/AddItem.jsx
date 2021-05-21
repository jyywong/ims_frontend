import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Flex,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper,
	FormControl,
	FormLabel
} from '@chakra-ui/react';
import { addItem } from '../../Reducers/LabReducer';
const AddItem = ({ onClose }) => {
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({
		name: '',
		manufacturer: '',
		uniqueID: '',
		otherInfo: ''
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			name: formValues.name,
			desc: formValues.otherInfo
		};
		dispatch(addItem(1, newItem));
	};
	return (
		<ModalContent>
			<ModalHeader>Add a new item</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				<form id="Add Item" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel>Item Name</FormLabel>
						<Input
							type="text"
							value={formValues.name}
							onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Manufacturer</FormLabel>
						<Input
							type="text"
							value={formValues.manufacturer}
							onChange={(e) => setFormValues({ ...formValues, manufacturer: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Unique Id</FormLabel>
						<Input
							type="text"
							value={formValues.uniqueID}
							onChange={(e) => setFormValues({ ...formValues, uniqueID: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Other information</FormLabel>
						<Input
							type="text"
							value={formValues.otherInfo}
							onChange={(e) => setFormValues({ ...formValues, otherInfo: e.target.value })}
						/>
					</FormControl>
					<Flex>
						<FormControl mr="2">
							<FormLabel>Initial stock amount</FormLabel>
							<NumberInput>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
						<FormControl ml="2">
							<FormLabel>Minimum stock level</FormLabel>
							<NumberInput>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
					</Flex>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button mx="1" onClick={onClose}>
					Cancel
				</Button>
				<Button form="Add Item" type="submit" colorScheme="green" mx="1">
					Create
				</Button>
			</ModalFooter>
		</ModalContent>
	);
};

export default AddItem;
