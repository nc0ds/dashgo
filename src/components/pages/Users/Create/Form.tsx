import React from 'react';
import { useRouter } from 'next/router';

import { useMutation } from '@tanstack/react-query';

import { api } from '../../../../services/api';

import { FieldError, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { VStack, SimpleGrid, Flex } from '@chakra-ui/react';

import { Input } from '../../../Form/Input';
import { FormButtons } from './FormButtons';
import { queryClient } from '../../../../services/reactQueryClient';

interface CreateUserFormData {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const createUserSchema = yup.object().shape({
	name: yup
		.string()
		.required('Nome é obrigatório')
		.min(2, 'Nome precisa ter mais de 2 letras'),
	email: yup.string().email('Email inválido').required('Email é obrigatório'),
	password: yup
		.string()
		.required('Senha é obrigatória')
		.min(6, 'Precisa ter mais de 6 caracteres'),
	confirmPassword: yup
		.string()
		.oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
		.required('Confirmar senha é obrigatório'),
});

export const Form: React.FC = () => {
	const router = useRouter();

	const createUser = useMutation(
		async (user: CreateUserFormData) => {
			const { data } = await api.post('/api/users', {
				user: {
					...user,
					createdAt: new Date().toISOString(),
				},
			});

			return data.user;
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['users']);
			},
		}
	);

	const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
		resolver: yupResolver(createUserSchema),
	});

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
		values
	) => {
		await createUser.mutateAsync(values);
		router.push('/users');
	};

	return (
		<VStack as='form' spacing='8' onSubmit={handleSubmit(handleCreateUser)}>
			<SimpleGrid minChildWidth={240} spacing={['6', '8']} w='100%'>
				<Input
					type='text'
					label='Nome completo'
					{...register('name')}
					error={formState.errors.name as FieldError}
				/>
				<Input
					type='email'
					label='E-mail'
					{...register('email')}
					error={formState.errors.email as FieldError}
				/>
			</SimpleGrid>
			<SimpleGrid minChildWidth={240} spacing={['6', '8']} w='100%'>
				<Input
					type='password'
					label='Senha'
					{...register('password')}
					error={formState.errors.password as FieldError}
				/>
				<Input
					type='password'
					label='Confirmar senha'
					{...register('confirmPassword')}
					error={formState.errors.confirmPassword as FieldError}
				/>
			</SimpleGrid>
			<Flex w='100%' mt={['6', '8']} justify='flex-end'>
				<FormButtons isLoading={formState.isSubmitting} />
			</Flex>
		</VStack>
	);
};
