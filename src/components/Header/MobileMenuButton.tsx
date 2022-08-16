import React from 'react';

import { useSidebarDrawerContext } from '../../hooks/useSidebarDrawerContext';

import { IconButton, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

export const MobileMenuButton: React.FC = () => {
	const { openSidebarDrawer } = useSidebarDrawerContext();

	return (
		<IconButton
			aria-label='Open mobile menu'
			type='button'
			icon={<Icon as={RiMenuLine} fontSize='20' />}
			onClick={openSidebarDrawer}
			bgColor='transparent'
			_active={{
				bgColor: 'transparent',
			}}
			_hover={{
				bgColor: 'transparent',
			}}
			mr='4'
			w='4'
		/>
	);
};
