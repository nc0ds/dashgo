import { NextPage } from 'next';
import Head from 'next/head';

import { Main } from '../components/Main';

import { SimpleGrid } from '@chakra-ui/react';
import { DashboardChart } from '../components/pages/Dashboard/DashboardChart';
import { Container } from '../components/pages/Dashboard/Container';

const Dashboard: NextPage = () => {
	const categories = [
		new Date('2022-07-20 09:00:00').toISOString(),
		new Date('2022-07-21 09:00:00').toISOString(),
		new Date('2022-07-22 09:00:00').toISOString(),
		new Date('2022-07-23 09:00:00').toISOString(),
		new Date('2022-07-24 09:00:00').toISOString(),
		new Date('2022-07-25 09:00:00').toISOString(),
		new Date('2022-07-26 09:00:00').toISOString(),
	];

	const weekSubscribersChartSeries = [
		{
			name: 'Novos inscritos',
			data: [31, 108, 56, 78, 42, 65, 125],
		},
	];

	return (
		<>
			<Head>
				<title>Dashboard | dashgo</title>
			</Head>
			<Main>
				<SimpleGrid
					w='100%'
					gap='4'
					minChildWidth='320px'
					alignContent='flex-start'
				>
					<Container title='Inscritos da semana'>
						<DashboardChart
							categories={categories}
							series={weekSubscribersChartSeries}
						/>
					</Container>
					<Container title='Taxa de abertura'>
						<DashboardChart
							categories={categories}
							series={weekSubscribersChartSeries}
						/>
					</Container>
				</SimpleGrid>
			</Main>
		</>
	);
};

export default Dashboard;
