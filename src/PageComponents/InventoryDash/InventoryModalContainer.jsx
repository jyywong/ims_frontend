import React, { useState } from 'react';
import { Flex, Button, GridItem } from '@chakra-ui/react';

import ModalComp from '../ModalComp';
import AddItem from './AddItem';
import AddInvNotice from './AddInvNotice';
import ItemList from './ItemList';
import DeleteItems from './DeleteItems';
import NoticeList from './NoticeList';
import DeleteNotices from './DeleteNotices';
const InventoryModalContainer = ({ colorMode, inventory, invID }) => {
	const [ modalContent, setModalContent ] = useState('');
	const [ showModal, setShowModal ] = useState(false);
	const [ itemsToDelete, setItemsToDelete ] = useState([]);
	const [ noticesToDelete, setNoticesToDelete ] = useState([]);
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
				<ItemList
					colorMode={colorMode}
					openModal={openModal}
					itemsToDelete={itemsToDelete}
					setItemsToDelete={setItemsToDelete}
					inventory={inventory}
					invID={invID}
				/>
			</GridItem>
			<GridItem gridArea="notices">
				<NoticeList
					colorMode={colorMode}
					openModal={openModal}
					noticesToDelete={noticesToDelete}
					setNoticesToDelete={setNoticesToDelete}
					inventory={inventory}
				/>
			</GridItem>
			<ModalComp isOpen={showModal} onClose={closeModal}>
				{(() => {
					if (modalContent === 'Items') {
						return <AddItem onClose={closeModal} invID={invID} />;
					} else if (modalContent === 'Notices') {
						return <AddInvNotice onClose={closeModal} />;
					} else if (modalContent === 'Delete Items') {
						return (
							<DeleteItems
								onClose={closeModal}
								itemsToDelete={itemsToDelete}
								setItemsToDelete={setItemsToDelete}
								invID={invID}
							/>
						);
					} else if (modalContent === 'Delete Notices') {
						return <DeleteNotices onClose={closeModal} noticesToDelete={noticesToDelete} />;
					}
				})()}
			</ModalComp>
		</React.Fragment>
	);
};

export default InventoryModalContainer;
