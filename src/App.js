import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import Login from './Pages/Login';
import LabPage from './Pages/LabPage';
import InventoryPage from './Pages/InventoryPage';
import ItemPage from './Pages/ItemPage';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Route path="/lab/:labID" exact component={LabPage} />
				<Route path="/inventory/:invID" exact component={InventoryPage} />
				<Route path="/:invID/item/:itemID" exact component={ItemPage} />
				<Route path="/" exact component={Login} />
			</Router>
		</ChakraProvider>
	);
}

export default App;
