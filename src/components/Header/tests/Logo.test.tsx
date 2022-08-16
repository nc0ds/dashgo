import { render, screen } from '@testing-library/react';
import { Logo } from '../Logo';

describe('Header Logo component', () => {
	it('should render correctly', () => {
		render(<Logo />);

		expect(screen.getByText(/dashgo/i)).toBeInTheDocument();
	});
});
