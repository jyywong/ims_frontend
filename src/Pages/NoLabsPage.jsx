import React, { useState } from 'react';
import {
	Flex,
	Button,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	useColorMode
} from '@chakra-ui/react';
import CreateLabModal from '../PageComponents/NoLabs/CreateLabModal';
const NoLabsPage = () => {
	const [ openModal, setOpenModal ] = useState(false);
	const closeModal = () => {
		setOpenModal(false);
	};
	return (
		<React.Fragment>
			<Flex direction="column" width="full" height="100vh" alignItems="center" justifyContent="center">
				<Text my="2" fontSize="3xl">
					Welcome to MoonMS!
				</Text>
				<Flex>
					<Button
						colorScheme="green"
						mx="2"
						onClick={() => {
							setOpenModal(true);
						}}
					>
						Create a lab
					</Button>
					<Button colorScheme="orange" mx="2">
						See invites
					</Button>
				</Flex>
			</Flex>
			<Modal isOpen={openModal} onClose={closeModal} isCentered>
				<ModalOverlay />
				<CreateLabModal closeModal={closeModal} />
			</Modal>
		</React.Fragment>
	);
};

export default NoLabsPage;
