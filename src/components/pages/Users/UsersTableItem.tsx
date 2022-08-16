import React from 'react';
import Link from 'next/link';

import { Tr, Td, Checkbox, Box, Text, Button, Icon } from '@chakra-ui/react';

import { RiPencilLine } from 'react-icons/ri';

interface UsersTableItemProps {
	name: string;
	email: string;
	createdAt: string;
}

export const UsersTableItem: React.FC<UsersTableItemProps> = ({
	name,
	email,
	createdAt,
}) => {
	return (
		<Tr>
			<Td px={['2', '6']}>
				<Checkbox colorScheme='pink' />
			</Td>
			<Td>
				<Box>
					<Text fontWeight='bold'>{name}</Text>
					<Text fontSize='sm' color='gray.300'>
						{email}
					</Text>
				</Box>
			</Td>
			<Td>
				<Text>{createdAt}</Text>
			</Td>
			<Td>
				<Link href='/dashboard'>
					<Button
						as='a'
						size='sm'
						fontSize='sm'
						colorScheme='blackAlpha'
						cursor='pointer'
						leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
					>
						Editar
					</Button>
				</Link>
			</Td>
		</Tr>
	);
};
