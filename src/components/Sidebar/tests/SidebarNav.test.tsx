import { render, screen } from '@testing-library/react';
import { SidebarNav } from '../SidebarNav';

jest.mock('next/router', () => {
	return {
		useRouter: jest.fn().mockReturnValue({
			asPath: '/',
		}),
	};
});

describe('Sidebar SidebarNav component', () => {
	it('should render correctly', () => {
		render(<SidebarNav />);

		expect(screen.getByText('Dashboard')).toBeInTheDocument();
		expect(screen.getByText('Usuários')).toBeInTheDocument();
	});
});
