import React, { useState, useRef } from 'react';
import { Grid, GridItem, Button, Text, useColorMode } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FaExclamation } from 'react-icons/fa';
import { BiPackage, BiTrendingUp } from 'react-icons/bi';
import SimpleCard from '../PageComponents/Dashboard/SimpleCard';
import VerticalChartCard from '../PageComponents/Dashboard/VerticalChartCard';
import SearchBar from '../PageComponents/SearchBar';
import Header from '../PageComponents/Header';
import ListComponent from '../PageComponents/ListComponent';
import MemberListItem from '../PageComponents/Dashboard/MemberListItem';
import InventoryListItem from '../PageComponents/Dashboard/InventoryListItem';
import ModalComp from '../PageComponents/ModalComp';
import AddMemberModal from '../PageComponents/Dashboard/AddMemberModal';
import AddInventoryModal from '../PageComponents/Dashboard/AddInventoryModal';
import LabHeaderButtons from '../PageComponents/Dashboard/LabHeaderButtons';
import DrawerComp from '../PageComponents/DrawerComp';
import EditLabForm from '../PageComponents/EditLabForm';
import ModalContainer from '../PageComponents/Dashboard/ModalContainer';

const LabDashboard = () => {
	// const [ modalContent, setModalContent ] = useState();
	// const [ showModal, setShowModal ] = useState(false);
	const [ showDrawer, setShowDrawer ] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();
	const dispatch = useDispatch();
	const lab = useSelector((lab) => lab);
	const btnRef = useRef();

	const openDrawer = () => {
		setShowDrawer(true);
	};

	// const openModal = (e) => {
	// 	setModalContent(e.target.id);
	// 	setShowModal(true);
	// };

	// const closeModal = () => {
	// 	setShowModal(false);
	// };

	return (
		<React.Fragment>
			<Grid width="full" templateRows="5rem auto">
				<GridItem>
					<SearchBar />
				</GridItem>
				<GridItem>
					<Grid
						p="5"
						width="full"
						height="full"
						templateRows={{
							xl: '0.3fr  1fr 1fr 1fr',
							md: '10vh 15vh 30vh 1fr 1fr',
							sm: '10vh 10vh 10vh 10vh 50vh 40vh 40vh'
						}}
						templateColumns={{ xl: '1fr  1fr 1fr 1fr', md: '1fr 1fr 1fr', sm: '1fr' }}
						templateAreas={{
							xl: `
								'header header header header' 
								'card1 card2 card3 chart' 
								'members inv inv chart' 
								'members inv inv chart' 
								`,
							md: `
								'header header header'
								'card1 card2 card3'
								'chart chart chart'
								'inv inv inv'
								'members members members'
								`,
							sm: `
								'header'
								'card1'
								'card2'
								'card3'
								'chart'
								'inv'
								'members'
								`
						}}
						columnGap="3rem"
						rowGap="2rem"
					>
						<GridItem gridArea="header" alignSelf="center">
							<Header title={lab.name} description={lab.description}>
								<LabHeaderButtons btnRef={btnRef} openDrawer={openDrawer} />
							</Header>
						</GridItem>
						<GridItem gridArea="card1">
							<SimpleCard
								colorMode={colorMode}
								number={5}
								description="Pending order requests"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'yellow.100' : 'yellow.700'}
							/>
						</GridItem>
						<GridItem gridArea="card2">
							<SimpleCard
								colorMode={colorMode}
								number={8}
								description="Items recently refilled"
								icon={BiTrendingUp}
								iconBGcolor={colorMode === 'light' ? 'green.100' : 'green.700'}
							/>
						</GridItem>
						<GridItem gridArea="card3">
							<SimpleCard
								colorMode={colorMode}
								number={2}
								description="Items running low"
								icon={FaExclamation}
								iconBGcolor={colorMode === 'light' ? 'red.100' : 'red.700'}
							/>
						</GridItem>
						<GridItem gridArea="chart">
							<VerticalChartCard colorMode={colorMode} />
						</GridItem>
						{/* Maybe I should make the list like components one component */}
						<ModalContainer colorMode={colorMode} />
						{/* <GridItem gridArea="members">
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
						</ModalComp> */}
						<DrawerComp isOpen={showDrawer} onClose={() => setShowDrawer(false)} btnRef={btnRef}>
							<EditLabForm />
						</DrawerComp>
					</Grid>
				</GridItem>
			</Grid>
		</React.Fragment>
	);
};

export default LabDashboard;
