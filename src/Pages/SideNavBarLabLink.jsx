import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ImLab } from 'react-icons/im';
import { Flex, Text } from '@chakra-ui/react';
const SideNavBarLabLink = ({ colorMode, id, name, labID }) => {
	return (
		<Link to={`/lab/${id}`}>
			<Flex
				m="2"
				p="2"
				alignItems="center"
				rounded="lg"
				bg={id === labID && (colorMode === 'light' ? 'gray.400' : 'gray.700')}
			>
				<ImLab size={16} />
				<Text ml="2" fontSize="sm">
					{name}
				</Text>
			</Flex>
		</Link>
	);
};

export default SideNavBarLabLink;
