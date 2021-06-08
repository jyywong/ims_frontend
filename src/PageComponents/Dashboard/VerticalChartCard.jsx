import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { getNumberOfItemsThatAreLowOrFine } from '../../HelperFunctions/organizeDataForStats';

const VerticalChartCard = ({ colorMode, lab }) => {
	console.log(getNumberOfItemsThatAreLowOrFine(lab.labItems));
	const numberOfLowOrFineItems = getNumberOfItemsThatAreLowOrFine(lab.labItems);
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
					height="10%"
					borderBottom="1px"
					borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
					alignItems="center"
				>
					<Text fontSize="lg"> State of the lab</Text>
				</Flex>
				<Flex my="8" height="25%" width="60%" alignItems="center">
					<Pie
						data={{
							datasets: [
								{
									label: 'My First Dataset',
									data: [ numberOfLowOrFineItems.low, numberOfLowOrFineItems.fine ],
									backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)' ],
									hoverOffset: 4
								}
							]
						}}
						options={{
							responsive: true,
							maintainAspectRatio: false
						}}
					/>
				</Flex>
				<Flex direction={{ xl: 'column', md: 'row' }} height="40%" width="full" my="4" p="4">
					<Flex alignItems="center" p="2">
						<Box height="10px" width="20px" bg="rgb(54, 162, 235)" border="1px" />
						<Text px="4"> Items that are full</Text>
						<Text justifySelf="right">
							{(numberOfLowOrFineItems.fine / lab.labItems.length).toFixed(2) * 100}%
						</Text>
					</Flex>
					<Flex alignItems="center" p="2">
						<Box height="10px" width="20px" bg="rgb(255, 99, 132)" border="1px" />
						<Text px="4"> Items that are low</Text>
						<Text justifySelf="right">
							{(numberOfLowOrFineItems.low / lab.labItems.length).toFixed(2) * 100}%
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default VerticalChartCard;
