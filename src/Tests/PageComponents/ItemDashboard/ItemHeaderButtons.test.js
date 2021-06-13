import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import ItemHeaderButtons from '../../../PageComponents/ItemDashboard/ItemHeaderButtons';

describe('<ItemHeaderButtons/>', () => {
	it('Renders successfully', () => {
		const itemHeaderButtonsComp = render(
			<MemoryRouter>
				<ItemHeaderButtons />
			</MemoryRouter>
		);
		itemHeaderButtonsComp.getByText('Edit Item');
		itemHeaderButtonsComp.getByText('Request an order');
		itemHeaderButtonsComp.getByText('Add a restock');
	});
	it('Activates correct function when buttons are clicked', () => {
		const openDrawer = jest.fn();
		const itemHeaderButtonsComp = render(
			<MemoryRouter>
				<ItemHeaderButtons openDrawer={openDrawer} />
			</MemoryRouter>
		);
		const editButton = itemHeaderButtonsComp.getByText('Edit Item');
		const orderButton = itemHeaderButtonsComp.getByText('Request an order');
		const restockButton = itemHeaderButtonsComp.getByText('Add a restock');
		fireEvent.click(editButton);
		fireEvent.click(orderButton);
		fireEvent.click(restockButton);
		expect(openDrawer).toBeCalledTimes(3);
	});
});
