import React from 'react';

import { Heading } from '@chakra-ui/react';

interface PageHeadingProps {
	children: string | React.ReactNode;
}

export const PageHeading: React.FC<PageHeadingProps> = ({ children }) => {
	return (
		<Heading size={['md', 'lg']} fontWeight='normal' mr='4'>
			{children}
		</Heading>
	);
};
