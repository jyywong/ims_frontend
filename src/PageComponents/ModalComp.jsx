import React from 'react';
import { Modal, ModalOverlay } from '@chakra-ui/react';
const ModalComp = ({ isOpen, onClose, children }) => {
	return (
		<React.Fragment>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				{children}
			</Modal>
		</React.Fragment>
	);
};

export default ModalComp;
