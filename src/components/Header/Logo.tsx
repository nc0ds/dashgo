import React from 'react';

import { Text } from '@chakra-ui/react';

export const Logo: React.FC = () => {
	return (
		<Text
			fontSize={['2xl', '3xl']}
			fontWeight='bold'
			letterSpacing='tight'
			mr='4'
		>
			dashgo
			<Text as='span' color='pink.500' ml='1'>
				.
			</Text>
		</Text>
	);
};
