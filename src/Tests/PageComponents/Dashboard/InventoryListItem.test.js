import '@testing-library/jest-dom';
import { render } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import InventoryListItem from '../../../PageComponents/Dashboard/InventoryListItem';

describe('<InventoryListItem/>', () => {
	it('Renders successfully', () => {
		const inventoryListItemComp = render(
			<MemoryRouter>
				<InventoryListItem id={1} inventory={{ id: 1, items: [] }} />
			</MemoryRouter>
		);
		inventoryListItemComp.getByText('0 items');
	});
	it('Displays correct name and item quantity through props', () => {
		const inventoryListItemComp = render(
			<MemoryRouter>
				<InventoryListItem id={1} name="Test1" inventory={{ id: 1, items: [] }} itemQuantity="5" />
			</MemoryRouter>
		);
		inventoryListItemComp.getByText('Test1');
		inventoryListItemComp.getByText(/0 items/);
	});
	it('Displays checkbox when deleteInventory is true', () => {
		const inventoryListItemComp = render(
			<MemoryRouter>
				<InventoryListItem
					id={1}
					name="Test1"
					inventory={{ id: 1, items: [] }}
					itemQuantity="5"
					deleteInventory={true}
				/>
			</MemoryRouter>
		);
		inventoryListItemComp.getByTestId('Checkbox 1');
	});
	it('Does not display checkbox when deleteInventory is false', () => {
		const inventoryListItemComp = render(
			<MemoryRouter>
				<InventoryListItem
					id={1}
					name="Test1"
					inventory={{ id: 1, items: [] }}
					itemQuantity="5"
					deleteInventory={false}
				/>
			</MemoryRouter>
		);
		expect(inventoryListItemComp.queryByTestId('Checkbox 1')).not.toBeInTheDocument;
	});
	it('Does not have link when deleteInventory is true', () => {
		const inventoryListItemComp = render(
			<MemoryRouter>
				<InventoryListItem
					id={1}
					name="Test1"
					inventory={{ id: 1, items: [] }}
					itemQuantity="5"
					deleteInventory={false}
				/>
			</MemoryRouter>
		);
		expect(inventoryListItemComp.queryByTestId('Inv Link')).not.toBeInTheDocument;
	});
	it('Has link when deleteInventory is false', () => {
		const inventoryListItemComp = render(
			<MemoryRouter>
				<InventoryListItem
					id={1}
					name="Test1"
					inventory={{ id: 1, items: [] }}
					itemQuantity="5"
					deleteInventory={false}
				/>
			</MemoryRouter>
		);
		expect(inventoryListItemComp.queryByTestId('Inv Link')).toBeInTheDocument;
	});
});
