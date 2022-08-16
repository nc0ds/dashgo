import React from 'react';

import { Box, Text } from '@chakra-ui/react';

export const RegistersCount: React.FC = () => {
	return (
		<Box>
			<Text as='strong' fontSize='sm'>
				0
			</Text>
			{' - '}
			<Text as='strong' fontSize='sm'>
				10
			</Text>
			{' de '}
			<Text as='strong' fontSize='sm'>
				100
			</Text>
		</Box>
	);
};
