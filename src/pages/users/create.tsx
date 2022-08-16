import { NextPage } from 'next';
import Head from 'next/head';

import { Main } from '../../components/Main';

import { Box, Divider } from '@chakra-ui/react';
import { PageHeading } from '../../components/PageHeading';
import { Form } from '../../components/pages/Users/Create/Form';

const CreateUser: NextPage = () => {
	return (
		<>
			<Head>
				<title>Criar usuário | dashgo</title>
			</Head>
			<Main>
				<Box width='100%' borderRadius={8} bgColor='gray.800' p='8'>
					<PageHeading>Criar usuário</PageHeading>
					<Divider my='6' borderColor='gray.700' />
					<Form />
				</Box>
			</Main>
		</>
	);
};

export default CreateUser;
