import { parseJSON } from 'date-fns';
import { useSelector } from 'react-redux';
export const organizeListOfHistories = (listOfHistories) => {
	return listOfHistories.map((history) => ({
		id: history.id,
		quantity: history.quantity,
		date: parseJSON(history.history_date)
	}));
};

export const findFinalQuantityAtEachEndOfDay = (listOfHistories) => {
	return listOfHistories.reduce((acc, history) => {
		if (acc.length === 0) {
			return [ history ];
		} else {
			for (const accHistory of acc) {
				if (accHistory.date.getDate() === history.date.getDate()) {
					if (accHistory.date.getTime() > history.date.getTime()) {
						return acc;
					} else {
						return [
							...acc.filter((accHistory) => accHistory.date.getDate() !== history.date.getDate()),
							history
						];
					}
				}
			}
			return [ ...acc, history ];
		}
	}, []);
};

export const parseHistoryChangeReason = (history) => {
	console.log('parsing');
	const reason = history.history_change_reason;
	console.log(reason);
	const reasonActionRE = /^\w+/;
	const reasonAmountRE = /\d+/;
	if (reason) {
		console.log(reason.match(reasonActionRE)[0]);
		reason.match(reasonAmountRE);
		return [ reason.match(reasonActionRE)[0], reason.match(reasonAmountRE) ];
	} else {
		return [ null, null ];
	}
};

export const getNumberOfItemsThatAreLowOrFine = (labItems) => {
	const numberOfLowOrFineItems = { low: 0, fine: 0 };
	labItems.map((itemID) => {
		const item = useSelector((state) => state.items.byID[itemID]);
		if (item.quantity > item.minQuantity) {
			numberOfLowOrFineItems.fine += 1;
		} else {
			numberOfLowOrFineItems.low += 1;
		}
	});
	return numberOfLowOrFineItems;
};
