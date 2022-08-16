import { render, screen } from '@testing-library/react';
import { CreateUserButton } from '../CreateUserButton';

describe('Users page CreateUserButton component', () => {
	it('should render correctly', () => {
		render(<CreateUserButton />);

		expect(screen.getByText('Criar usuário')).toBeInTheDocument();
	});
});
