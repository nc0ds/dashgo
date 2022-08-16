import React from 'react';
import Link from 'next/link';

import { HStack, Button, Icon } from '@chakra-ui/react';

import { RiCloseLine, RiCheckLine } from 'react-icons/ri';

interface FormButtonsProps {
	isLoading: boolean;
}

export const FormButtons: React.FC<FormButtonsProps> = ({ isLoading }) => {
	return (
		<HStack spacing='4'>
			<Link href='/users' passHref>
				<Button
					as='a'
					colorScheme='blackAlpha'
					leftIcon={<Icon as={RiCloseLine} fontSize='20' />}
					cursor='pointer'
					size={['sm', 'md']}
				>
					Cancelar
				</Button>
			</Link>
			<Button
				type='submit'
				colorScheme='pink'
				leftIcon={<Icon as={RiCheckLine} fontSize='20' />}
				size={['sm', 'md']}
				isLoading={isLoading}
			>
				Salvar
			</Button>
		</HStack>
	);
};
