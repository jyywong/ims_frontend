import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import { FcInvite } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import {
	Box,
	Button,
	Flex,
	Divider,
	Text,
	Icon,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useColorMode
} from '@chakra-ui/react';
import { GiMoon } from 'react-icons/gi';
import SideNavBarLabLink from './SideNavBarLabLink';
import CreateLabModal from '../PageComponents/SideBar/CreateLabModal';

const SideNavBar = ({ labID, invID, itemID }) => {
	const [ showAddLabModal, setShowAddLabModal ] = useState(false);
	const labs = useSelector((state) => state.labs.byID);
	const inventory = useSelector((state) => state.inventories.byID[invID]);
	const item = useSelector((state) => state.items.byID[itemID]);
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<React.Fragment>
			<Flex
				direction="column"
				justifyContent="space-between"
				height="100vh"
				width={{ xl: '24vh', md: '12vh' }}
				bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
				shadow="md"
			>
				<Flex direction="column">
					<Flex m="3">
						<GiMoon size={40} />
						<Text ml="2" fontSize="2xl">
							Moon MS
						</Text>
					</Flex>
					<Box p={3} borderTop="1px">
						<Text fontSize="md"> My Labs </Text>
						<Divider />
						{Object.keys(labs).map((labKey) => (
							<SideNavBarLabLink
								key={labKey}
								colorMode={colorMode}
								id={Number(labKey)}
								name={labs[labKey].name}
								labID={(() => {
									if (labID) {
										return Number(labID);
									} else if (invID) {
										return inventory.labID;
									} else if (itemID) {
										return item.labID;
									}
								})()}
							/>
						))}

						<Text fontSize="md"> Utilities </Text>
						<Divider />
						<Flex
							m="2"
							p="2"
							alignItems="center"
							rounded="lg"
							_hover={{ bg: 'gray.700' }}
							onClick={() => setShowAddLabModal(true)}
							cursor="pointer"
						>
							<Icon as={AddIcon} boxSize="3" />
							<Text px="2" fontSize="sm">
								Add new lab
							</Text>
						</Flex>
						<Link to={'/invites'}>
							<Flex
								m="2"
								p="2"
								alignItems="center"
								rounded="lg"
								_hover={{ bg: 'gray.700' }}
								cursor="pointer"
							>
								<Icon as={FcInvite} />
								<Text ml="2" fontSize="sm">
									My invites
								</Text>
							</Flex>
						</Link>
					</Box>
				</Flex>
				<Flex direction="column">
					<Button justifySelf="flex-end" onClick={toggleColorMode}>
						Color Mode
					</Button>
				</Flex>
			</Flex>

			<CreateLabModal showAddLabModal={showAddLabModal} setShowAddLabModal={setShowAddLabModal} />
		</React.Fragment>
	);
};

export default SideNavBar;
