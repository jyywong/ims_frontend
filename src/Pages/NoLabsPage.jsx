import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Text, Modal, ModalOverlay, useColorMode } from '@chakra-ui/react';
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
					<Link to="/invites">
						<Button colorScheme="orange" mx="2">
							See invites
						</Button>
					</Link>
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
