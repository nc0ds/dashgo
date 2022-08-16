import { render } from '@testing-library/react';
import { NotificationsNav } from '../NotificationsNav';

describe('Header NotificationsNav component', () => {
	it('should render correctly', () => {
		const { container } = render(<NotificationsNav />);

		const bellIcon = container.querySelector(
			'body > div > div > svg:nth-child(1)'
		);
		const profileIcon = container.querySelector(
			'body > div > div > svg:nth-child(2)'
		);

		expect(bellIcon).toBeInTheDocument();
		expect(profileIcon).toBeInTheDocument();
	});
});
