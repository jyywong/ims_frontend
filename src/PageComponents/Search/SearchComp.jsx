import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Input, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import ItemSuggestion from './ItemSuggestion';
import InventorySuggestion from './InventorySuggestion';

const SearchComp = () => {
	const [ searchValue, setSearchValue ] = useState('');
	const [ openPopover, setOpenPopover ] = useState(false);
	const [ searchResults, setSearchResults ] = useState({ labs: [], inventories: [], items: [] });
	const stateQuery = useSelector((state) => {
		return {
			labs: [],
			inventories: state.inventories.filter((inv) => inv.name.toLowerCase().includes(searchValue.toLowerCase())),
			items: [
				...state.inventories.map((inv) =>
					inv.items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
				)
			]
		};
	});
	const closePopover = () => {
		setOpenPopover(false);
		setSearchValue('');
	};
	useEffect(
		() => {
			searchValue ? setOpenPopover(true) : setOpenPopover(false);
			setSearchResults({ ...searchResults, inventories: stateQuery.inventories, items: stateQuery.items.flat() });
		},
		[ searchValue ]
	);
	return (
		<React.Fragment>
			{/* TODO: Figure out how to match popover width with searchbar width */}
			<Popover
				returnFocusOnClose={false}
				isOpen={openPopover}
				onClose={() => setOpenPopover(false)}
				placement="bottom-start"
				autoFocus={false}
				closeOnBlur={true}
			>
				<PopoverTrigger>
					<Input placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
				</PopoverTrigger>
				<PopoverContent width="69vw">
					<PopoverHeader fontSize="2xl">Items</PopoverHeader>
					<PopoverBody>
						{searchResults.items.map((item) => <ItemSuggestion item={item} closePopover={closePopover} />)}
					</PopoverBody>
					<PopoverHeader fontSize="2xl">Inventories</PopoverHeader>
					<PopoverBody>
						{searchResults.inventories.map((inv) => (
							<InventorySuggestion inventory={inv} closePopover={closePopover} />
						))}
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</React.Fragment>
	);
};

export default SearchComp;
