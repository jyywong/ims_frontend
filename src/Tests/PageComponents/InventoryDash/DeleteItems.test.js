import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Modal } from '@chakra-ui/react';
import DeleteItems from '../../../PageComponents/InventoryDash/DeleteItems';

describe('<DeleteItems/>', () => {
	it('Renders successfully', () => {
		const deleteItemsComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteItems itemsToDelete={[]} setItemsToDelete={() => {}} />
				</Modal>
			</MemoryRouter>
		);
		deleteItemsComp.getByText('Delete items');
		deleteItemsComp.getByText('Close');
		deleteItemsComp.getByText('Yes');
	});
	it('Triggers correct function when "Close" is clicked', () => {
		const onClose = jest.fn();
		const deleteItemsComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteItems onClose={onClose} itemsToDelete={[]} setItemsToDelete={() => {}} />
				</Modal>
			</MemoryRouter>
		);
		const closeButton = deleteItemsComp.getByText('Close');
		fireEvent.click(closeButton);
		expect(onClose).toBeCalled;
	});
	it('Triggers correct functinon when form submitted', () => {
		const setItemsToDelete = jest.fn();
		const deleteItemsComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteItems onClose={() => {}} itemsToDelete={[]} setItemsToDelete={setItemsToDelete} />
				</Modal>
			</MemoryRouter>
		);
		const submitButton = deleteItemsComp.getByText('Yes');
		fireEvent.click(submitButton);
		expect(submitButton).toBeCalled;
	});
});
