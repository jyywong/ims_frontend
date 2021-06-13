import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import StockItem from '../../../PageComponents/ItemDashboard/StockItem';

describe('<StockItem/>', () => {
	it('Renders successfully with correct date, quantity through props', () => {
		const stockItemComp = render(
			<MemoryRouter>
				<StockItem date="Test date" quantity={5} />
			</MemoryRouter>
		);
		stockItemComp.getByText('Expires: Test date');
		stockItemComp.getByText('5');
	});
});
