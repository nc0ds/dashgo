import { render, screen } from '@testing-library/react';
import { SearchInput } from '../SearchInput';

describe('Header SearchInput component', () => {
	it('should render correctly', () => {
		const { container } = render(<SearchInput />);

		const icon = container.querySelector('body > div > label > svg');

		expect(
			screen.getByPlaceholderText('Busque na plataforma')
		).toBeInTheDocument();
		expect(icon).toBeInTheDocument();
	});
});
