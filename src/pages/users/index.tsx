import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useUsers } from '../../hooks/useUsers';

import { Box, Flex, Spinner, Text } from '@chakra-ui/react';

import { Main } from '../../components/Main';
import { Pagination } from '../../components/Pagination';
import { UsersTable } from '../../components/pages/Users/UsersTable';
import { UsersTableItem } from '../../components/pages/Users/UsersTableItem';
import { PageHeading } from '../../components/PageHeading';
import { CreateUserButton } from '../../components/pages/Users/CreateUserButton';

interface UserType {
	id: string;
	name: string;
	email: string;
	createdAt: string;
}

const Users: NextPage = () => {
	const [page, setPage] = useState<number>(1);

	const { data, isLoading, isFetching, error } = useUsers(page);

	return (
		<>
			<Head>
				<title>Usuários | dashgo</title>
			</Head>
			<Main>
				<Box width='100%' borderRadius={8} bgColor='gray.800' p='8'>
					<Flex mb='8' justify='space-between' align='center'>
						<PageHeading>
							Usuários
							{!isLoading && isFetching && <Spinner size='sm' ml='4' />}
						</PageHeading>
						<CreateUserButton />
					</Flex>
					{isLoading ? (
						<Flex align='center' justify='center' my='4'>
							<Spinner size='lg' />
						</Flex>
					) : error ? (
						<Flex align='center' justify='center'>
							<Text>Algo deu errado na busca de usuários.</Text>
						</Flex>
					) : (
						<>
							<Box overflowX='auto'>
								<UsersTable>
									{data?.users?.map((item) => (
										<UsersTableItem
											key={item.id}
											name={item.name}
											email={item.email}
											createdAt={item.created_at}
										/>
									))}
								</UsersTable>
							</Box>
							<Pagination
								totalCountOfRegisters={data?.totalCount}
								currentPage={page}
								registersPerPage={10}
								siblingsCount={1}
								onPageChange={setPage}
							/>
						</>
					)}
				</Box>
			</Main>
		</>
	);
};

export default Users;
