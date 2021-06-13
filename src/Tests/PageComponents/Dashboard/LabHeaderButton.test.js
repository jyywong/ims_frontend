import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import LabHeaderButtons from '../../../PageComponents/Dashboard/LabHeaderButtons';

describe('<LabHeaderButtons/>', () => {
	it('Renders succesfully', () => {
		const labHeaderButtonsComp = render(
			<MemoryRouter>
				<LabHeaderButtons />
			</MemoryRouter>
		);
		labHeaderButtonsComp.getByText('Edit Lab');
	});
	it('Activates correct function when button is clicked ', () => {
		const openDrawer = jest.fn();
		const labHeaderButtonsComp = render(
			<MemoryRouter>
				<LabHeaderButtons />
			</MemoryRouter>
		);
		const button = labHeaderButtonsComp.getByText('Edit Lab');
		fireEvent.click(button);
		expect(openDrawer.mock.calls).toBeCalled;
	});
});
