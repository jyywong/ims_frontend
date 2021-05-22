import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	DrawerBody,
	DrawerFooter,
	Button,
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
import { editItem } from '../../Reducers/LabReducer';
const EditItemForm = ({ setShowDrawer }) => {
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({ name: '', manu: '', notes: '' });
	const onClose = () => {
		setShowDrawer(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editItem(1, 1, formValues.name, formValues.manu, formValues.notes));
		console.log(formValues);
	};
	return (
		<React.Fragment>
			<DrawerBody>
				<form id="Edit Item Form" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel> Item Name </FormLabel>
						<Input
							type="text"
							placeholder="New Item Name"
							value={formValues.name}
							onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Item Manufacturer </FormLabel>
						<Input
							type="text"
							placeholder="New Lab Description"
							value={formValues.manu}
							onChange={(e) => setFormValues({ ...formValues, manu: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Notes </FormLabel>
						<Textarea
							value={formValues.notes}
							onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
						/>
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
			</DrawerBody>
			<DrawerFooter>
				<Button variant="outline" mr={3} onClick={onClose}>
					Cancel
				</Button>
				<Button form="Edit Item Form" type="submit" colorScheme="blue">
					Save
				</Button>
			</DrawerFooter>
		</React.Fragment>
	);
};

export default EditItemForm;
