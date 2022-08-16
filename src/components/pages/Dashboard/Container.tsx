import React from 'react';

import { Box, Text } from '@chakra-ui/react';

interface ContainerProps {
	children: React.ReactNode;
	title: string;
}

export const Container: React.FC<ContainerProps> = ({ children, title }) => {
	return (
		<Box p={['6', '8']} bgColor='gray.800' borderRadius={8}>
			<Text fontSize='lg' mb='4'>
				{title}
			</Text>
			{children}
		</Box>
	);
};
