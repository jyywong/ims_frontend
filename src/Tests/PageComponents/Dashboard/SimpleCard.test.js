import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import SimpleCard from '../../../PageComponents/Dashboard/SimpleCard';

describe('<SimpleCard/>', () => {
	it('Renders correctly with props', () => {
		const simpleCardComp = render(
			<MemoryRouter>
				<SimpleCard number={1} description="Test desc" />
			</MemoryRouter>
		);
		simpleCardComp.getByText('1');
		simpleCardComp.getByText('Test desc');
	});
});
