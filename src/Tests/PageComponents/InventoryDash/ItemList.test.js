import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import ItemList from '../../../PageComponents/InventoryDash/ItemList';
const inventory = {
	id: 1,
	labID: 1,
	name: 'TestInventory 1',
	description: 'this is testinv 1',
	items: [ 1, 2, 3 ]
};
describe('<ItemList/>', () => {
	it('Renders successfully', () => {
		const itemListComp = render(
			<MemoryRouter>
				<ItemList openModal={() => {}} itemsToDelete={[]} setItemsToDelete={() => {}} inventory={inventory} />
			</MemoryRouter>
		);
	});
	it('Activates correct function when "Add items" is clicked', () => {
		const openModal = jest.fn();
		const itemListComp = render(
			<MemoryRouter>
				<ItemList openModal={openModal} itemsToDelete={[]} setItemsToDelete={() => {}} inventory={inventory} />
			</MemoryRouter>
		);
		const addButton = itemListComp.getByText('Add items');
		fireEvent.click(addButton);
		expect(openModal).toBeCalled;
	});
	it('Displays new buttons when "Delete items"', () => {
		const itemListComp = render(
			<MemoryRouter>
				<ItemList openModal={() => {}} itemsToDelete={[]} setItemsToDelete={() => {}} inventory={inventory} />
			</MemoryRouter>
		);
		const deleteButton = itemListComp.getByText('Delete items');
		fireEvent.click(deleteButton);
		itemListComp.getByText('Remove selected items');
		itemListComp.getByText('Cancel');
	});
	it('Activates correct function when "Remove selected items"', () => {
		const openModal = jest.fn();
		const itemListComp = render(
			<MemoryRouter>
				<ItemList openModal={openModal} itemsToDelete={[]} setItemsToDelete={() => {}} inventory={inventory} />
			</MemoryRouter>
		);
		const deleteButton = itemListComp.getByText('Delete items');
		fireEvent.click(deleteButton);
		const deleteItemButton = itemListComp.getByText('Remove selected items');
		fireEvent.click(deleteItemButton);
		expect(openModal).toBeCalled;
	});
	it('Displays correct buttons when "Cancel" is clicked', () => {
		const itemListComp = render(
			<MemoryRouter>
				<ItemList openModal={() => {}} itemsToDelete={[]} setItemsToDelete={() => {}} inventory={inventory} />
			</MemoryRouter>
		);
		const deleteButton = itemListComp.getByText('Delete items');
		fireEvent.click(deleteButton);
		const cancelButton = itemListComp.getByText('Cancel');
		fireEvent.click(cancelButton);
		itemListComp.getByText('Add items');
		itemListComp.getByText('Delete items');
	});
});
