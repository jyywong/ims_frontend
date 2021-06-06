import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { findFinalQuantityAtEachEndOfDay, organizeListOfHistories } from '../../HelperFunctions/organizeDataForStats';
import { getItemBatchHistory, getItemHistory } from '../../Services/LabServices';
const ItemStats = ({ colorMode, item }) => {
	const [ stats, setStats ] = useState([]);
	const data = {
		labels: [ '1', '2', '3', '4', '5', '6' ],
		datasets: [
			{
				label: '# of Votes',
				data: [ ...stats ],
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)'
			}
		]
	};
	const options = {
		responsive: true,
		scales: {
			x: {
				type: 'time'
			}
		}
	};

	useEffect(async () => {
		// const response = await getItemBatchHistory(item.id);
		// const listOfHistories = response.data;
		const response = await getItemHistory(item.id);
		const listOfHistories = response.data;
		const organizedState = findFinalQuantityAtEachEndOfDay(organizeListOfHistories(listOfHistories));
		console.log(organizedState);
		setStats([
			...organizedState.map((history) => ({
				x: history.date,
				y: history.quantity
			}))
		]);
	}, []);
	return (
		<React.Fragment>
			<Flex
				direction="column"
				alignItems="center"
				height="full"
				borderRadius="20px"
				shadow="lg"
				bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
			>
				<Flex
					p="5"
					width="full"
					height="15%"
					borderBottom="1px"
					borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
					alignItems="center"
				>
					<Text fontSize="lg">Item Usage</Text>
				</Flex>
				<Flex p="6" width="full" height="full">
					<Line data={data} options={options} />
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default ItemStats;
