import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GridItem } from '@chakra-ui/react';
import ModalComp from '../ModalComp';
import AddMemberModal from './AddMemberModal';
import AddInventoryModal from './AddInventoryModal';
import InventoryList from './InventoryList';
import DeleteInventoryModal from './DeleteInventoryModal';
import MemberList from './MemberList';
import RemoveMemberModal from './RemoveMemberModal';

const ModalContainer = ({ colorMode }) => {
	const [ modalContent, setModalContent ] = useState('');
	const [ showModal, setShowModal ] = useState(false);
	const [ inventoriesToDelete, setInventoriesToDelete ] = useState([]);
	const [ membersToRemove, setMembersToRemove ] = useState([]);
	const openModal = (e) => {
		setModalContent(e.target.id);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<React.Fragment>
			<GridItem gridArea="members">
				<MemberList
					colorMode={colorMode}
					openModal={openModal}
					membersToRemove={membersToRemove}
					setMembersToRemove={setMembersToRemove}
				/>
			</GridItem>
			<GridItem gridArea="inv">
				<InventoryList
					colorMode={colorMode}
					openModal={openModal}
					inventoriesToDelete={inventoriesToDelete}
					setInventoriesToDelete={setInventoriesToDelete}
				/>
			</GridItem>
			<ModalComp isOpen={showModal} onClose={closeModal}>
				{(() => {
					if (modalContent === 'Add Members') {
						return <AddMemberModal onClose={closeModal} />;
					} else if (modalContent === 'Add Inventory') {
						return <AddInventoryModal onClose={closeModal} />;
					} else if (modalContent === 'Delete Inventories') {
						return <DeleteInventoryModal onClose={closeModal} inventoriesToDelete={inventoriesToDelete} />;
					} else if (modalContent === 'Remove Members') {
						return <RemoveMemberModal onClose={closeModal} membersToRemove={membersToRemove} />;
					}
				})()}
			</ModalComp>
		</React.Fragment>
	);
};

export default ModalContainer;
