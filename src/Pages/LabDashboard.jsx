import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Flex, Grid, GridItem, Text, useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaExclamation } from 'react-icons/fa';
import { BiPackage, BiTrendingUp } from 'react-icons/bi';
import SimpleCard from '../PageComponents/Dashboard/SimpleCard';
import VerticalChartCard from '../PageComponents/Dashboard/VerticalChartCard';
import SearchBar from '../PageComponents/Search/SearchBar';
import Header from '../PageComponents/Header';
import LabHeaderButtons from '../PageComponents/Dashboard/LabHeaderButtons';
import DrawerComp from '../PageComponents/DrawerComp';
import EditLabForm from '../PageComponents/EditLabForm';
import ModalContainer from '../PageComponents/Dashboard/ModalContainer';
import { loadDataOrRedirectToLogin } from '../HelperFunctions/getAllData';

const LabDashboard = ({ labID }) => {
	const [ showDrawer, setShowDrawer ] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();
	const lab = useSelector((state) => state.labs.byID[labID]);
	const btnRef = useRef();

	const openDrawer = () => {
		setShowDrawer(true);
	};

	return (
		<React.Fragment>
			<Grid width="full" templateRows="5rem auto">
				<GridItem>
					<SearchBar />
				</GridItem>
				<GridItem>
					<Grid
						p="5"
						width="full"
						height="full"
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
							<Header title={lab.name} description={lab.description}>
								<LabHeaderButtons btnRef={btnRef} openDrawer={openDrawer} />
							</Header>
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
						<ModalContainer colorMode={colorMode} lab={lab} />
						<DrawerComp isOpen={showDrawer} onClose={() => setShowDrawer(false)} btnRef={btnRef}>
							<Text mx="6" fontSize="2xl">
								Edit Lab Details
							</Text>
							<EditLabForm labID={labID} onClose={() => setShowDrawer(false)} />
						</DrawerComp>
					</Grid>
				</GridItem>
			</Grid>
		</React.Fragment>
	);
};

export default LabDashboard;
