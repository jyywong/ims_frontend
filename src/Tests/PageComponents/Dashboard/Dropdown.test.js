import '@testing-library/jest-dom';
import { render } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import Dropdown from '../../../PageComponents/Dashboard/Dropdown';

describe('<Dropdown/>', () => {
	it('Renders correctly', () => {
		const dropdownComp = render(
			<MemoryRouter>
				<Dropdown />
			</MemoryRouter>
		);
	});
});
