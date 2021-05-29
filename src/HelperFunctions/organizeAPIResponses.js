export const changeObjectIdToDatabaseId = (response) => {
	const organizedObject = {};
	const newIDs = [];
	for (const [ key, value ] of Object.entries(response.data)) {
		organizedObject[value.id] = value;
		newIDs.push(value.id);
	}
	return [ organizedObject, newIDs ];
};
