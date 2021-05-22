import React from 'react';
import {
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Text,
	UnorderedList,
	ListItem
} from '@chakra-ui/react';
const DeleteNotices = ({ onClose, noticesToDelete }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onClose();
	};
	return (
		<ModalContent>
			<ModalHeader>Delete notices</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleSubmit}>
				<ModalBody>
					<Text fontSize="xl">Are you sure you want to permanently delete these notices?</Text>
					<UnorderedList>
						{noticesToDelete.map((notice) => (
							<ListItem key={notice.id}>
								{notice.username}:
								{' ' + notice.message}
							</ListItem>
						))}
					</UnorderedList>
				</ModalBody>
				<ModalFooter>
					<Button type="button" mx="1" onClick={onClose}>
						Close
					</Button>
					<Button type="submit" colorScheme="red" mx="1">
						Yes
					</Button>
				</ModalFooter>
			</form>
		</ModalContent>
	);
};

export default DeleteNotices;
