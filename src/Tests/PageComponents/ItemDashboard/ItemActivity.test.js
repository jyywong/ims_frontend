import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Modal } from '@chakra-ui/react';
import DeleteItems from '../../../PageComponents/InventoryDash/DeleteItems';
import ItemActivity from '../../../PageComponents/ItemDashboard/ItemActivity';

describe('<ItemActivity/>', () => {
	it('Renders successfully', () => {
		const itemActivityComp = render(
			<MemoryRouter>
				<ItemActivity />
			</MemoryRouter>
		);
		itemActivityComp.getByText('Recent Activity');
	});
});
