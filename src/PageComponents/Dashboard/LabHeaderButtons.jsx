import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
const LabHeaderButtons = ({ btnRef, openDrawer }) => {
	return (
		<React.Fragment>
			<Button ref={btnRef} onClick={openDrawer} mx="2" variant="outline" leftIcon={<EditIcon />}>
				<Text> Edit Lab </Text>
			</Button>
		</React.Fragment>
	);
};

export default LabHeaderButtons;
