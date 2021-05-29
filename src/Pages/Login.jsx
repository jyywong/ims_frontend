import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserDetails, login } from '../Services/AuthServices';
import jwt_decode from 'jwt-decode';
import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Button, useColorMode } from '@chakra-ui/react';
import { getInvList, getItemList, getLabList } from '../Services/LabServices';
import { changeObjectIdToDatabaseId } from '../HelperFunctions/organizeAPIResponses';
import { useDispatch } from 'react-redux';
import { updateLabState } from '../ActionCreators/labActions';
import { updateInventories } from '../ActionCreators/invActions';
import { updateItems } from '../ActionCreators/itemActions';
import { loginSuccess } from '../ActionCreators/authActions';
import axios from 'axios';
const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { colorMode, toggleColorMode } = useColorMode();
	const [ formValues, setFormValues ] = useState({ username: '', password: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		login(formValues.username, formValues.password)
			.then((response) => {
				localStorage.setItem('refresh', response.data['refresh']);
				localStorage.setItem('access', response.data['access']);
				getUserDetails(jwt_decode(localStorage.getItem('access')).user_id).then((response) => {
					dispatch(loginSuccess(response.data));
					getItemList.then((response) => {
						const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
						dispatch(updateItems(organizedObject, newIDs));
						getInvList.then((response) => {
							const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
							dispatch(updateInventories(organizedObject, newIDs));
							getLabList.then((response) => {
								const [ organizedObject, newIDs ] = changeObjectIdToDatabaseId(response);
								dispatch(updateLabState(organizedObject, newIDs));
								history.push(`lab/${newIDs[0]}`);
							});
						});
					});
				});
			})
			.catch((error) => {
				alert(error);
			});
	};
	return (
		<React.Fragment>
			<Button onClick={toggleColorMode}> Toggle color mode</Button>
			<Flex minHeight="100vh" width="full" height="full" align="center" justifyContent="center">
				<Box
					width={{ lg: '25%', sm: '75%' }}
					padding="8"
					rounded="20px"
					bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
				>
					<Box textAlign="center" mb="2">
						<Heading> Log in </Heading>
					</Box>
					<Box>
						<form onSubmit={handleSubmit}>
							<FormControl my="2">
								<FormLabel>Username</FormLabel>
								<Input
									type="text"
									placeholder="Enter your username"
									value={formValues.username}
									onChange={(e) => {
										setFormValues({ ...formValues, username: e.target.value });
									}}
								/>
							</FormControl>
							<FormControl my="2">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									placeholder="Enter your password"
									value={formValues.password}
									onChange={(e) => {
										setFormValues({ ...formValues, password: e.target.value });
									}}
								/>
							</FormControl>
							<Button
								width="full"
								type="submit"
								marginTop="4"
								boxShadow="md"
								bg={colorMode === 'light' ? 'green.200' : 'green.700'}
								_hover={{ boxShadow: 'lg' }}
								_active={{ boxShadow: 'sm' }}
							>
								Sign In
							</Button>
							<Text textAlign="center" mt={3}>
								Need an account? Sign up!
							</Text>
						</form>
					</Box>
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default Login;
