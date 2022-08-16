import React from 'react';

import { Table, Thead, Tr, Th, Checkbox, Tbody } from '@chakra-ui/react';

interface UsersTableProps {
	children: React.ReactNode;
}

export const UsersTable: React.FC<UsersTableProps> = ({ children }) => {
	return (
		<Table colorScheme='whiteAlpha' minW={700}>
			<Thead>
				<Tr>
					<Th px={['2', '6']} color='gray.300' width={['4', '8']}>
						<Checkbox colorScheme='pink' />
					</Th>
					<Th>Usuário</Th>
					<Th>Data de cadastro</Th>
					<Th width={['6', '8']}></Th>
				</Tr>
			</Thead>
			<Tbody>{children}</Tbody>
		</Table>
	);
};
