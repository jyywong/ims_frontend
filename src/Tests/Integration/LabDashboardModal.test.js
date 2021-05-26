import '@testing-library/jest-dom';
import { render, fireEvent, testState } from '../testUtils';
import { MemoryRouter } from 'react-router-dom';
import ModalContainer from '../../PageComponents/Dashboard/ModalContainer';

const lab = testState.initialState.labs.byID[1];
describe('Lab Dashboard Modal Tests', () => {
	it('Displays the correct members in member list', () => {
		const modalContainerComp = render(
			<MemoryRouter>
				<ModalContainer lab={lab} />
			</MemoryRouter>,
			testState
		);
		modalContainerComp.getByText('TestUser 1');
		modalContainerComp.getByText('TestUser 2');
		expect(modalContainerComp.queryByText('TestUser 3')).not.toBeInTheDocument;
	});
	it.todo('Displays new member when added');
	it('Removes correct member', () => {
		const modalContainerComp = render(
			<MemoryRouter>
				<ModalContainer lab={lab} />
			</MemoryRouter>,
			testState
		);
		// const test1 = modalContainerComp.getByText('TestUser 1');
		// const test2 = modalContainerComp.getByText('TestUser 2');
		fireEvent.click(modalContainerComp.getByTestId('Remove member'));
		fireEvent.click(modalContainerComp.getByTestId('Checkbox 1'));
		fireEvent.click(modalContainerComp.getByText('Remove selected members'));
		modalContainerComp.debug();
		fireEvent.click(modalContainerComp.getByText('Yes'));
		modalContainerComp.getByText('TestUser 2');
		expect(modalContainerComp.queryByText('TestUser 1')).not.toBeInTheDocument;
	});
});
