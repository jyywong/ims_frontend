import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Flex, useColorMode, Divider, Spinner } from '@chakra-ui/react';
import SideNavBar from './SideNavBar';
import LabInviteItem from '../PageComponents/LabInvites/LabInviteItem';
import { loadDataOrRedirectToLogin } from '../HelperFunctions/getAllData';
const LabInvites = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const history = useHistory();
	const dispatch = useDispatch();
	const invites = useSelector((state) => state.labInvites.byID);
	const [ pageIsLoading, setPageIsLoading ] = useState(true);
	useEffect(() => {
		loadDataOrRedirectToLogin(setPageIsLoading, dispatch, history);
	}, []);
	return pageIsLoading ? (
		<React.Fragment>
			<Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
				<Spinner size="xl" />
			</Flex>
		</React.Fragment>
	) : (
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
						{Object.values(invites).length > 1 ? (
							Object.values(invites).map((invite) => <LabInviteItem key={invite.id} invite={invite} />)
						) : (
							<Flex width="full" height="full" alignItems="center" justifyContent="center">
								<Text fontSize="xl">You don't seem to have any lab invites!</Text>
							</Flex>
						)}
					</Flex>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default LabInvites;
