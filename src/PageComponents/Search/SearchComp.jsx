import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, Input, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import ItemSuggestion from './ItemSuggestion';
import InventorySuggestion from './InventorySuggestion';

const SearchComp = () => {
	const [ searchValue, setSearchValue ] = useState('');
	const [ openPopover, setOpenPopover ] = useState(false);
	const [ searchResults, setSearchResults ] = useState({ labs: [], inventories: [], items: [] });
	const searchInventoriesByName = (state) => {
		const result = [];
		for (const [ key, value ] of Object.entries(state.inventories.byID)) {
			if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
				result.push(value);
			}
		}
		return result;
	};
	const searchItemsByName = (state) => {
		const result = [];
		for (const [ key, value ] of Object.entries(state.items.byID)) {
			if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
				result.push(value);
			}
		}
		return result;
	};
	const stateQuery = useSelector((state) => {
		return {
			labs: [],
			inventories: searchInventoriesByName(state),
			items: searchItemsByName(state)
		};
	});
	const closePopover = () => {
		setOpenPopover(false);
		setSearchValue('');
	};
	useEffect(
		() => {
			searchValue ? setOpenPopover(true) : setOpenPopover(false);
			setSearchResults({ ...searchResults, inventories: stateQuery.inventories, items: stateQuery.items });
		},
		[ searchValue ]
	);
	return (
		<React.Fragment>
			{/* TODO: Figure out how to match popover width with searchbar width */}
			<Popover
				data-testid="Popover"
				returnFocusOnClose={false}
				isOpen={openPopover}
				onClose={() => setOpenPopover(false)}
				placement="bottom-start"
				autoFocus={false}
				closeOnBlur={true}
			>
				<PopoverTrigger>
					<Input
						data-testid="Input"
						placeholder="Search"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</PopoverTrigger>
				<PopoverContent width="69vw">
					{searchResults.items.length > 0 && (
						<React.Fragment>
							<PopoverHeader fontSize="2xl">Items</PopoverHeader>
							<PopoverBody>
								{searchResults.items.map((item) => (
									<ItemSuggestion key={item.id} item={item} closePopover={closePopover} />
								))}
							</PopoverBody>
						</React.Fragment>
					)}

					{searchResults.inventories.length > 0 && (
						<React.Fragment>
							<PopoverHeader fontSize="2xl">Inventories</PopoverHeader>
							<PopoverBody>
								{searchResults.inventories.map((inv) => (
									<InventorySuggestion key={inv.id} inventory={inv} closePopover={closePopover} />
								))}
							</PopoverBody>
						</React.Fragment>
					)}
				</PopoverContent>
			</Popover>
		</React.Fragment>
	);
};

export default SearchComp;
