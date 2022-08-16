import React from 'react';
import { useRouter } from 'next/router';

import {
	FieldError,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Flex, Stack, Center, Heading, Text, Button } from '@chakra-ui/react';

import { Input } from '../../Form/Input';

interface SignInFormData {
	email: string;
	password: string;
}

const signInFormSchema = yup.object().shape({
	email: yup.string().email('E-mail inválido').required('Digite um email'),
	password: yup
		.string()
		.required('Digite sua senha')
		.min(6, 'Precisa ter mais de 6 caracteres'),
});

export const LoginForm: React.FC = () => {
	const { register, handleSubmit, formState } = useForm<SignInFormData>({
		resolver: yupResolver(signInFormSchema),
	});
	const router = useRouter();

	const handleSignIn: SubmitHandler<FieldValues | SignInFormData> = (
		values
	) => {
		router.push('/dashboard');
	};

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit(handleSignIn)}
			w='100vw'
			maxW={360}
			bgColor='gray.800'
			p='6'
			borderRadius={8}
			flexDir='column'
			align='center'
		>
			<Stack spacing='6' w='100%'>
				<Center>
					<Heading letterSpacing='tight'>
						dashgo
						<Text as='span' color='pink.500' ml='1'>
							.
						</Text>
					</Heading>
				</Center>
				<Input
					label='E-mail:'
					type='email'
					{...register('email')}
					error={formState.errors.email as FieldError}
				/>
				<Input
					label='Senha:'
					type='password'
					{...register('password')}
					error={formState.errors.password as FieldError}
				/>
				<Button
					type='submit'
					colorScheme='pink'
					w='100%'
					size='lg'
					isLoading={formState.isSubmitting}
				>
					Entrar
				</Button>
			</Stack>
		</Flex>
	);
};
