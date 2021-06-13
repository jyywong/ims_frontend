import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import MessageListItem from '../../../PageComponents/InventoryDash/MessageListItem';

describe('<MessageListItem/>', () => {
	it('Renders successfully with username, and message through props', () => {
		const messageListItemComp = render(
			<MemoryRouter>
				<MessageListItem username="Testuser" message="Test 1" />
			</MemoryRouter>
		);
		messageListItemComp.getByText('Testuser');
		messageListItemComp.getByText('Test 1');
	});
	it('Shows checkbox when deleteNotices is true', () => {
		const messageListItemComp = render(
			<MemoryRouter>
				<MessageListItem username="Testuser" message="Test 1" deleteNotices={true} />
			</MemoryRouter>
		);
		messageListItemComp.getByTestId('Checkbox');
	});
	it('Does not show checkbox when deleteNotices is false', () => {
		const messageListItemComp = render(
			<MemoryRouter>
				<MessageListItem username="Testuser" message="Test 1" deleteNotices={false} />
			</MemoryRouter>
		);
		expect(messageListItemComp.queryByTestId('Checkbox')).not.toBeInTheDocument;
	});
	it('Activates correct function when checkbox is clicked', () => {
		const setNoticesToDelete = jest.fn();
		const messageListItemComp = render(
			<MemoryRouter>
				<MessageListItem
					username="Testuser"
					message="Test 1"
					deleteNotices={true}
					setNoticesToDelete={setNoticesToDelete}
					noticesToDelete={[]}
				/>
			</MemoryRouter>
		);
		const checkbox = messageListItemComp.getByTestId('Checkbox');
		fireEvent.click(checkbox);
		expect(setNoticesToDelete).toBeCalled;
	});
});
