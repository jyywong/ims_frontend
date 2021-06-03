import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	DrawerBody,
	DrawerFooter,
	Button,
	FormLabel,
	FormControl,
	Textarea,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper
} from '@chakra-ui/react';
import DatePicker from './DatePicker';
import { addItemBatchTC } from '../../ActionCreators/itemActions';
const RestockForm = ({ setShowDrawer, item }) => {
	const [ formValues, setFormValues ] = useState({ quantity: 0, manDate: '', expDate: '', notes: '' });
	const dispatch = useDispatch();
	const onClose = () => {
		setShowDrawer(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiFriendlyDate = formValues.expDate.toISOString().substring(0, 10);
		dispatch(addItemBatchTC(item.id, apiFriendlyDate, formValues.quantity));
	};
	return (
		<React.Fragment>
			<DrawerBody>
				<form id="Restock Form" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel>Number of units</FormLabel>
						<NumberInput>
							<NumberInputField
								value={formValues.quantity}
								onChange={(e) => setFormValues({ ...formValues, quantity: Number(e.target.value) })}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper
									onClick={() => setFormValues({ ...formValues, quantity: formValues.quantity + 1 })}
								/>
								<NumberDecrementStepper
									onClick={() => setFormValues({ ...formValues, quantity: formValues.quantity - 1 })}
								/>
							</NumberInputStepper>
						</NumberInput>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Manufacturing Date </FormLabel>
						<DatePicker
							selected={formValues.manDate}
							onChange={(date) => setFormValues({ ...formValues, manDate: date })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Expiry Date </FormLabel>
						<DatePicker
							selected={formValues.expDate}
							onChange={(date) => setFormValues({ ...formValues, expDate: date })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Additional notes </FormLabel>
						<Textarea
							values={formValues.notes}
							onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
						/>
					</FormControl>
				</form>
			</DrawerBody>
			<DrawerFooter>
				<Button variant="outline" mr={3} onClick={onClose}>
					Cancel
				</Button>
				<Button form="Restock Form" type="submit" colorScheme="blue">
					Save
				</Button>
			</DrawerFooter>
		</React.Fragment>
	);
};

export default RestockForm;
