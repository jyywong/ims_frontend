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
import { editItemDetails } from '../../ActionCreators/itemActions';
const EditItemForm = ({ setShowDrawer, item }) => {
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({ name: '', desc: '', manu: '', notes: '' });
	const onClose = () => {
		setShowDrawer(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editItemDetails(item.id, formValues.name, formValues.desc, formValues.manu, formValues.notes));
	};
	return (
		<React.Fragment>
			<DrawerBody>
				<form id="Edit Item Form" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel> Item Name </FormLabel>
						<Input
							id="Item name"
							type="text"
							placeholder="New Item Name"
							value={formValues.name}
							onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Item Description </FormLabel>
						<Input
							id="Item desc"
							type="text"
							placeholder="New Item Description"
							value={formValues.desc}
							onChange={(e) => setFormValues({ ...formValues, desc: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Item Manufacturer </FormLabel>
						<Input
							id="Item manu"
							type="text"
							value={formValues.manu}
							onChange={(e) => setFormValues({ ...formValues, manu: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Notes </FormLabel>
						<Textarea
							id="Item notes"
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
