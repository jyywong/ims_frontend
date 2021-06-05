import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	DrawerBody,
	DrawerFooter,
	Button,
	Select,
	FormLabel,
	FormControl,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper,
	useToast
} from '@chakra-ui/react';
import { updateItemBatchQuantityTC } from '../../ActionCreators/itemActions';
const UsedStockForm = ({ setShowDrawer, item }) => {
	const dispatch = useDispatch();
	const [ formValues, setFormValues ] = useState({ batch: 0, quantity: 0 });
	const itemBatches = useSelector((state) => item.itemBatches.map((itemBatch) => state.itemBatches.byID[itemBatch]));
	useEffect(() => {
		console.log(itemBatches);
	}, []);
	const onClose = () => {
		setShowDrawer(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const oldBatch = itemBatches.find((itemBatch) => itemBatch.id === formValues.batch);
		const newQuantity = oldBatch.quantity - formValues.quantity;
		console.log(newQuantity);
		dispatch(updateItemBatchQuantityTC(formValues.batch, newQuantity));
		onClose();
	};
	return (
		<React.Fragment>
			<DrawerBody>
				<form id="Used Stock" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel>Select the item batch you used</FormLabel>
						<Select
							value={formValues.batch}
							onChange={(e) => {
								setFormValues({ ...formValues, batch: Number(e.target.value) });
							}}
							placeholder="Item Batches"
						>
							{itemBatches.map((itemBatch) => (
								<option value={itemBatch.id}>{itemBatch.expiryDate}</option>
							))}
						</Select>
					</FormControl>
					<FormControl my="2">
						<FormLabel>Stock used</FormLabel>
						<NumberInput value={formValues.quantity}>
							<NumberInputField
								value={formValues.quantity}
								onChange={(e) => {
									setFormValues({ ...formValues, quantity: Number(e.target.value) });
								}}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper
									onClick={() => {
										setFormValues({ ...formValues, quantity: formValues.quantity + 1 });
									}}
								/>
								<NumberDecrementStepper
									onClick={() => {
										setFormValues({ ...formValues, quantity: formValues.quantity - 1 });
									}}
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
				<Button form="Used Stock" type="submit" colorScheme="blue">
					Save
				</Button>
			</DrawerFooter>
		</React.Fragment>
	);
};

export default UsedStockForm;
