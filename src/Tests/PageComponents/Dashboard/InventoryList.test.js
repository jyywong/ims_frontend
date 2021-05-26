import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import InventoryList from '../../../PageComponents/Dashboard/InventoryList';
const initialState = {
	initialState: {
		inventories: {
			byID: {
				1: {
					id: 1,
					labID: 1,
					name: 'TestInventory 1',
					description: 'this is testinv 1',
					items: [ 1, 2, 3 ]
				}
			}
		}
	}
};
const lab = {
	id: 1,
	name: 'Test Lab 1',
	description: 'This is test lab 1',
	members: [ 1, 2 ],
	inventories: [ 1 ]
};
describe('<InventoryList/>', () => {
	it('Renders correctly', () => {
		const listComponentComp = render(
			<MemoryRouter>
				<InventoryList
					colorMode="light"
					openModal={() => {}}
					inventoriesToDelete={[]}
					setInventoriesToDelete={() => {}}
					lab={lab}
				/>
			</MemoryRouter>,
			initialState
		);
	});
	it('Activates correct function when "Add inventory" is clicked', () => {
		const openModal = jest.fn();
		const listComponentComp = render(
			<MemoryRouter>
				<InventoryList
					colorMode="light"
					openModal={openModal}
					inventoriesToDelete={[]}
					setInventoriesToDelete={() => {}}
					lab={lab}
				/>
			</MemoryRouter>,
			initialState
		);
		const addInvButton = listComponentComp.getByText('Add inventory');
		fireEvent.click(addInvButton);
		expect(openModal.mock.calls).toBeCalled;
	});
	it('Displays new buttons when "Remove Inventory" is clicked', () => {
		const listComponentComp = render(
			<MemoryRouter>
				<InventoryList
					colorMode="light"
					openModal={() => {}}
					inventoriesToDelete={[]}
					setInventoriesToDelete={() => {}}
					lab={lab}
				/>
			</MemoryRouter>,
			initialState
		);
		const removeInvButton = listComponentComp.getByText('Remove Inventory');
		fireEvent.click(removeInvButton);
		listComponentComp.getByText('Remove Selected Items');
		listComponentComp.getByText('Cancel');
	});
	it('Activates correct function when "Remove Selected Items" is clicked', () => {
		const openModal = jest.fn();
		const listComponentComp = render(
			<MemoryRouter>
				<InventoryList
					colorMode="light"
					openModal={openModal}
					inventoriesToDelete={[]}
					setInventoriesToDelete={() => {}}
					lab={lab}
				/>
			</MemoryRouter>,
			initialState
		);
		const removeInvButton = listComponentComp.getByText('Remove Inventory');
		fireEvent.click(removeInvButton);
		const removeButton = listComponentComp.getByText('Remove Selected Items');
		fireEvent.click(removeButton);
		expect(openModal.mock.calls).toBeCalled;
	});
	it('Correct buttons displayed when "Cancel" is clicked', () => {
		const openModal = jest.fn();
		const listComponentComp = render(
			<MemoryRouter>
				<InventoryList
					colorMode="light"
					openModal={openModal}
					inventoriesToDelete={[]}
					setInventoriesToDelete={() => {}}
					lab={lab}
				/>
			</MemoryRouter>,
			initialState
		);
		const removeInvButton = listComponentComp.getByText('Remove Inventory');
		fireEvent.click(removeInvButton);
		const cancelButton = listComponentComp.getByText('Cancel');
		fireEvent.click(cancelButton);
		expect(removeInvButton).toBeInTheDocument;
	});
});
