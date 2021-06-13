import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Drawer } from '@chakra-ui/react';
import RestockForm from '../../../PageComponents/ItemDashboard/RestockForm';
describe('<RestockForm/>', () => {
	it('Renders successfully', () => {
		const restockFormComp = render(
			<MemoryRouter>
				<Drawer isOpen={true}>
					<RestockForm />
				</Drawer>
			</MemoryRouter>
		);
		restockFormComp.getByText('Number of units');
		restockFormComp.getByText('Manufacturing Date');
		restockFormComp.getByText('Expiry Date');
		restockFormComp.getByText('Additional notes');
	});
	it('Activates correct function when "Cancel" is clicked', () => {
		const setShowDrawer = jest.fn();
		const restockFormComp = render(
			<MemoryRouter>
				<Drawer isOpen={true}>
					<RestockForm setShowDrawer={setShowDrawer} />
				</Drawer>
			</MemoryRouter>
		);
		const cancelButton = restockFormComp.getByText('Cancel');
		fireEvent.click(cancelButton);
		expect(setShowDrawer).toBeCalled;
	});
	it.todo('Tests for number stepper buttons');
});
