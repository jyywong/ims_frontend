import React, { useEffect, useState, useRef } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
import 'chartjs-adapter-date-fns';
import { findFinalQuantityAtEachEndOfDay, organizeListOfHistories } from '../../HelperFunctions/organizeDataForStats';
import { getItemBatchHistory, getItemHistory } from '../../Services/LabServices';
const ItemStats = ({ colorMode, item }) => {
	const [ stats, setStats ] = useState([]);
	const isMounted = useRef(false);
	const data = {
		datasets: [
			{
				label: '# of total stocks',
				data: [ ...stats ],
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)'
			}
		]
	};
	const options = {
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			y: {
				min: 0
			},
			x: {
				type: 'time',
				time: {
					unit: 'day'
				},
				ticks: {
					source: 'data'
				}
			}
		}
		// When this plugin is used, it cannot find the canvas element for some reason
		// plugins: {
		// 	autocolors: false,
		// 	annotation: {
		// 		annotations: {
		// 			line1: {
		// 				type: 'line',
		// 				yMin: 60,
		// 				yMax: 60,
		// 				borderColor: 'rgb(255, 99, 132)',
		// 				borderWidth: 2
		// 			}
		// 		}
		// 	}
		// }
	};

	useEffect(() => {
		isMounted.current = true;
		(async () => {
			console.log('ismounted' + isMounted.current);
			const response = await getItemHistory(item.id);
			const listOfHistories = response.data;
			const organizedState = findFinalQuantityAtEachEndOfDay(organizeListOfHistories(listOfHistories));
			console.log(organizedState);
			console.log('ismounted' + isMounted.current);
			if (isMounted.current) {
				setStats([
					...organizedState.map((history) => ({
						x: history.date,
						y: history.quantity
					}))
				]);
			}
		})();
		return () => (isMounted.current = false);
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
				<Flex p="6" position="relative" width="full" height="full">
					<Line data={data} options={options} plugins={[ annotationPlugin ]} />
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default ItemStats;
