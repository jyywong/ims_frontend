import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import MemberList from '../../../PageComponents/Dashboard/MemberList';
const initialState = {
	initialState: {
		users: {
			byID: {
				1: {
					id: 1,
					name: 'TestUser 1',
					email: 'email'
				},
				2: {
					id: 2,
					name: 'TestUser 2',
					email: 'email'
				},
				3: {
					id: 3,
					name: 'TestUser 3',
					email: 'email'
				}
			},
			allIDs: [ 1, 2, 3 ]
		}
	}
};
const lab = {
	id: 1,
	name: 'Test Lab 1',
	description: 'This is test lab 1',
	members: [ 1, 2 ],
	inventories: [ 1 ]
};
describe('<MemberList/>', () => {
	it('Renders succesfully', () => {
		const memberListComp = render(
			<MemoryRouter>
				<MemberList openModal={() => {}} membersToRemove={[]} setMembersToRemove={() => {}} lab={lab} />
			</MemoryRouter>,
			initialState
		);
	});
	it('Activates correct function when + icon is clicked ', () => {
		const openModal = jest.fn();
		const memberListComp = render(
			<MemoryRouter>
				<MemberList openModal={openModal} membersToRemove={[]} setMembersToRemove={() => {}} lab={lab} />
			</MemoryRouter>,
			initialState
		);
		const addButton = memberListComp.getByTestId('Add member');
		fireEvent.click(addButton);
		expect(openModal).toBeCalled;
	});
	it('Displays new buttons when - icon is clicked ', () => {
		const openModal = jest.fn();
		const memberListComp = render(
			<MemoryRouter>
				<MemberList openModal={openModal} membersToRemove={[]} setMembersToRemove={() => {}} lab={lab} />
			</MemoryRouter>,
			initialState
		);
		const removeButton = memberListComp.getByTestId('Remove member');
		fireEvent.click(removeButton);
		memberListComp.getByText('Cancel');
		memberListComp.getByText('Remove selected members');
	});
	it('Activates correct function when "Remove selected members" is clicked', () => {
		const openModal = jest.fn();
		const memberListComp = render(
			<MemoryRouter>
				<MemberList openModal={openModal} membersToRemove={[]} setMembersToRemove={() => {}} lab={lab} />
			</MemoryRouter>,
			initialState
		);
		const removeButton = memberListComp.getByTestId('Remove member');
		fireEvent.click(removeButton);
		const removeSelectedButton = memberListComp.getByText('Remove selected members');
		fireEvent.click(removeSelectedButton);
		expect(openModal).toBeCalled;
	});
	it('Correct buttons displayed when "Cancel" is clicked', () => {
		const openModal = jest.fn();
		const memberListComp = render(
			<MemoryRouter>
				<MemberList openModal={openModal} membersToRemove={[]} setMembersToRemove={() => {}} lab={lab} />
			</MemoryRouter>,
			initialState
		);
		const removeButton = memberListComp.getByTestId('Remove member');
		const addButton = memberListComp.getByTestId('Add member');
		fireEvent.click(removeButton);
		const removeSelectedButton = memberListComp.getByText('Cancel');
		fireEvent.click(removeSelectedButton);
		expect(removeButton).toBeInTheDocument;
		expect(addButton).toBeInTheDocument;
	});
});
