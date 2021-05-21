import React, { useState, useEffect } from 'react';
import { Flex, Avatar, Text, Checkbox } from '@chakra-ui/react';
const MemberListItem = ({ id, name, removeMember, membersToRemove, setMembersToRemove }) => {
	const [ isChecked, setIsChecked ] = useState(false);
	useEffect(
		() => {
			setIsChecked(false);
		},
		[ removeMember ]
	);
	const handleChange = () => {
		!isChecked
			? setMembersToRemove([ ...membersToRemove, { id, name } ])
			: setMembersToRemove(membersToRemove.filter((member) => member.id !== id));

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
					<Avatar name={name} />
					<Text px="5"> {name} </Text>
				</Flex>
				<Text px="4" color="gray.400" fontSize="sm">
					Role
				</Text>
				{removeMember && <Checkbox isChecked={isChecked} onChange={handleChange} />}
			</Flex>
		</React.Fragment>
	);
};

export default MemberListItem;
