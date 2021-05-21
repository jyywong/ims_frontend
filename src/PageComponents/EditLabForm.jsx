import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, FormLabel, FormControl, DrawerBody, DrawerFooter, Button } from '@chakra-ui/react';
import { editLabDetails } from '../Reducers/LabReducer';
const EditLabForm = ({ onClose }) => {
	const [ formValues, setFormValues ] = useState({ name: '', desc: '', admin: '' });
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editLabDetails(formValues.name, formValues.desc, formValues.admin));
	};
	return (
		<React.Fragment>
			<DrawerBody>
				<form id="Edit Lab Form" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel> Lab Name </FormLabel>
						<Input
							type="text"
							value={formValues.name}
							placeholder="New Lab Name"
							onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Lab Description </FormLabel>
						<Input
							type="text"
							value={formValues.desc}
							placeholder="New Lab Description"
							onChange={(e) => setFormValues({ ...formValues, desc: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Who is admin? </FormLabel>
						<Input
							type="text"
							value={formValues.admin}
							placeholder="The admin"
							onChange={(e) => setFormValues({ ...formValues, admin: e.target.value })}
						/>
					</FormControl>
				</form>
			</DrawerBody>
			<DrawerFooter>
				<Button variant="outline" mr={3} onClick={onClose}>
					Cancel
				</Button>
				<Button form="Edit Lab Form" type="submit" colorScheme="blue">
					Save
				</Button>
			</DrawerFooter>
		</React.Fragment>
	);
};

export default EditLabForm;
