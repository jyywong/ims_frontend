import React, { useState, useEffect } from 'react';
import { Flex, Avatar, Text, Checkbox } from '@chakra-ui/react';
const MessageListItem = ({ id, username, message, deleteNotices, noticesToDelete, setNoticesToDelete }) => {
	const [ isChecked, setIsChecked ] = useState(false);
	useEffect(
		() => {
			setIsChecked(false);
		},
		[ deleteNotices ]
	);

	const handleChange = () => {
		!isChecked
			? setNoticesToDelete([ ...noticesToDelete, { id, username, message } ])
			: setNoticesToDelete(noticesToDelete.filter((item) => item.id !== id));
		setIsChecked(!isChecked);
	};
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
					<Avatar size="xs" name={username} />
					<Text fontSize="sm" px="5">
						{username}
					</Text>
				</Flex>
				<Text px="4" my="2" color="gray.400" fontSize="sm" textAlign="right">
					{message}
				</Text>
				{deleteNotices && <Checkbox data-testid="Checkbox" value={isChecked} onChange={handleChange} />}
			</Flex>
		</React.Fragment>
	);
};

export default MessageListItem;
