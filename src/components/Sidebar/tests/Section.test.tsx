import { render, screen } from '@testing-library/react';
import { Section } from '../Section';

describe('Sidebar Section component', () => {
	it('should render correctly', () => {
		render(
			<Section title='Title test'>
				<p>Link</p>
			</Section>
		);

		expect(screen.getByText('Title test')).toBeInTheDocument();
	});
});
