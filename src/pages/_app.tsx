import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerContextProvider } from '../hooks/useSidebarDrawerContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/reactQueryClient';

if (process.env.NODE_ENV === 'development') {
	makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerContextProvider>
					<Component {...pageProps} />
				</SidebarDrawerContextProvider>
			</ChakraProvider>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default MyApp;
