import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import VerticalChartCard from '../../../PageComponents/Dashboard/VerticalChartCard';

describe('<VerticalChartCard/>', () => {
	test.todo('Implemet renders succesfully, currently weird errors with htmlcanvas element');
	// it('Renders successfully', () => {
	// 	const verticalChartCardComp = render(
	// 		<MemoryRouter>
	// 			<VerticalChartCard />
	// 		</MemoryRouter>
	// 	);
	// 	verticalChartCardComp.getByText('State of the lab');
	// 	verticalChartCardComp.getByText('Items that are full');
	// 	verticalChartCardComp.getByText('Items that are almost low');
	// 	verticalChartCardComp.getByText('Items that are low');
	// });
});
