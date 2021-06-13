import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import MemberListItem from '../../../PageComponents/Dashboard/MemberListItem';

describe('<MemberListItem/>', () => {
	it('Renders succesfully', () => {
		const memberListItemComp = render(
			<MemoryRouter>
				<MemberListItem />
			</MemoryRouter>
		);
		memberListItemComp.getByText('Role');
	});
	it('Displays correct name through props', () => {
		const memberListItemComp = render(
			<MemoryRouter>
				<MemberListItem name="Test1" />
			</MemoryRouter>
		);
		memberListItemComp.getByText('Test1');
	});
	it('Displays checkbox when removeMember is true', () => {
		const memberListItemComp = render(
			<MemoryRouter>
				<MemberListItem id={1} removeMember={true} />
			</MemoryRouter>
		);
		memberListItemComp.getByTestId('Checkbox 1');
	});
	it('Does not display checkbox when removeMember is false', () => {
		const memberListItemComp = render(
			<MemoryRouter>
				<MemberListItem id={1} removeMember={false} />
			</MemoryRouter>
		);
		expect(memberListItemComp.queryByTestId('Checkbox 1')).not.toBeInTheDocument;
	});
});
