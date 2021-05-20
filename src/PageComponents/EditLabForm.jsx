import React from 'react';
import { Input, FormLabel, FormControl, FormHelperText } from '@chakra-ui/react';

const EditLabForm = () => {
	return (
		<React.Fragment>
			<form>
				<FormControl my="2">
					<FormLabel> Lab Name </FormLabel>
					<Input type="text" placeholder="New Lab Name" />
				</FormControl>
				<FormControl my="2">
					<FormLabel> Lab Description </FormLabel>
					<Input type="text" placeholder="New Lab Description" />
				</FormControl>
				<FormControl my="2">
					<FormLabel> Who is admin? </FormLabel>
					<Input type="text" placeholder="The admin" />
				</FormControl>
			</form>
		</React.Fragment>
	);
};

export default EditLabForm;
