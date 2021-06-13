import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import DeleteInventoryModal from '../../../PageComponents/Dashboard/DeleteInventoryModal';
import { Modal } from '@chakra-ui/react';
import RemoveMemberModal from '../../../PageComponents/Dashboard/RemoveMemberModal';

describe('<RemoveMemberModal/>', () => {
	it('Renders successfully', () => {
		const removeMemberModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<RemoveMemberModal membersToRemove={[]} />
				</Modal>
			</MemoryRouter>
		);
		removeMemberModalComp.getByText('Close');
		removeMemberModalComp.getByText('Yes');
	});
	it('Triggers correct function when modal closed', () => {
		const onClose = jest.fn();
		const removeMemberModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<RemoveMemberModal membersToRemove={[]} />
				</Modal>
			</MemoryRouter>
		);
		const closeButton = removeMemberModalComp.getByText('Close');
		fireEvent.click(closeButton);
		expect(onClose).toBeCalled;
	});
	it('Displays correct member names', () => {
		const removeMemberModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<RemoveMemberModal membersToRemove={[ { name: 'Test1' } ]} />
				</Modal>
			</MemoryRouter>
		);
		removeMemberModalComp.getByText('Test1');
	});
});
