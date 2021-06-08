import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Avatar, Text } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { parseHistoryChangeReason } from '../../HelperFunctions/organizeDataForStats';
const ItemActivityItem = ({ item }) => {
	const user = useSelector((state) => state.users.byID[item.history_user_id]);
	console.log(item);
	const [ action, amount ] = parseHistoryChangeReason(item);

	return (
		<React.Fragment>
			<Flex
				p="2"
				borderRadius="20px"
				justifyContent="space-between"
				alignItems="center"
				_hover={{ bg: 'gray.600' }}
			>
				<Flex alignItems="center">
					<Avatar name={user && user.username} />
					<Text px="5"> {user && user.username} </Text>
				</Flex>
				<Flex alignItems="center">
					{action !== null &&
						(action === 'Increase' ? (
							<AddIcon boxSize={3} color="green.600" />
						) : (
							<MinusIcon boxSize={3} color="red.600" />
						))}

					<Text px="4" fontSize="3xl">
						{amount}
					</Text>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default ItemActivityItem;
