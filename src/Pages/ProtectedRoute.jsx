import React, { forwardRef } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isRefreshTokenValid } from '../Services/LabServices';
const ProtectedRoute = ({ isLoggedIn, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isRefreshTokenValid()) {
					return <Component {...props} />;
				} else {
					return <Redirect to={{ pathname: '/' }} />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;
