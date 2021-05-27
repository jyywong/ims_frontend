import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../Services/AuthServices';
import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Button, useColorMode } from '@chakra-ui/react';
const Login = () => {
	const history = useHistory();
	const { colorMode, toggleColorMode } = useColorMode();
	const [ formValues, setFormValues ] = useState({ username: '', password: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		login(formValues.username, formValues.password)
			.then((response) => {
				console.log(response);
				localStorage.setItem('refresh', response.data['refresh']);
				localStorage.setItem('access', response.data['access']);
				history.push('lab/1');
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
