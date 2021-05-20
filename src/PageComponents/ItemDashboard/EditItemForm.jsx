import React from 'react';
import {
	Input,
	FormLabel,
	FormControl,
	Textarea,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper
} from '@chakra-ui/react';
const EditItemForm = () => {
	return (
		<React.Fragment>
			<form>
				<FormControl my="2">
					<FormLabel> Item Name </FormLabel>
					<Input type="text" placeholder="New Item Name" />
				</FormControl>
				<FormControl my="2">
					<FormLabel> Item Manufacturer </FormLabel>
					<Input type="text" placeholder="New Lab Description" />
				</FormControl>
				<FormControl my="2">
					<FormLabel> Notes </FormLabel>
					<Textarea />
				</FormControl>
				<FormControl my="2">
					<FormLabel>Current stock level</FormLabel>
					<NumberInput>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl my="2">
					<FormLabel>Minimum stock level</FormLabel>
					<NumberInput>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
			</form>
		</React.Fragment>
	);
};

export default EditItemForm;
