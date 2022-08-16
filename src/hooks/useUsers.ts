import { useQuery } from '@tanstack/react-query';

import { api } from '../services/api';

interface UserType {
	id: string;
	name: string;
	email: string;
	created_at: string;
}

interface GetUsersReturnType {
	users: UserType[];
	totalCount: number;
}

export const getUsers = async (page: number): Promise<GetUsersReturnType> => {
	const { data, headers } = await api.get('/api/users', {
		params: {
			page,
		},
	});

	const totalCount = headers['x-total-count'];

	const users = data.users.map((item: UserType) => {
		return {
			id: item.id,
			name: item.name,
			email: item.email,
			created_at: new Date(item.created_at).toLocaleDateString('pt-BR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric',
			}),
		};
	});

	return {
		users,
		totalCount: Number(totalCount),
	};
};

export const useUsers = (page: number) => {
	const query = useQuery(['users', page], () => getUsers(page), {
		staleTime: 1000 * 30, // 30 seconds
	});

	return query;
};
