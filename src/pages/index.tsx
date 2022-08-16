import type { NextPage } from 'next';
import Head from 'next/head';

import { Flex } from '@chakra-ui/react';
import { LoginForm } from '../components/pages/Home/LoginForm';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Login | dashgo</title>
			</Head>
			<Flex w='100vw' h='100vh' align='center' justify='center'>
				<LoginForm />
			</Flex>
		</>
	);
};

export default Home;
