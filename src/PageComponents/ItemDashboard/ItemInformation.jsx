import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
const ItemInformation = ({ colorMode }) => {
	return (
		<React.Fragment>
			<Flex
				direction="column"
				alignItems="center"
				height="full"
				borderRadius="20px"
				shadow="lg"
				bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
			>
				<Flex
					p="5"
					width="full"
					height="15%"
					borderBottom="1px"
					borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
					alignItems="center"
				>
					<Text fontSize="lg">Item Information</Text>
				</Flex>
				<Flex px="5" py="3" width="full" direction={{ xl: 'column', md: 'row' }} alignItems="flex-start">
					<Text m="1" textColor="gray.500" fontSize="xl">
						Manufacturer:
					</Text>
					<Text m="1" textColor="gray.500" fontSize="xl">
						Expiry Date:
					</Text>
					<Text m="1" textColor="gray.500" fontSize="xl">
						Notes:
					</Text>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default ItemInformation;
