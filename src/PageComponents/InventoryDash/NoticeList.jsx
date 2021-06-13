import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import ListComponent from '../ListComponent';
import MessageListItem from './MessageListItem';
const NoticeList = ({ colorMode, openModal, noticesToDelete, setNoticesToDelete, inventory }) => {
	const [ deleteNotices, setDeleteNotices ] = useState(false);
	const handleCancel = () => {
		setDeleteNotices(false);
		setNoticesToDelete([]);
	};
	return (
		<React.Fragment>
			<ListComponent
				colorMode={colorMode}
				title={deleteNotices ? '' : 'Inventory notices'}
				listitem={MessageListItem}
			>
				{deleteNotices ? (
					<Flex>
						<Button
							mx="2"
							id="Notices"
							bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
							shadow="lg"
							onClick={handleCancel}
						>
							Cancel
						</Button>
						<Button
							mx="2"
							id="Delete Notices"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={openModal}
						>
							Remove selected notices
						</Button>
					</Flex>
				) : (
					<Flex>
						<Button
							mx="2"
							id="Notices"
							bg={colorMode === 'light' ? 'green.200' : 'green.600'}
							shadow="lg"
							onClick={openModal}
						>
							<AddIcon />
						</Button>
						<Button
							mx="2"
							id="Notices"
							bg={colorMode === 'light' ? 'red.200' : 'red.600'}
							shadow="lg"
							onClick={() => setDeleteNotices(true)}
						>
							<MinusIcon />
						</Button>
					</Flex>
				)}

				{inventory.notices &&
					inventory.notices.map((notice) => (
						<MessageListItem
							key={notice.id}
							id={notice.id}
							username={notice.username}
							message={notice.message}
							deleteNotices={deleteNotices}
							noticesToDelete={noticesToDelete}
							setNoticesToDelete={setNoticesToDelete}
						/>
					))}
			</ListComponent>
		</React.Fragment>
	);
};

export default NoticeList;
