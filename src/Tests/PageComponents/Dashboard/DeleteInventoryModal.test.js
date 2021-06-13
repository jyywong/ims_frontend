import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import DeleteInventoryModal from '../../../PageComponents/Dashboard/DeleteInventoryModal';
import { Modal } from '@chakra-ui/react';

describe('<DeleteInventoryModal/>', () => {
	it('Renders successfully', () => {
		const deleteInventoryModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteInventoryModal lab={{ id: 1 }} inventoriesToDelete={[ 1 ]} />
				</Modal>
			</MemoryRouter>
		);
		deleteInventoryModalComp.getByText('Close');
		deleteInventoryModalComp.getByText('Yes');
	});
	it('Activates correct function when modal closed', () => {
		const onClose = jest.fn();
		const deleteInventoryModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteInventoryModal
						onClose={onClose}
						lab={{ id: 1 }}
						inventoriesToDelete={[ { name: 'test1' }, { name: 'test2' } ]}
					/>
				</Modal>
			</MemoryRouter>
		);
		const closeButton = deleteInventoryModalComp.getByText('Close');
		fireEvent.click(closeButton);
		expect(onClose.mock.calls).toBeCalled;
	});
	it('Displays correct amount of items to delete', () => {
		const onClose = () => {};
		const deleteInventoryModalComp = render(
			<MemoryRouter>
				<Modal isOpen={true}>
					<DeleteInventoryModal
						onClose={onClose}
						lab={{ id: 1 }}
						inventoriesToDelete={[ { name: 'test1' }, { name: 'test2' } ]}
					/>
				</Modal>
			</MemoryRouter>
		);
		deleteInventoryModalComp.getByText('test1');
		deleteInventoryModalComp.getByText('test2');
	});
});
