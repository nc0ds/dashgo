import { render, screen } from '@testing-library/react';
import { RegistersCount } from '../RegistersCount';

describe('Pagination RegistersCount component', () => {
	it('should render correctly', () => {
		render(<RegistersCount />);

		expect(screen.getByText('10')).toBeInTheDocument();
		expect(screen.getByText('100')).toBeInTheDocument();
	});
});
