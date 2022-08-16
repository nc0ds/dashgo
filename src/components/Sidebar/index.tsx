import React from 'react';

import {
	Box,
	useBreakpointValue,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
} from '@chakra-ui/react';

import { SidebarNav } from './SidebarNav';
import { useSidebarDrawerContext } from '../../hooks/useSidebarDrawerContext';

export const Sidebar: React.FC = () => {
	const { isSidebarDrawerOpen, closeSidebarDrawer } = useSidebarDrawerContext();

	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});

	if (isMobile) {
		return (
			<Drawer
				isOpen={isSidebarDrawerOpen}
				onClose={closeSidebarDrawer}
				placement='left'
			>
				<DrawerOverlay>
					<DrawerContent bgColor='gray.800' p='4'>
						<DrawerCloseButton mt='6' />
						<DrawerHeader>Menu</DrawerHeader>
						<DrawerBody>
							<SidebarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);
	}

	return (
		<Box as='aside' w='64'>
			<SidebarNav />
		</Box>
	);
};
