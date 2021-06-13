import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import AddInventoryModal from '../../../PageComponents/Dashboard/AddInventoryModal';
import { Modal } from '@chakra-ui/react';

describe('<AddInventoryModal/>', () => {
	it('Renders successfully', () => {
		const addInventoryModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddInventoryModal />
				</Modal>
			</MemoryRouter>
		);
		addInventoryModalComp.getByText('Close');
		addInventoryModalComp.getByText('Add');
		addInventoryModalComp.getByPlaceholderText('Inventory name');
	});
	it('Triggers correct function when form closed', () => {
		const onClose = jest.fn();
		const addInventoryModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddInventoryModal lab={{ id: 1 }} onClose={onClose} />
				</Modal>
			</MemoryRouter>
		);
		const addButton = addInventoryModalComp.getByText('Add');
		fireEvent.click(addButton);
		expect(onClose.mock.calls).toBeCalled;
	});
});
