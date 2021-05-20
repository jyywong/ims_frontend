import React, { useState } from 'react';
import {
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
const RestockForm = () => {
	const [ startDate, setStartDate ] = useState(new Date());
	return (
		<React.Fragment>
			<form>
				<FormControl my="2">
					<FormLabel>Number of units</FormLabel>
					<NumberInput>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl my="2">
					<FormLabel> Manufacturing Date </FormLabel>
					<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
				</FormControl>
				<FormControl my="2">
					<FormLabel> Expiry Date </FormLabel>
					<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
				</FormControl>
				<FormControl my="2">
					<FormLabel> Additional notes </FormLabel>
					<Textarea />
				</FormControl>
			</form>
		</React.Fragment>
	);
};

export default RestockForm;
