import React from 'react';

import { Button } from '@chakra-ui/react';

interface PageButtonProps {
	page: number;
	disabled?: boolean;
	onPageChange: (page: number) => void;
}

export const PageButton: React.FC<PageButtonProps> = ({
	page,
	disabled = false,
	onPageChange,
}) => {
	if (disabled) {
		return (
			<Button
				size={['xs', 'sm']}
				fontSize='xs'
				w='4'
				colorScheme={'pink'}
				disabled
				_disabled={{
					bg: 'pink.500',
					cursor: 'default',
				}}
			>
				{page}
			</Button>
		);
	}

	return (
		<Button
			size={['xs', 'sm']}
			fontSize='xs'
			w='4'
			bgColor='gray.700'
			_hover={{
				bgColor: 'gray.500',
			}}
			onClick={() => onPageChange(page)}
		>
			{page}
		</Button>
	);
};
