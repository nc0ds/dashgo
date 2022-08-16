import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

import { theme } from '@chakra-ui/react';

interface DashboardChartProps {
	categories: Array<string>;
	series: {
		name: string;
		data: Array<string | number>;
	}[];
}

export const DashboardChart: React.FC<DashboardChartProps> = ({
	categories,
	series,
}) => {
	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
			foreColor: theme.colors.gray[500],
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			colors: [theme.colors.pink[600]],
		},
		fill: {
			type: 'gradient',
			opacity: 0.3,
			colors: [theme.colors.pink[500]],
			gradient: {
				shade: 'dark',
				opacityFrom: 0.7,
				opacityTo: 0.3,
			},
		},
		markers: {
			colors: theme.colors.pink[700],
		},
		tooltip: {
			theme: 'dark',
			style: {
				fontFamily: 'Roboto',
			},
			marker: {
				show: false,
			},
		},
		xaxis: {
			type: 'datetime',
			axisBorder: {
				color: theme.colors.gray[600],
			},
			axisTick: {
				color: theme.colors.gray[600],
			},
			categories,
		},
	};

	return (
		<Chart
			type='area'
			height={160}
			options={options as any}
			series={series as any}
		/>
	);
};
