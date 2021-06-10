import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Flex, useColorMode, Divider } from '@chakra-ui/react';
import SideNavBar from './SideNavBar';
import LabInviteItem from '../PageComponents/LabInvites/LabInviteItem';
const LabInvites = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const invites = useSelector((state) => state.labInvites.byID);
	console.log(Object.values(invites));
	return (
		<React.Fragment>
			<Flex minHeight="100vh" width="full">
				<SideNavBar />
				<Flex width="full" height="100vh" alignItems="center" justifyContent="center">
					<Flex
						direction="column"
						width="70%"
						height="80%"
						bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
						borderRadius="20px"
						shadow="lg"
					>
						<Flex m="6" px="5" width="full" height="5%" justifyContent="left">
							<Text fontSize="3xl">My Lab Invites</Text>
						</Flex>
						<Divider />
						{Object.values(invites).map((invite) => <LabInviteItem key={invite.id} invite={invite} />)}
					</Flex>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default LabInvites;
