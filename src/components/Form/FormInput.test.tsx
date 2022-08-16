import { render, screen } from '@testing-library/react';
import { FieldError } from 'react-hook-form';
import { Input } from './Input';

describe('Form Input component', () => {
	it('should render correctly', () => {
		const error = {};
		render(<Input name='Email' label='Email' error={error as FieldError} />);

		expect(screen.getByText('Email')).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should show error message when have errors', () => {
		const error = {
			type: 'fake-error-type',
			message: 'Email inválido',
		};

		render(<Input name='Email' label='Email' error={error as FieldError} />);

		expect(screen.getByText('Email inválido')).toBeInTheDocument();
	});
});
