import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import ActivityItem from '../../../PageComponents/InventoryDash/ActivityItem';

describe('<ActivityItem/>', () => {
	it('Renders successfully', () => {
		const activityItemComp = render(
			<MemoryRouter>
				<ActivityItem />
			</MemoryRouter>
		);
		activityItemComp.getByText('John Doe');
		activityItemComp.getByText('5');
	});
});
