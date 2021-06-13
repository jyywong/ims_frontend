import React, { useEffect, useState } from 'react';

import ListComponent from '../ListComponent';
import ItemActivityItem from '../InventoryDash/ItemActivityItem';
import { getItemHistory } from '../../Services/LabServices';
const ActivityList = ({ colorMode, item }) => {
	const [ historyItems, setHistoryItems ] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await getItemHistory(item.id);
			const listOfHistories = response.data;
			console.log(listOfHistories);
			setHistoryItems([ ...listOfHistories ]);
		})();
	}, []);
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title="Recent Activity">
				<React.Fragment />

				{historyItems.map((item) => <ItemActivityItem key={item.history_id} item={item} />)}
			</ListComponent>
		</React.Fragment>
	);
};

export default ActivityList;
