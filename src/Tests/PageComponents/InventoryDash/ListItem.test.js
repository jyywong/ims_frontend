import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import ListItem from '../../../PageComponents/InventoryDash/ListItem';

describe('<ListItem/>', () => {
	it('Renders successfully', () => {
		const listItemComp = render(
			<MemoryRouter>
				<ListItem inventory={{ id: 1 }} id={1} />
			</MemoryRouter>
		);
		listItemComp.getByText('7 in stock');
	});
	it('Displays correct name through props', () => {
		const listItemComp = render(
			<MemoryRouter>
				<ListItem inventory={{ id: 1 }} id={1} name="Test1" />
			</MemoryRouter>
		);
		listItemComp.getByText('Test1');
	});
	it('Shows checkbox when deleteItems is true', () => {
		const listItemComp = render(
			<MemoryRouter>
				<ListItem inventory={{ id: 1 }} id={1} name="Test1" deleteItems={true} />
			</MemoryRouter>
		);
		listItemComp.getByTestId('Checkbox');
	});
	it('Does not show checkbox when deleteItems is false', () => {
		const listItemComp = render(
			<MemoryRouter>
				<ListItem inventory={{ id: 1 }} id={1} name="Test1" deleteItems={false} />
			</MemoryRouter>
		);
		expect(listItemComp.queryByTestId('Checkbox')).not.toBeInTheDocument;
	});
	it('Does not have link when deleteItems is true', () => {
		const listItemComp = render(
			<MemoryRouter>
				<ListItem inventory={{ id: 1 }} id={1} name="Test1" deleteItems={true} />
			</MemoryRouter>
		);
		expect(listItemComp.queryByTestId('Link')).not.toBeInTheDocument;
	});
	it('Does have link when deleteItems is false', () => {
		const listItemComp = render(
			<MemoryRouter>
				<ListItem inventory={{ id: 1 }} id={1} name="Test1" deleteItems={false} />
			</MemoryRouter>
		);
		listItemComp.getByTestId('Link');
	});
	it('Activates correct function when checkbox is checked', () => {
		const setItemsToDelete = jest.fn();
		const listItemComp = render(
			<MemoryRouter>
				<ListItem
					inventory={{ id: 1 }}
					id={1}
					name="Test1"
					deleteItems={true}
					itemsToDelete={[]}
					setItemsToDelete={setItemsToDelete}
				/>
			</MemoryRouter>
		);
		const checkBox = listItemComp.getByTestId('Checkbox');
		fireEvent.click(checkBox);
		expect(setItemsToDelete).toBeCalled;
	});
});
