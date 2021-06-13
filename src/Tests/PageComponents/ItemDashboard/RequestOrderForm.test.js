import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Drawer } from '@chakra-ui/react';
import RequestOrderForm from '../../../PageComponents/ItemDashboard/RequestOrderForm';
import { prettyDOM } from '@testing-library/dom';

describe('<RequestOrderForm/>', () => {
	it('Renders successfully', () => {
		const requestOrderFormComp = render(
			<MemoryRouter>
				<Drawer isOpen={true}>
					<RequestOrderForm />
				</Drawer>
			</MemoryRouter>
		);
		requestOrderFormComp.getByText('Number of Units Required');
		requestOrderFormComp.getByText('Date needed by');
		requestOrderFormComp.getByText('Additional notes');
	});
	it('Activates correct function when "Cancel" is clicked', () => {
		const setShowDrawer = jest.fn();
		const requestOrderFormComp = render(
			<MemoryRouter>
				<Drawer isOpen={true}>
					<RequestOrderForm setShowDrawer={setShowDrawer} />
				</Drawer>
			</MemoryRouter>
		);
		const cancelButton = requestOrderFormComp.getByText('Cancel');
		fireEvent.click(cancelButton);
		expect(setShowDrawer).toBeCalled;
	});
	it.todo('Implement tests on number increment steppers');
});
