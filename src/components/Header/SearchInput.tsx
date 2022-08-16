import React from 'react';

import { Flex, Input, Icon } from '@chakra-ui/react';

import { RiSearchLine } from 'react-icons/ri';

export const SearchInput: React.FC = () => {
	return (
		<Flex
			as='label'
			w='100%'
			maxW={400}
			h='12'
			mx='auto'
			px='8'
			py='4'
			flex='1'
			align='center'
			alignSelf='center'
			bgColor='gray.800'
			color='gray.200'
			rounded='full'
		>
			<Input
				type='text'
				placeholder='Busque na plataforma'
				variant='unstyled'
				w='100%'
				h='100%'
				_placeholder={{
					fontSize: '16',
					color: 'gray.400',
				}}
			/>
			<Icon as={RiSearchLine} fontSize='20' />
		</Flex>
	);
};
