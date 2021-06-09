import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import Login from './Pages/Login';
import LabPage from './Pages/LabPage';
import InventoryPage from './Pages/InventoryPage';
import ItemPage from './Pages/ItemPage';
import ProtectedRoute from './Pages/ProtectedRoute';
import SignUp from './Pages/SignUp';
import LabInvites from './Pages/LabInvites';
function App() {
	const isLoggedIn = useSelector((state) => state.auth.loggedIn);
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<ProtectedRoute path="/lab/:labID" isLoggedIn={isLoggedIn} component={LabPage} />
				<ProtectedRoute path="/inventory/:invID" isLoggedIn={isLoggedIn} component={InventoryPage} />
				<ProtectedRoute path="/:invID/item/:itemID" isLoggedIn={isLoggedIn} component={ItemPage} />
				{/* <Route path="/lab/:labID" exact component={LabPage} />
				<Route path="/inventory/:invID" exact component={InventoryPage} />
				<Route path="/:invID/item/:itemID" exact component={ItemPage} /> */}
				{/* <ProtectedRoute path="/invites" isLoggedIn={isLoggedIn} component={LabInvites} /> */}
				<Route path="/invites" exact component={LabInvites} />
				<Route path="/" exact component={Login} />
				<Route path="/signup" exact component={SignUp} />
			</Router>
		</ChakraProvider>
	);
}

export default App;
