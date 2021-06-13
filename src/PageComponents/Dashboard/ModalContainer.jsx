import React, { useState } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { GridItem } from '@chakra-ui/react';
=======
import { GridItem, Button, Flex } from '@chakra-ui/react';
>>>>>>> 28dc643e34930052ecd908522afa8395f095d414
import ModalComp from '../ModalComp';
import AddMemberModal from './AddMemberModal';
import AddInventoryModal from './AddInventoryModal';
import InventoryList from './InventoryList';
import DeleteInventoryModal from './DeleteInventoryModal';
import MemberList from './MemberList';
import RemoveMemberModal from './RemoveMemberModal';

<<<<<<< HEAD
const ModalContainer = ({ colorMode }) => {
=======
const ModalContainer = ({ colorMode, lab }) => {
>>>>>>> 28dc643e34930052ecd908522afa8395f095d414
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
					lab={lab}
				/>
			</GridItem>
			<GridItem gridArea="inv">
				<InventoryList
					colorMode={colorMode}
					openModal={openModal}
					inventoriesToDelete={inventoriesToDelete}
					setInventoriesToDelete={setInventoriesToDelete}
					lab={lab}
				/>
			</GridItem>
			<ModalComp isOpen={showModal} onClose={closeModal}>
				{(() => {
					if (modalContent === 'Add Members') {
						return <AddMemberModal onClose={closeModal} lab={lab} />;
					} else if (modalContent === 'Add Inventory') {
						return <AddInventoryModal onClose={closeModal} lab={lab} />;
					} else if (modalContent === 'Delete Inventories') {
						return (
							<DeleteInventoryModal
								onClose={closeModal}
								lab={lab}
								inventoriesToDelete={inventoriesToDelete}
							/>
						);
					} else if (modalContent === 'Remove Members') {
						return <RemoveMemberModal onClose={closeModal} lab={lab} membersToRemove={membersToRemove} />;
					}
				})()}
			</ModalComp>
		</React.Fragment>
	);
};

export default ModalContainer;
