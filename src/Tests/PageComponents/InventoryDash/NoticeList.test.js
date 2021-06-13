import '@testing-library/jest-dom';
import { render, fireEvent } from '../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import NoticeList from '../../../PageComponents/InventoryDash/NoticeList';

describe('<NoticeList/>', () => {
	it('Renders successfully', () => {
		const noticeListComp = render(
			<MemoryRouter>
				<NoticeList inventory={{ notices: [] }} />
			</MemoryRouter>
		);
		noticeListComp.getByTestId('Add Icon');
		noticeListComp.getByTestId('Minus Icon');
	});
	it('Activates correct function when Add Icon is clicked', () => {
		const openModal = jest.fn();
		const noticeListComp = render(
			<MemoryRouter>
				<NoticeList inventory={{ notices: [] }} openModal={openModal} />
			</MemoryRouter>
		);
		const addButton = noticeListComp.getByTestId('Add Icon');
		fireEvent.click(addButton);
		expect(openModal).toBeCalled;
	});
	it('Shows new buttons when Minus Icon is clicked', () => {
		const noticeListComp = render(
			<MemoryRouter>
				<NoticeList inventory={{ notices: [] }} />
			</MemoryRouter>
		);
		const deleteButton = noticeListComp.getByTestId('Minus Icon');
		fireEvent.click(deleteButton);
		noticeListComp.getByText('Cancel');
		noticeListComp.getByText('Remove selected notices');
	});
	it('Activates correct function when "Remove selected notices" is clicked', () => {
		const openModal = jest.fn();
		const noticeListComp = render(
			<MemoryRouter>
				<NoticeList inventory={{ notices: [] }} openModal={openModal} />
			</MemoryRouter>
		);
		const deleteButton = noticeListComp.getByTestId('Minus Icon');
		fireEvent.click(deleteButton);
		const removeButton = noticeListComp.getByText('Remove selected notices');
		fireEvent.click(removeButton);
		expect(openModal).toBeCalled;
	});
	it('Activates correct function when "Cancel" is clicked', () => {
		const setNoticesToDelete = jest.fn();
		const noticeListComp = render(
			<MemoryRouter>
				<NoticeList inventory={{ notices: [] }} openModal={() => {}} setNoticesToDelete={setNoticesToDelete} />
			</MemoryRouter>
		);
		const deleteButton = noticeListComp.getByTestId('Minus Icon');
		fireEvent.click(deleteButton);
		const cancelButton = noticeListComp.getByText('Cancel');
		fireEvent.click(cancelButton);
		expect(setNoticesToDelete).toBeCalled;
	});
});
