import React from 'react';
import { Grid, GridItem, Flex, Box, Text, Icon, useColorMode } from '@chakra-ui/react';
import { FiBox } from 'react-icons/fi';
import { FaExclamation } from 'react-icons/fa';
import { BiPackage, BiTrendingUp } from 'react-icons/bi';
import SimpleCard from '../PageComponents/Dashboard/SimpleCard';
import VerticalChartCard from '../PageComponents/Dashboard/VerticalChartCard';
import MembersList from '../PageComponents/Dashboard/MembersList';
import SearchBar from '../PageComponents/SearchBar';
import Header from '../PageComponents/Header';
import ListComponent from '../PageComponents/ListComponent';
import MemberListItem from '../PageComponents/Dashboard/MemberListItem';
import InventoryListItem from '../PageComponents/Dashboard/InventoryListItem';

const LabDashboard = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<React.Fragment>
			<Grid width="full" templateRows="5rem auto">
				<GridItem>
					<SearchBar />
				</GridItem>
				<GridItem>
					<Grid
						p="5"
						border="1px"
						width="full"
						height="full"
						// templateRows="0.5fr  1fr 1fr 1fr"
						// templateColumns="1fr 1fr 1fr 1fr"
						templateRows={{
							xl: '0.3fr  1fr 1fr 1fr',
							md: '10vh 15vh 30vh 1fr 1fr',
							sm: '10vh 10vh 10vh 10vh 50vh 40vh 40vh'
						}}
						templateColumns={{ xl: '1fr  1fr 1fr 1fr', md: '1fr 1fr 1fr', sm: '1fr' }}
						templateAreas={{
							xl: `
								'header header header header' 
								'card1 card2 card3 chart' 
								'members inv inv chart' 
								'members inv inv chart' 
								`,
							md: `
								'header header header'
								'card1 card2 card3'
								'chart chart chart'
								'inv inv inv'
								'members members members'
								`,
							sm: `
								'header'
								'card1'
								'card2'
								'card3'
								'chart'
								'inv'
								'members'
								`
						}}
						columnGap="3rem"
						rowGap="2rem"
					>
						<GridItem gridArea="header" alignSelf="center">
							<Header
								title="Test Lab 1"
								description="Lorem ipsum"
								outlineButton="Edit Lab"
								fillButton="Add Inventory"
							/>
						</GridItem>
						<GridItem gridArea="card1">
							<SimpleCard
								colorMode={colorMode}
								number={5}
								description="Pending order requests"
								icon={BiPackage}
								iconBGcolor={colorMode === 'light' ? 'yellow.100' : 'yellow.700'}
							/>
						</GridItem>
						<GridItem gridArea="card2">
							<SimpleCard
								colorMode={colorMode}
								number={8}
								description="Items recently refilled"
								icon={BiTrendingUp}
								iconBGcolor={colorMode === 'light' ? 'green.100' : 'green.700'}
							/>
						</GridItem>
						<GridItem gridArea="card3">
							<SimpleCard
								colorMode={colorMode}
								number={2}
								description="Items running low"
								icon={FaExclamation}
								iconBGcolor={colorMode === 'light' ? 'red.100' : 'red.700'}
							/>
						</GridItem>
						<GridItem gridArea="chart">
							<VerticalChartCard colorMode={colorMode} />
						</GridItem>
						{/* Maybe I should make the list like components one component */}
						<GridItem gridArea="members">
							<ListComponent colorMode={colorMode} title="Members" listitem={MemberListItem} />
							{/* <MembersList colorMode={colorMode} /> */}
						</GridItem>
						<GridItem gridArea="inv">
							<ListComponent colorMode={colorMode} title="Inventories" listitem={InventoryListItem} />
							{/* <Flex
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
									<Text fontSize="lg"> Inventories </Text>
								</Flex>
								<Box p="4" width="full" height="85%" overflow="auto">
									<Flex p="2" justifyContent="space-between" alignItems="center">
										<Flex alignItems="center">
											<Icon boxSize={10} as={FiBox} />
											<Text px="5"> Cooking </Text>
										</Flex>
										<Text px="4" color="gray.400" fontSize="sm">
											7 items
										</Text>
									</Flex>
								</Box>
							</Flex> */}
						</GridItem>
					</Grid>
				</GridItem>
			</Grid>
		</React.Fragment>
	);
};

export default LabDashboard;
