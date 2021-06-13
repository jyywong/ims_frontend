import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { Modal } from '@chakra-ui/react';
import DeleteItems from '../../../PageComponents/InventoryDash/DeleteItems';
import ItemInformation from '../../../PageComponents/ItemDashboard/ItemInformation';

describe('<ItemInformation/>', () => {
	it('Renders successfully with correct notes and manu through props', () => {
		const itemInformationComp = render(
			<MemoryRouter>
				<ItemInformation item={{ manufacturer: 'Test manu', notes: 'Test notes' }} />
			</MemoryRouter>
		);
		itemInformationComp.getByText('Test manu');
		itemInformationComp.getByText('Test notes');
	});
});
