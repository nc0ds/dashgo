import React from 'react';

import { HStack, Icon } from '@chakra-ui/react';

import { RiNotificationLine, RiUserLine } from 'react-icons/ri';

export const NotificationsNav: React.FC = () => {
	return (
		<HStack
			spacing={['6', '8']}
			mr={['4', '8']}
			pr={['6', '8']}
			py='1'
			borderRight='1px solid'
			borderColor='gray.500'
		>
			<Icon as={RiNotificationLine} fontSize='20' />
			<Icon as={RiUserLine} fontSize='20' />
		</HStack>
	);
};
