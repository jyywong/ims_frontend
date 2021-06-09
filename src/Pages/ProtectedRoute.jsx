import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const ProtectedRoute = ({ isLoggedIn, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isLoggedIn) {
					return <Component {...props} />;
				} else {
					return <Redirect to={{ pathname: '/' }} />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;
