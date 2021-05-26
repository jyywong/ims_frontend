import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import AddMemberModal from '../../../PageComponents/Dashboard/AddMemberModal';
import { Modal } from '@chakra-ui/react';

describe('<AddMemberModal/>', () => {
	it('Renders successfully', () => {
		const addMemberModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddMemberModal />
				</Modal>
			</MemoryRouter>
		);
		addMemberModalComp.getByText('Close');
		addMemberModalComp.getByText('Send');
		addMemberModalComp.getByPlaceholderText("Invitee's Email");
	});
	it('Activates correct function when modal closed', () => {
		const onClose = jest.fn();
		const addMemberModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddMemberModal onClose={onClose} />
				</Modal>
			</MemoryRouter>
		);
		const sendButton = addMemberModalComp.getByText('Send');
		fireEvent.click(sendButton);
		expect(onClose.mock.calls).toBeCalled;
	});
});
