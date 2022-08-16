import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children, title }) => {
	return (
		<Box>
			<Text
				fontWeight='bold'
				fontSize='sm'
				color='gray.400'
				textTransform='uppercase'
			>
				{title}
			</Text>
			<Stack spacing='4' mt='8'>
				{children}
			</Stack>
		</Box>
	);
};
