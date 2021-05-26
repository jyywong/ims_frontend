import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Drawer } from '@chakra-ui/react';
import EditItemForm from '../../../PageComponents/ItemDashboard/EditItemForm';

describe('<EditItemForm/>', () => {
	it('Renders successfully', () => {
		const editItemFormComp = render(
			<MemoryRouter>
				<Drawer isOpen={true}>
					<EditItemForm />
				</Drawer>
			</MemoryRouter>
		);
		editItemFormComp.getByText('Item Name');
		editItemFormComp.getByText('Item Description');
		editItemFormComp.getByText('Item Manufacturer');
		editItemFormComp.getByText('Notes');
		editItemFormComp.getByText('Current stock level');
		editItemFormComp.getByText('Minimum stock level');
	});
	it('Activates correct function when drawer closed', () => {
		const onClose = jest.fn();
		const editItemFormComp = render(
			<MemoryRouter>
				<Drawer isOpen={true}>
					<EditItemForm setShowDrawer={() => {}} onClose={onClose} />
				</Drawer>
			</MemoryRouter>
		);
		const cancelButton = editItemFormComp.getByText('Cancel');
		fireEvent.click(cancelButton);
		expect(onClose).toBeCalled;
	});
	it.todo('Need to write tests for number increment steppers');
});
