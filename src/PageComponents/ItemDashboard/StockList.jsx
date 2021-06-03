import React from 'react';
import { useSelector } from 'react-redux';
import ListComponent from '../ListComponent';
import StockItem from './StockItem';
const StockList = ({ colorMode, item }) => {
	const itemBatches = useSelector((state) => item.itemBatches.map((itemBatch) => state.itemBatches.byID[itemBatch]));
	console.log(itemBatches);
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title="Stock list">
				<React.Fragment />
				{itemBatches &&
					itemBatches.map((itemBatch) => (
						<StockItem key={itemBatch.id} date={itemBatch.expiryDate} quantity={itemBatch.quantity} />
					))}
			</ListComponent>
		</React.Fragment>
	);
};

export default StockList;
