import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { EditIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import { GoNote } from 'react-icons/go';
const ItemHeaderButtons = ({ openDrawer }) => {
	return (
		<React.Fragment>
			{/* If clicked on the icon, the event target will not be the button but the icon. This is a problem 
            because the drawer will not receive the id of the button, and can't display the right form. */}
			<Button id="Edit Item" onClick={openDrawer} mx="2" variant="outline" leftIcon={<EditIcon />}>
				<Text pointerEvents="none"> Edit Item </Text>
			</Button>
			<Button id="Request Order" onClick={openDrawer} mx="2" variant="outline" leftIcon={<GoNote size={20} />}>
				<Text pointerEvents="none"> Request an order </Text>
			</Button>
			<Button id="Add restock" onClick={openDrawer} mx="2" variant="outline" leftIcon={<AddIcon boxSize={3} />}>
				<Text pointerEvents="none"> Add a restock </Text>
			</Button>
			<Button id="Used stock" onClick={openDrawer} mx="2" leftIcon={<MinusIcon boxSize={3} />}>
				<Text pointerEvents="none"> Log used stocks</Text>
			</Button>
		</React.Fragment>
	);
};

export default ItemHeaderButtons;
