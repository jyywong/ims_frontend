import React from 'react';
import { useDispatch } from 'react-redux';
import { FcInvite } from 'react-icons/fc';
import { Flex, Button, Text, Icon } from '@chakra-ui/react';
import { acceptLabInvite } from '../../Services/LabServices';
import { fetchLabsTC } from '../../ActionCreators/labActions';
const LabInviteItem = ({ invite }) => {
	const dispatch = useDispatch();
	const handleAccept = () => {
		(async () => {
			try {
				const response = await acceptLabInvite(invite.id);
				console.log(response);
				await dispatch(fetchLabsTC);
			} catch (error) {
				console.log(error.message);
			}
		})();
	};
	return (
		<React.Fragment>
			<Flex
				p="2"
				borderRadius="20px"
				alignItems="center"
				justifyContent="space-between"
				overflow="auto"
				_hover={{ bg: 'gray.600' }}
			>
				<Flex alignItems="center">
					<Icon m="5" boxSize="10" as={FcInvite} />
					<Text> You have been invited to join: {invite.lab}</Text>
				</Flex>
				<Flex>
					{invite.status === 'Pending' ? (
						<React.Fragment>
							<Button m="5" colorScheme="green" onClick={handleAccept}>
								Accept
							</Button>
							<Button m="5" justifySelf="right" colorScheme="red">
								Decline
							</Button>
						</React.Fragment>
					) : (
						<Text m="4" color="green" fontSize="2xl">
							Accepted
						</Text>
					)}
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default LabInviteItem;
