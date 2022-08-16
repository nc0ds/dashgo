import { render, screen } from '@testing-library/react';
import { Profile } from '../Profile';

describe('Header Profile component', () => {
	it('should render correctly when "wide" is true', () => {
		render(<Profile name='John Doe' email='john.doe@gmail.com' wide />);

		expect(screen.getByText('John Doe')).toBeInTheDocument();
		expect(screen.getByText('john.doe@gmail.com')).toBeInTheDocument();
		expect(screen.getByRole('img')).toBeInTheDocument();
	});

	it('should render correctly when "wide" is false', () => {
		render(<Profile name='John Doe' email='john.doe@gmail.com' wide={false} />);

		expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
		expect(screen.queryByText('john.doe@gmail.com')).not.toBeInTheDocument();
		expect(screen.getByRole('img')).toBeInTheDocument();
	});
});
