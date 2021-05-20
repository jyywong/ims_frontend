import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GridItem, Button } from '@chakra-ui/react';
import ListComponent from '../ListComponent';
import MemberListItem from './MemberListItem';
import InventoryListItem from './InventoryListItem';
import ModalComp from '../ModalComp';
import AddMemberModal from './AddMemberModal';
import AddInventoryModal from './AddInventoryModal';

const ModalContainer = ({ colorMode }) => {
	const lab = useSelector((lab) => lab);
	const [ modalContent, setModalContent ] = useState();
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
			<GridItem gridArea="members">
				<ListComponent colorMode={colorMode} title="Members">
					<Button
						id="Members"
						bg={colorMode === 'light' ? 'green.200' : 'green.600'}
						shadow="lg"
						onClick={openModal}
					>
						Add member
					</Button>
					{lab.members.map((member) => <MemberListItem key={member.id} name={member.name} />)}
				</ListComponent>
			</GridItem>
			<GridItem gridArea="inv">
				<ListComponent colorMode={colorMode} title="Inventories">
					<Button
						id="Inventory"
						bg={colorMode === 'light' ? 'green.200' : 'green.600'}
						shadow="lg"
						onClick={openModal}
					>
						Add inventory
					</Button>
					{lab.inventories.map((inventory) => (
						<InventoryListItem
							key={inventory.id}
							name={inventory.name}
							itemQuantity={inventory.itemCount}
						/>
					))}
				</ListComponent>
			</GridItem>
			<ModalComp isOpen={showModal} onClose={closeModal}>
				{modalContent === 'Members' ? (
					<AddMemberModal onClose={closeModal} />
				) : (
					<AddInventoryModal onClose={closeModal} />
				)}
			</ModalComp>
		</React.Fragment>
	);
};

export default ModalContainer;
