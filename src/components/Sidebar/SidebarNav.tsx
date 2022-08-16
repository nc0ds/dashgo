import React from 'react';

import { Stack } from '@chakra-ui/react';

import { SidebarLink } from './SidebarLink';
import { Section } from './Section';

import {
	RiDashboardLine,
	RiContactsLine,
	RiInputMethodLine,
	RiGitBranchLine,
} from 'react-icons/ri';

export const SidebarNav: React.FC = () => {
	return (
		<Stack spacing='12' align='flex-start'>
			<Section title='Geral'>
				<SidebarLink href='/dashboard' icon={RiDashboardLine}>
					Dashboard
				</SidebarLink>
				<SidebarLink href='/users' icon={RiContactsLine}>
					Usuários
				</SidebarLink>
			</Section>
			<Section title='Automação'>
				<SidebarLink href='/forms' icon={RiInputMethodLine}>
					Formulários
				</SidebarLink>
				<SidebarLink href='/automation' icon={RiGitBranchLine}>
					Automação
				</SidebarLink>
			</Section>
		</Stack>
	);
};
