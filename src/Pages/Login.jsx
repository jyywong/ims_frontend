import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
	CircularProgress,
	CloseButton,
	useColorMode
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { fetchLabsTC } from '../ActionCreators/labActions';
import { loginAttemptTC } from '../ActionCreators/authActions';
import { GiMoon } from 'react-icons/gi';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ isLoading, setIsLoading ] = useState(false);
	const [ hasError, setHasError ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');
	const { colorMode, toggleColorMode } = useColorMode();
	const [ formValues, setFormValues ] = useState({ username: '', password: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				setIsLoading(true);
				await dispatch(loginAttemptTC(formValues.username, formValues.password));
				const response = await dispatch(fetchLabsTC);
				const lastlabID = response[response.length - 1];
				history.push(`lab/${lastlabID}`);
			} catch (error) {
				setHasError(true);
				setErrorMessage(error.message);
				console.log(error);
			}
		})();
	};
	return (
		<React.Fragment>
			{/* <Button onClick={toggleColorMode}> Toggle color mode</Button> */}
			<Flex minHeight="100vh" width="full" height="full" align="center" justifyContent="center">
				<Box
					width={{ xl: '30%', sm: '75%' }}
					padding="8"
					rounded="20px"
					bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
				>
					{isLoading ? (
						<Flex alignItems="center" justifyContent="center">
							<CircularProgress isIndeterminate />
						</Flex>
					) : (
						<Flex direction="column" alignItems="center" justifyContent="center" mb="2">
							<GiMoon size={60} />
							<Heading p="5"> Log In </Heading>
						</Flex>
					)}
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
								Need an account? <Link to="/signup">Sign up!</Link>
							</Text>
							<Text textAlign="center" mt={1.5}>
								Demo Username: demo | Demo Password: demopassword
							</Text>
						</form>
					</Box>
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default Login;
