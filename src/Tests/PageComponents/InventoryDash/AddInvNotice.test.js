import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import AddInvNotice from '../../../PageComponents/InventoryDash/AddInvNotice';
import { Modal } from '@chakra-ui/react';
describe('<AddInvNotice/>', () => {
	it('Renders successfully', () => {
		const addInvNoticeComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddInvNotice />
				</Modal>
			</MemoryRouter>
		);
		addInvNoticeComp.getByText('Close');
		addInvNoticeComp.getByText('Post');
	});
	it('Activates correct function when modal closed', () => {
		const onClose = jest.fn();
		const addInvNoticeComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddInvNotice onClose={onClose} />
				</Modal>
			</MemoryRouter>
		);
		const closeButton = addInvNoticeComp.getByText('Close');
		fireEvent.click(closeButton);
		expect(onClose).toBeCalled;
	});
});
