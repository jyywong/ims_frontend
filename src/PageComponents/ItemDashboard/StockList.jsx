import React from 'react';
import { useSelector } from 'react-redux';
import ListComponent from '../ListComponent';
import StockItem from './StockItem';
const StockList = ({ colorMode }) => {
	const item = useSelector((state) =>
		state.inventories.find((inv) => inv.id === 1).items.find((item) => item.id === 1)
	);
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
