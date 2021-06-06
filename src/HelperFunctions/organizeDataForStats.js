import { parseJSON } from 'date-fns';

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
