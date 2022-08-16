import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { Flex } from '@chakra-ui/react';

interface MainProps {
	children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<Flex direction='column'>
			<Header />
			<Flex
				w='100%'
				maxW={1480}
				mx='auto'
				my='6'
				px='6'
				gap='8'
				align='flex-start'
				justify='space-between'
			>
				<Sidebar />
				{children}
			</Flex>
		</Flex>
	);
};
