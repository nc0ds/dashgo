import { HStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { PageButton } from './PageButton';
import { RegistersCount } from './RegistersCount';

interface PaginationProps {
	totalCountOfRegisters: number;
	registersPerPage?: number;
	currentPage?: number;
	siblingsCount?: number;
	onPageChange: (page: number) => void;
}

const generatePagesArray = (from: number, to: number): number[] => {
	return [...new Array(to - from)]
		.map((_: any, index: number) => from + index + 1)
		.filter((item) => item > 0);
};

export const Pagination: React.FC<PaginationProps> = ({
	totalCountOfRegisters,
	registersPerPage = 10,
	currentPage = 1,
	siblingsCount = 1,
	onPageChange,
}) => {
	const lastPage: number = Math.floor(totalCountOfRegisters / registersPerPage);
	const previousPages: number[] =
		currentPage > 1
			? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
			: [];
	const nextPages: number[] =
		currentPage < lastPage
			? generatePagesArray(
					currentPage,
					Math.min(currentPage + siblingsCount, lastPage)
			  )
			: [];

	const isWide: boolean = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Stack
			spacing='6'
			mt='8'
			justify='space-between'
			align='center'
			direction={isWide ? 'row' : 'column'}
		>
			<RegistersCount />
			<HStack spacing='2'>
				{currentPage - siblingsCount > 1 && (
					<>
						<PageButton onPageChange={onPageChange} page={1} />
						{currentPage - siblingsCount > 2 && (
							<Text color='gray.300' w='8' textAlign='center'>
								...
							</Text>
						)}
					</>
				)}
				{previousPages.length > 0 &&
					previousPages.map((item) => (
						<PageButton onPageChange={onPageChange} page={item} key={item} />
					))}
				<PageButton onPageChange={onPageChange} page={currentPage} disabled />
				{nextPages.length > 0 &&
					nextPages.map((item) => (
						<PageButton onPageChange={onPageChange} page={item} key={item} />
					))}
				{currentPage + siblingsCount < lastPage && (
					<>
						{currentPage + siblingsCount + 1 < lastPage && (
							<Text color='gray.300' w='8' textAlign='center'>
								...
							</Text>
						)}
						<PageButton onPageChange={onPageChange} page={lastPage} />
					</>
				)}
			</HStack>
		</Stack>
	);
};
