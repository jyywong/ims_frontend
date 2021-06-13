import React from 'react';
import { Flex, Icon, Box, Text } from '@chakra-ui/react';

const SimpleCard = ({ colorMode, number, description, icon, iconBGcolor, numID }) => {
	return (
		<React.Fragment>
			<Flex
				alignItems="center"
				width="full"
				height="full"
				bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
				borderRadius="20px"
				shadow="lg"
				justifyContent="space-around"
			>
				<Icon
					p={{ xl: '5', md: '3', sm: '1' }}
					boxSize={{ xl: 75, md: 59, sm: 39 }}
					bg={iconBGcolor}
					rounded="100"
					as={icon}
				/>
				<Box>
					<Text
						id={numID}
						mr={{ md: '2', sm: '5' }}
						display={{ xl: 'block', sm: 'inline' }}
						fontSize={{ xl: '5xl', md: '2xl', sm: '2xl' }}
					>
						{number}
					</Text>
					<Text
						m={{ xl: '0', sm: '2' }}
						display={{ xl: 'block', sm: 'inline' }}
						fontSize={{ xl: 'sm', md: 'xs' }}
						as="i"
					>
						{description}
					</Text>
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default SimpleCard;
