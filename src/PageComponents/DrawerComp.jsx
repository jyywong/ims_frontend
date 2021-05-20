import React from 'react';
import {
	Input,
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton
} from '@chakra-ui/react';
const DrawerComp = ({ title, isOpen, onClose, btnRef, children }) => {
	return (
		<React.Fragment>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>{title}</DrawerHeader>

					<DrawerBody>{children}</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</React.Fragment>
	);
};

export default DrawerComp;
