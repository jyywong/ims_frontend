import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, FormLabel, FormControl, DrawerBody, DrawerFooter, Button, useToast } from '@chakra-ui/react';
import { editLabDetailsTC } from '../ActionCreators/labActions';
const EditLabForm = ({ labID, onClose }) => {
	const lab = useSelector((state) => state.labs.byID[labID]);
	const [ formValues, setFormValues ] = useState({ name: lab.name, desc: lab.description, admin: '' });
	const dispatch = useDispatch();
	const toast = useToast();
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				await dispatch(editLabDetailsTC(labID, formValues.name, formValues.desc));
				toast({
					title: 'Lab successfully edited',
					status: 'success',
					isClosable: 'true'
				});
			} catch (error) {
				toast({
					title: 'Unable to edit lab',
					description: error.message,
					status: 'error',
					isClosable: 'true'
				});
			}
		})();
		onClose();
	};
	return (
		<React.Fragment>
			<DrawerBody>
				<form id="Edit Lab Form" onSubmit={handleSubmit}>
					<FormControl my="2">
						<FormLabel> Lab Name </FormLabel>
						<Input
							id="New Lab Name"
							type="text"
							value={formValues.name}
							placeholder="New Lab Name"
							onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
						/>
					</FormControl>
					<FormControl my="2">
						<FormLabel> Lab Description </FormLabel>
						<Input
							id="New Lab Description"
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
