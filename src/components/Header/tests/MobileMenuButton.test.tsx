import { render, screen } from '@testing-library/react';
import { MobileMenuButton } from '../MobileMenuButton';

describe('Header MobileMenuButton component', () => {
	it('should render correctly', () => {
		render(<MobileMenuButton />);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
