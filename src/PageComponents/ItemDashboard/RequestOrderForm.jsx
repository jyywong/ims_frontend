import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseJSON } from 'date-fns';
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
	NumberIncrementStepper,
	useToast
} from '@chakra-ui/react';
import DatePicker from './DatePicker';
import { addItemOrderTC } from '../../ActionCreators/itemActions';
const RequestOrderForm = ({ setShowDrawer, item }) => {
	const userID = useSelector((state) => state.auth.user.id);
	const toast = useToast();
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({ quantity: 0, date: '', notes: '' });
	const onClose = () => {
		setShowDrawer(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiFriendlyDate = formValues.date.toISOString().substring(0, 10);
		(async () => {
			try {
				await dispatch(addItemOrderTC(item.id, userID, formValues.quantity, apiFriendlyDate, formValues.notes));
				toast({
					title: 'Successfully created an order',
					description: 'Order details',
					status: 'success',
					isClosable: true
				});
			} catch (error) {
				toast({
					title: 'Unable to create an order',
					description: error.message,
					status: 'error',
					isClosable: true
				});
			}
		})();
	};
	return (
		<React.Fragment>
			<DrawerBody>
				<form id="Request Order Form" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel> Number of Units Required </FormLabel>
						<NumberInput value={formValues.quantity}>
							<NumberInputField
								data-testid="Units required"
								value={formValues.quantity}
								onChange={(e) => setFormValues({ ...formValues, quantity: Number(e.target.value) })}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper
									data-testid="Units increment"
									onClick={(e) => setFormValues({ ...formValues, quantity: formValues.quantity + 1 })}
								/>
								<NumberDecrementStepper
									data-testid="Units decrement"
									onClick={(e) => setFormValues({ ...formValues, quantity: formValues.quantity - 1 })}
								/>
							</NumberInputStepper>
						</NumberInput>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Date needed by </FormLabel>
						<DatePicker
							selected={formValues.date}
							onChange={(date) => setFormValues({ ...formValues, date: date })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Additional notes </FormLabel>
						<Textarea
							value={formValues.notes}
							onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
						/>
					</FormControl>
				</form>
			</DrawerBody>
			<DrawerFooter>
				<Button variant="outline" mr={3} onClick={onClose}>
					Cancel
				</Button>
				<Button form="Request Order Form" type="submit" colorScheme="blue">
					Submit
				</Button>
			</DrawerFooter>
		</React.Fragment>
	);
};

export default RequestOrderForm;
