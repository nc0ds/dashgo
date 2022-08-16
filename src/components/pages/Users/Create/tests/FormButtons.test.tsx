import { render, screen } from '@testing-library/react';
import { FormButtons } from '../FormButtons';

describe('Users Create page FormButtons component', () => {
	it('should render correctly', () => {
		render(<FormButtons isLoading={false} />);

		expect(screen.getByText('Cancelar')).toBeInTheDocument();
		expect(screen.getByText('Salvar')).toBeInTheDocument();
	});
});
