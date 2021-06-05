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
	NumberIncrementStepper,
	useToast
} from '@chakra-ui/react';
import { editItemDetailsTC } from '../../ActionCreators/itemActions';
const EditItemForm = ({ setShowDrawer, item }) => {
	const toast = useToast();
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({
		name: item.name,
		manu: item.manufacturer,
		notes: item.notes,
		quantity: item.quantity,
		minQuantity: item.minQuantity
	});
	const onClose = () => {
		setShowDrawer(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				await dispatch(
					editItemDetailsTC(
						item.id,
						formValues.name,
						formValues.manu,
						formValues.notes,
						formValues.quantity,
						formValues.minQuantity
					)
				);
				toast({
					title: 'Successfully edited item details',
					description: 'List of changes',
					status: 'success',
					isClosable: true
				});
			} catch (error) {
				toast({
					title: 'Unable to edit item details',
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
						<NumberInput value={formValues.quantity}>
							<NumberInputField
								value={formValues.quantity}
								onChange={(e) => setFormValues({ ...formValues, quantity: Number(e.target.value) })}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper
									onClick={(e) => setFormValues({ ...formValues, quantity: formValues.quantity + 1 })}
								/>
								<NumberDecrementStepper
									onClick={(e) => setFormValues({ ...formValues, quantity: formValues.quantity - 1 })}
								/>
							</NumberInputStepper>
						</NumberInput>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Minimum stock level</FormLabel>
						<NumberInput value={formValues.minQuantity}>
							<NumberInputField
								value={formValues.minQuantity}
								onChange={(e) => setFormValues({ ...formValues, minQuantity: Number(e.target.value) })}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper
									onClick={(e) =>
										setFormValues({ ...formValues, minQuantity: formValues.minQuantity + 1 })}
								/>
								<NumberDecrementStepper
									onClick={(e) =>
										setFormValues({ ...formValues, minQuantity: formValues.minQuantity - 1 })}
								/>
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
