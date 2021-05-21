import React from 'react';
import { Drawer, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
const DrawerComp = ({ title, isOpen, onClose, btnRef, children }) => {
	return (
		<React.Fragment>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>{title}</DrawerHeader>

					{children}
				</DrawerContent>
			</Drawer>
		</React.Fragment>
	);
};

export default DrawerComp;
