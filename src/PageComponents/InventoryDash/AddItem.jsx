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
import { addItemTC } from '../../ActionCreators/invActions';
const AddItem = ({ onClose, invID }) => {
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({
		name: '',
		manufacturer: '',
		uniqueID: '',
		notes: '',
		initialQuantity: 0,
		minQuantity: 0
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addItemTC(
				invID,
				formValues.name,
				formValues.manufacturer,
				formValues.notes,
				formValues.initialQuantity,
				formValues.minQuantity
			)
		);
		onClose();
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
							id="Item name"
							type="text"
							value={formValues.name}
							onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Manufacturer</FormLabel>
						<Input
							id="Manu"
							type="text"
							value={formValues.manufacturer}
							onChange={(e) => setFormValues({ ...formValues, manufacturer: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Notes</FormLabel>
						<Input
							id="info"
							type="text"
							value={formValues.notes}
							onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
						/>
					</FormControl>
					<Flex>
						<FormControl mr="2">
							<FormLabel>Initial stock amount</FormLabel>
							<NumberInput>
								<NumberInputField
									value={formValues.initialQuantity}
									onChange={(e) =>
										setFormValues({ ...formValues, initialQuantity: Number(e.target.value) })}
								/>
								<NumberInputStepper>
									<NumberIncrementStepper
										onClick={(e) =>
											setFormValues({
												...formValues,
												initialQuantity: formValues.initialQuantity + 1
											})}
									/>
									<NumberDecrementStepper
										onClick={(e) =>
											setFormValues({
												...formValues,
												initialQuantity: formValues.initialQuantity - 1
											})}
									/>
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
						<FormControl ml="2">
							<FormLabel>Minimum stock level</FormLabel>
							<NumberInput>
								<NumberInputField
									value={formValues.minQuantity}
									onChange={(e) =>
										setFormValues({ ...formValues, minQuantity: Number(e.target.value) })}
								/>
								<NumberInputStepper>
									<NumberIncrementStepper
										onClick={(e) =>
											setFormValues({
												...formValues,
												minQuantity: formValues.minQuantity + 1
											})}
									/>
									<NumberDecrementStepper
										onClick={(e) =>
											setFormValues({
												...formValues,
												minQuantity: formValues.minQuantity - 1
											})}
									/>
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
