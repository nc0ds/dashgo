import { render, screen } from '@testing-library/react';
import { SidebarLink } from '../SidebarLink';
import { useRouter } from 'next/router';

jest.mock('next/router', () => {
	return {
		useRouter: jest.fn(),
	};
});

describe('Sidebar SidebarLink component', () => {
	it('should render correctly', () => {
		const useRouterMocked = jest.mocked(useRouter);

		useRouterMocked.mockReturnValueOnce({
			asPath: '/',
		} as any);

		render(
			<SidebarLink href='/' icon={jest.fn()}>
				Home
			</SidebarLink>
		);

		expect(screen.getByText('Home')).toBeInTheDocument();
	});
});
