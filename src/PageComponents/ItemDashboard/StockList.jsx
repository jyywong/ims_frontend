import React from 'react';
import { useSelector } from 'react-redux';
import ListComponent from '../ListComponent';
import StockItem from './StockItem';
const StockList = ({ colorMode, item }) => {
	return (
		<React.Fragment>
			<ListComponent colorMode={colorMode} title="Stock list">
				<React.Fragment />
				{item.stock &&
					item.stock.map((stock) => (
						<StockItem key={stock.id} date={stock.expiryDate} quantity={stock.quantity} />
					))}
			</ListComponent>
		</React.Fragment>
	);
};

export default StockList;
