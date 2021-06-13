import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import SearchComp from '../../../PageComponents/Search/SearchComp';

describe('<SearchComp/>', () => {
	it('Renders successfully, and popover is not activated', () => {
		const searchComp = render(
			<MemoryRouter>
				<SearchComp />
			</MemoryRouter>
		);
		expect(searchComp.queryByText('Items')).not.toBeInTheDocument;
		expect(searchComp.queryByText('Inventories')).not.toBeInTheDocument;
	});
	it('Popover activates when typing in searchbar and typed value exists', () => {
		const searchComp = render(
			<MemoryRouter>
				<SearchComp />
			</MemoryRouter>
		);
		const input = searchComp.getByTestId('Input');
		fireEvent.change(input, {
			target: { value: 'Sugar' }
		});
		searchComp.getByText('Items');

		expect(searchComp.getByTestId('Input')).toHaveValue('Sugar');
	});
});
