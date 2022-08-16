import React from 'react';
import Link from 'next/link';

import { Button, Icon } from '@chakra-ui/react';

import { RiAddLine } from 'react-icons/ri';

export const CreateUserButton: React.FC = () => {
	return (
		<Link href='/users/create' passHref>
			<Button
				as='a'
				size={['xs', 'sm']}
				fontSize={['xs', 'sm']}
				colorScheme='pink'
				cursor='pointer'
				leftIcon={<Icon as={RiAddLine} fontSize='20' />}
			>
				Criar usuário
			</Button>
		</Link>
	);
};
