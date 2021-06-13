import React, { useEffect, useState } from 'react';
import { parseJSON, compareDesc } from 'date-fns';
import ListComponent from '../ListComponent';
import { getItemHistory } from '../../Services/LabServices';
import InventoryActivityItem from './InventoryActivityItem';
const InventoryActivityList = ({ colorMode, inventory }) => {
	const [ historyItems, setHistoryItems ] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await Promise.all(
				inventory.items.map(async (itemID) => {
					const response = await getItemHistory(itemID);
					const listOfHistories = response.data;
					return listOfHistories;
				})
			);
			const sortedHistoriesForMostRecentOnTop = response
				.flat()
				.sort((a, b) => compareDesc(parseJSON(a.history_date), parseJSON(b.history_date)));
			setHistoryItems(sortedHistoriesForMostRecentOnTop);
		})();
	}, []);
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title="Recent Activity">
				<React.Fragment />
				{historyItems.map((history) => <InventoryActivityItem key={history.history_id} item={history} />)}
			</ListComponent>
		</React.Fragment>
	);
};

export default InventoryActivityList;
