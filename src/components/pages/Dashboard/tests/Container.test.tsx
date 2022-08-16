import { render, screen } from '@testing-library/react';
import { Container } from '../Container';

describe('Dashboard page Container component', () => {
	it('should render correctly', () => {
		render(
			<Container title='Dashboard'>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			</Container>
		);

		expect(screen.getByText('Dashboard')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
			)
		).toBeInTheDocument();
	});
});
