import React from 'react';
import { Text, Flex, useColorMode, Divider } from '@chakra-ui/react';
import SideNavBar from './SideNavBar';
import LabInviteItem from '../PageComponents/LabInvites/LabInviteItem';
const LabInvites = () => {
	const { colorMode, toggleColorMode } = useColorMode();

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
						<LabInviteItem />
					</Flex>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default LabInvites;
