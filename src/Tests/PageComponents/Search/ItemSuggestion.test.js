import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import ItemSuggestion from '../../../PageComponents/Search/ItemSuggestion';

describe('<ItemSuggestion/>', () => {
	it('Renders successfully with link, and correct name through props', () => {
		const itemSuggestionComp = render(
			<MemoryRouter>
				<ItemSuggestion item={{ name: 'Test 1' }} />
			</MemoryRouter>
		);
		itemSuggestionComp.getByText('Stock: 5');
		itemSuggestionComp.getByText('Test 1');
		itemSuggestionComp.getByTestId('Link');
	});
	it('Activates correct function when link is clicked', () => {
		const closePopover = jest.fn();
		const itemSuggestionComp = render(
			<MemoryRouter>
				<ItemSuggestion item={{ name: 'Test 1' }} />
			</MemoryRouter>
		);
		const link = itemSuggestionComp.getByTestId('Link');
		fireEvent.click(link);
		expect(closePopover).toBeCalled;
	});
});
