import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './Pages/Login';
import LabPage from './Pages/LabPage';
import InventoryPage from './Pages/InventoryPage';
import ItemPage from './Pages/ItemPage';
import ProtectedRoute from './Pages/ProtectedRoute';
import SignUp from './Pages/SignUp';
import LabInvites from './Pages/LabInvites';
import { isRefreshTokenValid } from './Services/LabServices';
function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<ProtectedRoute path="/lab/:labID" component={LabPage} />
				<ProtectedRoute path="/inventory/:invID" component={InventoryPage} />
				<ProtectedRoute path="/:invID/item/:itemID" component={ItemPage} />
				{/* <Route path="/lab/:labID" exact component={LabPage} />
				<Route path="/inventory/:invID" exact component={InventoryPage} />
				<Route path="/:invID/item/:itemID" exact component={ItemPage} /> */}
				{/* <ProtectedRoute path="/invites" isLoggedIn={isLoggedIn} component={LabInvites} /> */}
				<Route path="/invites" exact component={LabInvites} />
				<Route path="/" exact component={() => <Login />} />
				<Route path="/signup" exact component={SignUp} />
			</Router>
		</ChakraProvider>
	);
}

export default App;
