import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Modal } from '@chakra-ui/react';
import DeleteNotices from '../../../PageComponents/InventoryDash/DeleteNotices';

describe('<DeleteNotices/>', () => {
	it('Renders successfully', () => {
		const deleteNoticesComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteNotices onClose={() => {}} noticesToDelete={[]} />
				</Modal>
			</MemoryRouter>
		);
		deleteNoticesComp.getByText('Delete notices');
		deleteNoticesComp.getByText('Close');
		deleteNoticesComp.getByText('Yes');
	});
	it('Triggers correct function when "close" is clicked', () => {
		const onClose = jest.fn();
		const deleteNoticesComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteNotices onClose={() => {}} noticesToDelete={[]} />
				</Modal>
			</MemoryRouter>
		);
		const closeButton = deleteNoticesComp.getByText('Close');
		fireEvent.click(closeButton);
		expect(onClose).toBeCalled;
	});
	it('Displays correct notices passed through props', () => {
		const deleteNoticesComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteNotices
						onClose={() => {}}
						noticesToDelete={[
							{ username: 'Testuser1', message: 'Testmessage 1' },
							{ username: 'Testuser2', message: 'Testmessage 2' }
						]}
					/>
				</Modal>
			</MemoryRouter>
		);
		deleteNoticesComp.getByText('Testuser1: Testmessage 1');
		deleteNoticesComp.getByText('Testuser2: Testmessage 2');
	});
});
