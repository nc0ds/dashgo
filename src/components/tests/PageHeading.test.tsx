import { render, screen } from '@testing-library/react';
import { PageHeading } from '../PageHeading';

describe('PageHeading component', () => {
	it('should render correctly', () => {
		render(<PageHeading>Testing</PageHeading>);

		expect(screen.getByText('Testing')).toBeInTheDocument();
	});
});
