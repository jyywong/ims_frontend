import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Modal } from '@chakra-ui/react';
import AddItem from '../../../PageComponents/InventoryDash/AddItem';

describe('<AddItem/>', () => {
	it('Renders successfully', () => {
		const addItemComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddItem />
				</Modal>
			</MemoryRouter>
		);
		addItemComp.getByText('Item Name');
		addItemComp.getByText('Manufacturer');
		addItemComp.getByText('Unique Id');
		addItemComp.getByText('Other information');
	});
	it('Triggers correct function when modal is closed', () => {
		const onClose = jest.fn();
		const addItemComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<AddItem onClose={onClose} />
				</Modal>
			</MemoryRouter>
		);
		const closeButton = addItemComp.getByText('Cancel');
		fireEvent.click(closeButton);
		expect(onClose).toBeCalled;
	});
});
