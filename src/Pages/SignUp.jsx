import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
	useToast,
	useColorMode
} from '@chakra-ui/react';
import { GiMoon } from 'react-icons/gi';
import { signUp } from '../Services/AuthServices';
const SignUp = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const toast = useToast();
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			try {
				const response = await signUp(
					formValues.username,
					formValues.email,
					formValues.password,
					formValues.password2
				);
				toast({
					title: 'Successfully created a new account',
					description: 'Now signing you in!',
					status: 'success',
					isClosable: true
				});
				// await dispatch(loginAttemptTC(formValues.username, formValues.password));
			} catch (error) {
				toast({
					title: 'Unable to create a new account',
					description: error.message,
					status: 'error',
					isClosable: true
				});
			}
		})();
		setFormValues(emptyForm);
	};
	const emptyForm = { username: '', email: '', password: '', password2: '' };
	const [ formValues, setFormValues ] = useState(emptyForm);
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
						<Heading p="5"> Sign Up </Heading>
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
								<FormLabel>Email</FormLabel>
								<Input
									type="email"
									placeholder="Enter your username"
									value={formValues.email}
									onChange={(e) => {
										setFormValues({ ...formValues, email: e.target.value });
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
							<FormControl my="2">
								<FormLabel>Confirm your password</FormLabel>
								<Input
									type="password"
									placeholder="Enter your password again"
									value={formValues.password2}
									onChange={(e) => {
										setFormValues({ ...formValues, password2: e.target.value });
									}}
								/>
							</FormControl>
							{false && (
								<Alert status="error" borderRadius="lg">
									<AlertIcon />
									<AlertTitle fontSize="10"> Login Unsuccessful! </AlertTitle>
									<AlertDescription fontSize="10" />
									<CloseButton position="absolute" right="8px" />
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
								Sign Up
							</Button>
							<Text textAlign="center" mt={3}>
								Already have an account? <Link to="/">Log in!</Link>
							</Text>
						</form>
					</Box>
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default SignUp;
