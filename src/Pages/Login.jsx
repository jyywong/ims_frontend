import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { getUserDetails, login } from '../Services/AuthServices';
import { useSelector } from 'react-redux';
import {
	Box,
	Flex,
	Heading,
	Text,
	FormControl,
	FormLabel,
	Input,
	Button,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	useColorMode
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { fetchLabsTC } from '../ActionCreators/labActions';
import { loginAttemptTC } from '../ActionCreators/authActions';
import { GiMoon } from 'react-icons/gi';
import { testIfRefreshTokenValid } from '../Services/LabServices';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ hasError, setHasError ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');
	const { colorMode, toggleColorMode } = useColorMode();
	const [ formValues, setFormValues ] = useState({ username: '', password: '' });

	useEffect(() => {
		// (async () => {
		// 	if (localStorage.getItem('refresh')) {
		// 		try{
		// 			const response = await testIfRefreshTokenValid();
		// 		}catch(error){
		// 			console.log(error)
		// 		}
		// 	}
		// })();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				await dispatch(loginAttemptTC(formValues.username, formValues.password));
				console.log('jwt');
				console.log(jwt_decode(localStorage.getItem('access')).user_id);
				const response = await Promise.all([ dispatch(fetchLabsTC) ]);
				const labIDs = response[0];
				history.push(`lab/${labIDs[0]}`);
			} catch (error) {
				setHasError(true);
				setErrorMessage(error.message);
				console.log(error);
			}
		})();
	};
	return (
		<React.Fragment>
			<Button onClick={toggleColorMode}> Toggle color mode</Button>
			<Flex minHeight="100vh" width="full" height="full" align="center" justifyContent="center">
				<Box
					width={{ xl: '30%', sm: '75%' }}
					padding="8"
					rounded="20px"
					bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
				>
					<Flex direction="column" alignItems="center" justifyContent="center" mb="2">
						<GiMoon size={60} />
						<Heading p="5"> Log In </Heading>
					</Flex>
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
							{hasError && (
								<Alert status="error" borderRadius="lg">
									<AlertIcon />
									<AlertTitle fontSize="10"> Login Unsuccessful! </AlertTitle>
									<AlertDescription fontSize="10">{errorMessage}</AlertDescription>
									<CloseButton
										position="absolute"
										right="8px"
										onClick={() => {
											setHasError(false);
										}}
									/>
								</Alert>
							)}

							<Button
								width="full"
								type="submit"
								marginTop="4"
								boxShadow="md"
								bg={colorMode === 'light' ? 'green.200' : 'green.700'}
								_hover={{ boxShadow: 'lg' }}
								_active={{ boxShadow: 'sm' }}
							>
								Log In
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
