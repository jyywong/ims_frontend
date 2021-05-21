import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import ListComponent from '../ListComponent';
import MemberListItem from './MemberListItem';

const MemberList = ({ colorMode, openModal, membersToRemove, setMembersToRemove }) => {
	const members = useSelector((lab) => lab.members);
	const [ removeMember, setRemoveMember ] = useState(false);
	const handleCancel = () => {
		setRemoveMember(false);
		setMembersToRemove([]);
	};
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title={removeMember ? '' : 'Members'}>
				{removeMember ? (
					<Flex>
						<Button id="Add Members" colorScheme="gray" shadow="lg" onClick={handleCancel}>
							Cancel
						</Button>
						<Button
							mx="2"
							id="Remove Members"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={openModal}
						>
							Remove selected members
						</Button>
					</Flex>
				) : (
					<Flex>
						<Button
							id="Add Members"
							bg={colorMode === 'light' ? 'green.200' : 'green.600'}
							shadow="lg"
							onClick={openModal}
						>
							<AddIcon />
						</Button>
						<Button
							mx="2"
							id="Inventory"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={() => setRemoveMember(true)}
						>
							<MinusIcon />
						</Button>
					</Flex>
				)}

				{members.map((member) => (
					<MemberListItem
						key={member.id}
						id={member.id}
						name={member.name}
						removeMember={removeMember}
						membersToRemove={membersToRemove}
						setMembersToRemove={setMembersToRemove}
					/>
				))}
			</ListComponent>
		</React.Fragment>
	);
};

export default MemberList;
