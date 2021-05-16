import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';

const VerticalChartCard = ({ colorMode }) => {
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
				<Box my="8" width="60%">
					<Pie
						data={{
							datasets: [
								{
									label: 'My First Dataset',
									data: [ 300, 50, 100 ],
									backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)' ],
									hoverOffset: 4
								}
							]
						}}
						options={{
							maintainAspectRatio: true
						}}
					/>
				</Box>
				<Flex direction={{ xl: 'column', md: 'row' }} height="40%" width="full" my="4" p="4">
					<Flex alignItems="center" p="2">
						<Box height="10px" width="20px" bg="rgb(54, 162, 235)" border="1px" />
						<Text px="4"> Items that are full</Text>
						<Text justifySelf="right"> 20% </Text>
					</Flex>
					<Flex alignItems="center" p="2">
						<Box height="10px" width="20px" bg="rgb(255, 205, 86)" border="1px" />
						<Text px="4"> Items that are almost low</Text>
					</Flex>
					<Flex alignItems="center" p="2">
						<Box height="10px" width="20px" bg="rgb(255, 99, 132)" border="1px" />
						<Text px="4"> Items that are low</Text>
					</Flex>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default VerticalChartCard;
