import React, { useState } from 'react';
import { Button, GridItem } from '@chakra-ui/react';
import ListComponent from '../ListComponent';
import ListItem from './ListItem';
import MessageListItem from './MessageListItem';
import ModalComp from '../ModalComp';
import AddItem from './AddItem';
import AddInvNotice from './AddInvNotice';
const InventoryModalContainer = ({ colorMode, inventory }) => {
	const [ modalContent, setModalContent ] = useState('');
	const [ showModal, setShowModal ] = useState(false);

	const openModal = (e) => {
		setModalContent(e.target.id);
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<React.Fragment>
			<GridItem gridArea="items">
				<ListComponent colorMode={colorMode} title="Items" listitem={ListItem}>
					<Button
						id="Items"
						bg={colorMode === 'light' ? 'green.200' : 'green.600'}
						shadow="lg"
						onClick={openModal}
					>
						Add items
					</Button>
					{inventory.items.map((item) => <ListItem key={item.id} name={item.name} />)}
				</ListComponent>
			</GridItem>
			<GridItem gridArea="notices">
				<ListComponent colorMode={colorMode} title="Inventory notices" listitem={MessageListItem}>
					<Button
						id="Notices"
						bg={colorMode === 'light' ? 'green.200' : 'green.600'}
						shadow="lg"
						onClick={openModal}
					>
						Add notice
					</Button>
					{inventory.notices.map((notice) => (
						<MessageListItem key={notice.id} username={notice.username} message={notice.message} />
					))}
				</ListComponent>
			</GridItem>
			<ModalComp isOpen={showModal} onClose={closeModal}>
				{modalContent === 'Items' ? <AddItem onClose={closeModal} /> : <AddInvNotice onClose={closeModal} />}
			</ModalComp>
		</React.Fragment>
	);
};

export default InventoryModalContainer;
