import React from 'react';
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
const AddItem = ({ onClose }) => {
	return (
		<ModalContent>
			<ModalHeader>Add a new item</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				<form>
					<FormControl my="2">
						<FormLabel>Item Name</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl my="2">
						<FormLabel>Manufacturer</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl my="2">
						<FormLabel>Unique Id</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl my="2">
						<FormLabel>Other information</FormLabel>
						<Input type="text" />
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
				<Button colorScheme="green" mx="1">
					Create
				</Button>
			</ModalFooter>
		</ModalContent>
	);
};

export default AddItem;
