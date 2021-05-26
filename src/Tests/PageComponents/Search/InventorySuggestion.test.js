import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import InventorySuggestion from '../../../PageComponents/Search/InventorySuggestion';

describe('<InventorySuggestion/>', () => {
	it('Renders successfully with a link, correct name, and item count', () => {
		const inventorySuggestionComp = render(
			<MemoryRouter>
				<InventorySuggestion inventory={{ name: 'Test1', itemCount: 5 }} />
			</MemoryRouter>
		);
		inventorySuggestionComp.getByText('Test1');
		inventorySuggestionComp.getByText('Items: 5');
		inventorySuggestionComp.getByTestId('Link');
	});
	it('Activates correct function when link is clicked', () => {
		const closePopover = jest.fn();
		const inventorySuggestionComp = render(
			<MemoryRouter>
				<InventorySuggestion inventory={{ name: 'Test1', itemCount: 5 }} />
			</MemoryRouter>
		);
		const link = inventorySuggestionComp.getByTestId('Link');
		fireEvent.click(link);
		expect(closePopover).toBeCalled;
	});
});
