import React from 'react';
import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Button, useColorMode } from '@chakra-ui/react';
const Login = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<React.Fragment>
			<Button onClick={toggleColorMode}> Toggle color mode</Button>
			<Flex minHeight="100vh" width="full" height="full" align="center" justifyContent="center">
				<Box width="25%" padding="8" rounded="20px" bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}>
					<Box textAlign="center" mb="2">
						<Heading> Log in </Heading>
					</Box>
					<Box>
						<form>
							<FormControl my="2">
								<FormLabel>Email Address</FormLabel>
								<Input type="email" placeholder="Enter your email address" />
							</FormControl>
							<FormControl my="2">
								<FormLabel>Password</FormLabel>
								<Input type="password" placeholder="Enter your password" />
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
