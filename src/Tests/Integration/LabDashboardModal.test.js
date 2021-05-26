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
	// This test does not work. Can't figure out how to click buttons that will appear in a modal.
	// When .debug() is shown, it shows the buttons, and getbytext has no problem finding them
	// however, they do nothing when they are clicked.

	// it('Removes correct member', () => {
	// 	const modalContainerComp = render(
	// 		<MemoryRouter>
	// 			<ModalContainer lab={lab} />
	// 		</MemoryRouter>,
	// 		testState
	// 	);
	// 	// const test1 = modalContainerComp.getByText('TestUser 1');
	// 	// const test2 = modalContainerComp.getByText('TestUser 2');
	// 	fireEvent.click(modalContainerComp.getByTestId('Remove member'));
	// 	fireEvent.click(modalContainerComp.getByTestId('Checkbox 1'));
	// 	fireEvent.click(modalContainerComp.getByText('Remove selected members'));
	// 	fireEvent.click(modalContainerComp.getByTestId('Confirm remove members'));
	// 	render(
	// 		<MemoryRouter>
	// 			<ModalContainer lab={lab} />
	// 		</MemoryRouter>,
	// 		testState
	// 	).debug();
	// 	expect(
	// 		render(
	// 			<MemoryRouter>
	// 				<ModalContainer lab={lab} />
	// 			</MemoryRouter>,
	// 			testState
	// 		).queryByText('TestUser 1')
	// 	).not.toBeInTheDocument;
	// });
});
