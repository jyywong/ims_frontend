import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
const ItemStats = ({ colorMode }) => {
	const data = {
		labels: [ '1', '2', '3', '4', '5', '6' ],
		datasets: [
			{
				label: '# of Votes',
				data: [ 12, 19, 3, 5, 2, 3 ],
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)'
			}
		]
	};
	const options = {
		responsive: true,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	};
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
